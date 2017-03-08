#include <Wire.h>

void writeI2CRegister8bit(uint8_t addr, uint8_t value) {
  Wire.beginTransmission(addr);
  Wire.write(value);
  Wire.endTransmission();
}

int16_t readI2CRegister16bit(uint8_t addr, uint8_t reg) {
  Wire.beginTransmission(addr);
  Wire.write(reg);
  Wire.endTransmission();
  
  delay(20);
  Wire.requestFrom(addr, static_cast<uint8_t>(2));
  
  int16_t t = -1;
  if(Wire.available() == 2){
    t = Wire.read() << 8;
    t |= Wire.read();
  }
  return t;
}

/* Writing 0x08 to the device will put it to sleep */
void sleepSensor(uint8_t addr){
  Wire.begin();

  writeI2CRegister8bit(addr, 8);
}

void resetSensor(uint8_t addr){
  Wire.begin();
  
  writeI2CRegister8bit(addr, 6); //reset
  delay(500);
}

uint8_t getMoistureLevel(uint8_t addr){
  uint16_t capacitance = readI2CRegister16bit(addr, 0);

#ifdef DEBUG
    Serial.print("Raw capacitance: ");
    Serial.println(capacitance);
#endif
  
  return map(capacitance, 300, 685, 0, 100);
}

float getTemperature(uint8_t addr){
  float tempC = readI2CRegister16bit(addr, 5) / 10.0;
  float tempF = (tempC * 9) / 5 + 32;

  return tempF;
}

uint8_t getLightLevel(uint8_t addr){
  writeI2CRegister8bit(addr, 3); //request light measurement  
  delay(500);
  
  uint16_t lightLevel = 65535 - readI2CRegister16bit(addr, 4);
  
  return map(lightLevel, 1, 65535, 0, 100);
}

