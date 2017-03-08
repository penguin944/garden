#include <Adafruit_MQTT.h>
#include <Adafruit_MQTT_Client.h>

#include <ESP8266WiFi.h>

// Expose Espressif SDK functionality
extern "C" {
#include "user_interface.h"
}

/*
Sensor Connection 
  Sensor pin 1 - no connection 
  Sensor pin 2 - Huzzah 3V3
  Sensor pin 3 - Huzzah Pin 4 (SDA I2C Data)
  Sensor pin 4 - Huzzah Pin 5 (SCL I2C Clock)
  Sensor pin 5 - Huzzah pin 12
  Sensor pin 6 - Huzzah GND
 
Battery Connection
  Huzzah RST - Huzzah Pin 16 (Allows for RTC Reset)
  Huzzah BAT - 1M Resistor
                  - Huzzah ADC 
                  - 220K Resister - GND  
*/

//#define DEBUG true

#define AIO_SERVER        "io.adafruit.com"
#define AIO_SERVERPORT    1883                   // use 8883 for SSL
#define AIO_USERNAME      "penguin944"
#define AIO_KEY           "d4817eef854034849f640ab1e6d4ccfa41daeccb"

#define WIFI_SSID         "NETGEAR68"
#define WIFI_PASS         "vastvalley228"

// how long to sleep between runs (in seconds)
#define SLEEP_LENGTH        600

// how often to report battery level (in seconds)
#define BATTERY_INTERVAL    3600

// how often to report moisture level (in seconds)
#define SENSOR_INTERVAL     1200

#define BATTERY_SLEEP_CYCLES BATTERY_INTERVAL / SLEEP_LENGTH
#define SENSOR_SLEEP_CYCLES SENSOR_INTERVAL / SLEEP_LENGTH

#define SENSOR_ADDRESS_BED1 0x20
#define SENSOR_ADDRESS_BED2 0x21

const char ssid[] = WIFI_SSID; 
const char pass[] = WIFI_PASS;

WiFiClient wifiClient;

// Store the MQTT server, username, and password in flash memory.
// This is required for using the Adafruit MQTT library.
const char MQTT_SERVER[] PROGMEM    = AIO_SERVER;
const char MQTT_USERNAME[] PROGMEM  = AIO_USERNAME;
const char MQTT_PASSWORD[] PROGMEM  = AIO_KEY;

// Setup the MQTT client class by passing in the WiFi client and MQTT server and login details.
Adafruit_MQTT_Client mqtt(&wifiClient, MQTT_SERVER, AIO_SERVERPORT, MQTT_USERNAME, MQTT_PASSWORD);

/****************************** Feeds ***************************************/
const char MOISTURE_FEED_1[] PROGMEM = AIO_USERNAME "/feeds/garden-moisture-bed1";
Adafruit_MQTT_Publish moistureBed1Feed = Adafruit_MQTT_Publish(&mqtt, MOISTURE_FEED_1);

const char MOISTURE_FEED_2[] PROGMEM = AIO_USERNAME "/feeds/garden-moisture-bed2";
Adafruit_MQTT_Publish moistureBed2Feed = Adafruit_MQTT_Publish(&mqtt, MOISTURE_FEED_2);

const char TEMPERATURE_FEED_1[] PROGMEM = AIO_USERNAME "/feeds/garden-temperature-bed1";
Adafruit_MQTT_Publish temperatureBed1Feed = Adafruit_MQTT_Publish(&mqtt, TEMPERATURE_FEED_1);

const char TEMPERATURE_FEED_2[] PROGMEM = AIO_USERNAME "/feeds/garden-temperature-bed2";
Adafruit_MQTT_Publish temperatureBed2Feed = Adafruit_MQTT_Publish(&mqtt, TEMPERATURE_FEED_2);

const char LIGHT_LEVEL_FEED[] PROGMEM = AIO_USERNAME "/feeds/garden-light-level";
Adafruit_MQTT_Publish lightLevelFeed = Adafruit_MQTT_Publish(&mqtt, LIGHT_LEVEL_FEED);

const char BATTERY_FEED[] PROGMEM = AIO_USERNAME "/feeds/garden-battery-level";
Adafruit_MQTT_Publish batteryLevelFeed = Adafruit_MQTT_Publish(&mqtt, BATTERY_FEED);

const char SIGNAL_STRENGTH_FEED[] PROGMEM = AIO_USERNAME "/feeds/garden-wifi-signal-strength";
Adafruit_MQTT_Publish signalStrengthFeed = Adafruit_MQTT_Publish(&mqtt, SIGNAL_STRENGTH_FEED);

