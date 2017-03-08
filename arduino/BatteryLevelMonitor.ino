// Expose Espressif SDK functionality - wrapped in ifdef so that it still
// compiles on other platforms
#ifdef ESP8266
extern "C" {
#include "user_interface.h"
}
#endif

// read the battery level from ESP8266 analog in pin.
// analog read level is 10 bit 0-1024 (0V-1V).
// the 1M & 222K voltage divider takes the max
// lipo value of 4.2V and drops it to 0.758V max.
// this means our min analog read value should be 580 (3.14V)
// and the max analog read value should be 774 (4.2V).
uint16_t getBatteryMeasurement(){
  return system_adc_read();
}

uint8_t getBatteryLevelPct(){
  uint16_t reading = getBatteryMeasurement();

#ifdef DEBUG
  Serial.print("Raw Battery: ");
  Serial.println(reading);
#endif
  
  return map(reading, 580, 775, 0, 100);
}