typedef struct _tagPoint {
  uint32 batteryCount;
  uint32 sensorCount;
} RTC_DATA;
RTC_DATA rtc_mem_data;

// Bug workaround for Arduino 1.6.6, it seems to need a function declaration
// for some reason (only affects ESP8266, likely an arduino-builder bug).
//void MQTT_connect();

void setup() {
  Serial.begin(9600);

  Serial.println("");

  int restartReason = getRestartReason();
  switch(restartReason){
    case 0: // First Boot
      Serial.println("First boot - disable WiFi to lower power consumption.");
      turnWiFiOff();
      initializeCounter();
      break;

    case 4: // Program restart (Ex. ESP.restart())
      break;

    case 5: // Wake up from deep-sleep
      Serial.println("Woke from deep sleep.");
      readCounter();
      incrementCounter();
      break;

    default:
      readCounter();
      incrementCounter();
      break;
  }
  
  if(rtc_mem_data.batteryCount == BATTERY_SLEEP_CYCLES) {
    // reset battery counter
    rtc_mem_data.batteryCount = 0;

    publishBegin();

    publishBatteryLevel();

  }else if(rtc_mem_data.batteryCount > BATTERY_SLEEP_CYCLES) {
    // reset battery counter
    rtc_mem_data.batteryCount = 0;
  }
  
  if(rtc_mem_data.sensorCount == SENSOR_SLEEP_CYCLES) {
    // reset moisture counter
    rtc_mem_data.sensorCount = 0;

    publishBegin();
    
    publishSensorValues(1);
    publishSensorValues(2);
    publishWiFiSignalStrength();
    
  }else if(rtc_mem_data.sensorCount > SENSOR_SLEEP_CYCLES) {
    // reset moisture counter
    rtc_mem_data.sensorCount = 0;
  }

  sleepSensor(SENSOR_ADDRESS_BED1);
  delay(10);
  sleepSensor(SENSOR_ADDRESS_BED2);

  publishComplete();

  writeCounter();

  // If next boot will result in a report, wake with WiFi on. Otherwise leave it off.
  if(rtc_mem_data.batteryCount + 1 == BATTERY_SLEEP_CYCLES
    || rtc_mem_data.sensorCount + 1 == SENSOR_SLEEP_CYCLES
  ){
    sleepWiFiOn();
  
  }else{
    sleepWiFiOff();
  }
}

void loop(){}

void publishBegin(){
  // WiFi Connect
  connectWiFi();
  
  // Ensure the connection to the MQTT server is alive
  connectMQTT();
}

void publishComplete(){
  mqtt.disconnect();
}

void publishBatteryLevel(){
  uint8_t batteryLevel = getBatteryLevelPct();
  Serial.print(F("Battery level: "));
  if(!batteryLevelFeed.publish(batteryLevel)){
    Serial.println(F("Failed to publish"));

  }else{
    Serial.print(batteryLevel);
    Serial.println("%");
  }
}

void publishWiFiSignalStrength(){
  Serial.print(F("WiFi Signal: "));
  int16_t signalStrength = WiFi.RSSI();
  if(!signalStrengthFeed.publish(signalStrength)){
      Serial.println(F("Failed to publish"));
  
  }else{
    Serial.print(signalStrength);
    Serial.println(F("dBm"));
  }  
}

void publishSensorValues(uint8_t bedNumber){
  uint8_t sensorAddress = bedNumber == 1 ? SENSOR_ADDRESS_BED1 : SENSOR_ADDRESS_BED2;
  Adafruit_MQTT_Publish moistureFeed = bedNumber == 1 ? moistureBed1Feed : moistureBed2Feed;
  Adafruit_MQTT_Publish temperatureFeed = bedNumber == 1 ? temperatureBed1Feed : temperatureBed2Feed;
    
  resetSensor(sensorAddress);

  Serial.println(F("------------------------------"));
  Serial.print(F("Bed "));
  Serial.println(bedNumber);

  Serial.print(F("    Moisture: "));
  uint8_t moisture = getMoistureLevel(sensorAddress);
  if(!moistureFeed.publish(moisture)){
    Serial.println(F("Failed to publish"));
    
  }else{
    Serial.print(moisture);
    Serial.println("%");
  }
  
  Serial.print(F(" Temperature: "));
  float temperature = getTemperature(sensorAddress);
  if(!temperatureFeed.publish(temperature)){
    Serial.println(F("Failed to publish"));
    
  }else{
    Serial.print(temperature);
    Serial.println("F");
  }
  Serial.println(F("------------------------------"));

/*
  Serial.print("\tLight Level: ");
  uint8_t lightLevel = getLightLevel(sensorAddress);
  if(!lightLevelFeed.publish(lightLevel)){
    Serial.println("Failed to publish");
  
  }else{
    Serial.print(lightLevel);
    Serial.println("%");
  }
*/
}


/*
typedef enum rst_reason {
  REASON_DEFAULT_RST = 0, // Normal startup by power
  REASON_WDT_RST = 1, // Hardware watch dog reset
  REASON_EXCEPTION_RST = 2, // Software watch dog reset, GPIO status won’t change
  REASON_SOFT_WDT_RST = 3, // Software restart, system restart, GPIO status won’t change
  REASON_SOFT_RESTART = 4, // Program restart (Ex. ESP.restart())
  REASON_DEEP_SLEEP_AWAKE = 5, // Wake up from deep-sleep
  REASON_EXT_SYS_RST = 6 //External system reset  
};
*/
int getRestartReason(){
  return ESP.getResetInfoPtr()->reason;
}

void turnWiFiOff(){
  Serial.println(F("Turning WiFi OFF...\n"));
  WiFi.mode(WIFI_OFF);
}

void sleepWiFiOff(){
  Serial.print(F("Going to sleep for "));
  Serial.print(SLEEP_LENGTH);
  Serial.println(F("s - WiFi OFF...\n\n"));
  ESP.deepSleep(SLEEP_LENGTH * 1000000, WAKE_RF_DISABLED);
}

void sleepWiFiOn(){
  Serial.print(F("Going to sleep for "));
  Serial.print(SLEEP_LENGTH);
  Serial.println(F("s - WiFi ON...\n\n"));
  ESP.deepSleep(SLEEP_LENGTH * 1000000, WAKE_RF_DEFAULT);
}

void initializeCounter(){
  rtc_mem_data.batteryCount = 0;
  rtc_mem_data.sensorCount = 0;
}

void incrementCounter(){
  rtc_mem_data.batteryCount += 1;
  rtc_mem_data.sensorCount += 1;  
}

void readCounter(){
  if(system_rtc_mem_read(65, &rtc_mem_data, sizeof(rtc_mem_data))){
    Serial.print(F("RTC mem read is OK:  "));
    printCounter();
    
  }else{
    Serial.println(F("RTC mem read failed"));
  }
}

void writeCounter(){  
  if(system_rtc_mem_write(65, &rtc_mem_data, sizeof(rtc_mem_data))){
    Serial.print(F("RTC mem write is OK:  "));
    printCounter();
    
  }else{
    Serial.println(F("RTC mem write failed"));
  }
}

void printCounter(){
  Serial.print(F("batteryCount-"));
  Serial.print(rtc_mem_data.batteryCount);
  Serial.print(" of ");
  Serial.print(BATTERY_SLEEP_CYCLES);
  Serial.print(F(" / sensorCount-"));
  Serial.print(rtc_mem_data.sensorCount);
  Serial.print(" of ");
  Serial.println(SENSOR_SLEEP_CYCLES);
}

// Function to connect 
void connectMQTT() {
  // Stop if already connected.
  if(mqtt.connected()){
    return;
  }

  uint8_t ret;
  uint8_t retries = 3;
  while ((ret = mqtt.connect()) != 0) { // connect will return 0 for connected
    Serial.print("Connecting to MQTT... ");
    Serial.println(mqtt.connectErrorString(ret));
    Serial.println("Retrying MQTT connection in 5 seconds...");
    mqtt.disconnect();
    delay(5000);  // wait 5 seconds
    retries--;
    if (retries == 0) {
      Serial.println("MQTT connection failed after 3 tries...");
      return;
    }
  }
  Serial.println("MQTT Connected!");
}

void connectWiFi(){
  // Stop if already connected.
  if(WiFi.status() == WL_CONNECTED){
    return;
  }
  
  // attempt to connect to Wifi network:
  Serial.print(F("Attempting to connect to WPA SSID: "));
  Serial.print(ssid);
  Serial.println(F("... "));

  WiFi.forceSleepWake();
  WiFi.mode(WIFI_STA);
  wifi_station_connect();

  uint8_t attempt = 0;

  // Connect to WPA/WPA2 network:    
  WiFi.begin(ssid, pass);
  while(WiFi.status() != WL_CONNECTED){ 
    Serial.print(".");
    
    // wait 10 seconds for connection:
    delay(5000);

    attempt++;
    if (attempt == 10){
      Serial.println("-----> Could not connect to WIFI");
      ESP.restart();
    }
  }

  // you're connected now, so print out the data:
  Serial.println(F("Connected to the network"));

  // print your WiFi shield's IP address:
  IPAddress ip = WiFi.localIP();
  Serial.print(F("IP Address: "));
  Serial.println(ip);
}
