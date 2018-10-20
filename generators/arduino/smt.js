
'use strict';

goog.provide('Blockly.Arduino.smt');

goog.require('Blockly.Arduino');

/* Ultrasonic Sensor */
Blockly.Arduino.smt_hcsr04 = function() {
  var dropdown_triger_pin = Blockly.Arduino.valueToCode(this, 'TRIGER', Blockly.Arduino.ORDER_ATOMIC); 
  var dropdown_dist_pin = Blockly.Arduino.valueToCode(this, 'DIST', Blockly.Arduino.ORDER_ATOMIC); 
  Blockly.Arduino.definitions_['define_mesure_distance_cm'] = "int distance_cm(byte trig_pin,byte dist_pin)\n"+
    "{\n"+
    "  digitalWrite(trig_pin,HIGH);\n"+
    "  delayMicroseconds(1000);\n"+
    "  digitalWrite(trig_pin,LOW);\n"+
    "  int value = (pulseIn(dist_pin,HIGH)/2)/29.1+2;\n"+
    "  if (value>255) { value=255; }\n"+
    "  delay(20);\n"+
    "  return value;\n"+
    "}";
  Blockly.Arduino.setups_['setup_sonar_' + dropdown_triger_pin] = 'pinMode('+dropdown_triger_pin+',OUTPUT);//Sonar triger pin\n'
  + '  pinMode('+dropdown_dist_pin+',INPUT);//Sonar distance pulse pin';
  var code = 'distance_cm('+dropdown_triger_pin+','+dropdown_dist_pin+')';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

/* Servo Motor */
Blockly.Arduino.smt_servo_attach = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('SERVO_NAME');

  Blockly.Arduino.includes_['define_servo'] = '#include <Servo.h>';
  Blockly.Arduino.definitions_['var_servo' + dropdown_name] = 'Servo ' + dropdown_name + ';';
  Blockly.Arduino.setups_['setup_servo_' + dropdown_name] = dropdown_name + '.attach(' + value_pin + ');';
  return '';
};

Blockly.Arduino.smt_servo_move = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'DEGREE', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('SERVO_NAME');

  var code = dropdown_name + '.write(' + value_degree + ');\n';
  return code;
};

Blockly.Arduino.smt_servo_read_degrees = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('SERVO_NAME');

  var code = dropdown_name + '.read()';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.smt_servo_attached = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('SERVO_NAME');

  var code = dropdown_name+'.attached()';  
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};

Blockly.Arduino.smt_servo_detach = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('SERVO_NAME');
  
  var code = dropdown_name+'.detach();';
  return code;
};

Blockly.Arduino.smt_servo_rot_continue = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var value_degree = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('SERVO_NAME');

  var code = dropdown_name + '.write(' + value_degree + ');\n';
  return code;
};

Blockly.Arduino.smt_servo_rot_continue_param = function() {
  var value_pin = Blockly.Arduino.valueToCode(this, 'PIN', Blockly.Arduino.ORDER_ATOMIC);
  var degree = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_etat = this.getFieldValue('ETAT');
  var dropdown_name = this.getFieldValue('SERVO_NAME');
  
  if (dropdown_etat == "FORWARD") var value_degree = 90 + parseInt(degree);
  if (dropdown_etat == "BACKWARD") var value_degree = 90 - parseInt(degree);

  var code = dropdown_name + '.write(' + value_degree + ');\n';
  return code;
};

/* L298N Motor Driver */
Blockly.Arduino.smt_l298n_motor_init = function() {
  var id = this.getFieldValue('L298_NAME');
  var PinEN = this.getFieldValue("PIN-EN");
  var PinIN1 = this.getFieldValue("PIN-IN1");
  var PinIN2 = this.getFieldValue("PIN-IN2");
  var mysetup = "";

  mysetup += "// pin assignation for L298N : " + id + "\n";
  mysetup += " pinMode("+PinIN1+",OUTPUT);//IN1_" + id +" Pin\n" ;
  mysetup += " pinMode("+PinIN2+",OUTPUT);//IN2_" + id +" Pin\n";
  mysetup += " pinMode("+PinEN+",OUTPUT);//PWM_" + id +" Pin\n" ;
  Blockly.Arduino.setups_["smt_setup_l298n_motor" + id] = mysetup;
  Blockly.Arduino.definitions_["smt_setup_l298n_motor" + id] = "// pin assignation for L298N : " + id + "\n"+
	"int l298n_" + id + "[3] = {"+PinEN+", "+PinIN1+", "+PinIN2+"};\n";
  var code = "";
  return code;
};

Blockly.Arduino.smt_l298n_motor = function() {
  var dropdown_direction = this.getFieldValue('DIRECTION'); 
  var id = this.getFieldValue('L298_NAME');
  var speed = Blockly.Arduino.valueToCode(this, 'SPEED', Blockly.Arduino.ORDER_ATOMIC) || '127';

  var code = "";
  if(dropdown_direction==="forward"){
    Blockly.Arduino.definitions_['define_smt_l298n_forward'] = "void smt_l298n_forward(int speed,int Pins[3])\n"+
"{\n"+
     "  analogWrite(Pins[0],speed);//Motor speed\n"+
     "  digitalWrite(Pins[1],HIGH);//turn DC Motor move clockwise\n"+
     "  digitalWrite(Pins[2],LOW);//turn DC Motor move clockwise\n"+
"}\n";
    code="smt_l298n_forward("+speed+", l298n_" + id + ");\n";
  } else if (dropdown_direction==="backward") {
    Blockly.Arduino.definitions_['define_smt_l298n_backward'] = "void smt_l298n_backward(int speed,int Pins[3])\n"+
"{\n"+
     "  analogWrite(Pins[0],speed);//Motor speed\n"+
     "  digitalWrite(Pins[1],LOW);//turn DC Motor move anti-clockwise\n"+
     "  digitalWrite(Pins[2],HIGH);//turn DC Motor move anti-clockwise\n"+
"}\n\n";
    code="smt_l298n_backward("+speed+", l298n_" + id + ");\n";
  } else if (dropdown_direction==="stop"){
    Blockly.Arduino.definitions_['define_smt_l298n_stop'] = "void smt_l298n_stop(int Pins[3])\n"+
"{\n"+
     "  analogWrite(Pins[0],0);//Motor speed\n"+
     "  digitalWrite(Pins[1],LOW);//turn DC Motor off\n"+
     "  digitalWrite(Pins[2],LOW);//turn DC Motor off\n"+
"}\n\n";
    code="smt_l298n_stop(l298n_" + id + ");\n";
  } else if (dropdown_direction==="brake"){
    Blockly.Arduino.definitions_['define_smt_l298n_brake'] = "void smt_l298n_brake(int Pins[3])\n"+
"{\n"+
     "  analogWrite(Pins[0],255);//Motor speed\n"+
     "  digitalWrite(Pins[1],LOW);//turn DC Motor off\n"+
     "  digitalWrite(Pins[2],LOW);//turn DC Motor off\n"+
"}\n\n";
    code="smt_l298n_brake(l298n_" + id + ");\n";
  }
  return code;
};

/* WS2812 LEDs */
Blockly.Arduino.smt_ledRGB_WS2812B_init = function() {
  var pin_ledrgb = Blockly.Arduino.valueToCode(this, 'Pin_LedRGB_init', Blockly.Arduino.ORDER_ATOMIC);
  var numpixels = Blockly.Arduino.valueToCode(this, 'Number_of_Pixels', Blockly.Arduino.ORDER_ATOMIC);
  var lumin = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);
  var dropdown_name = this.getFieldValue('NEOPIXEL_NAME');
  Blockly.Arduino.includes_['define_ledRGB_WS2812B'] = '#include <Adafruit_NeoPixel.h>';
  Blockly.Arduino.definitions_['define_ledRGB_WS2812B' + dropdown_name] = 'Adafruit_NeoPixel pixels_'+dropdown_name+ ' = Adafruit_NeoPixel('+numpixels+', '+pin_ledrgb+', NEO_GRB + NEO_KHZ800);';
  //dans le setup
  Blockly.Arduino.setups_['setup_pin_ledrgb'+dropdown_name] = 'pinMode('+pin_ledrgb+', OUTPUT);';
  Blockly.Arduino.setups_['setup_ledRGB_WS2812B'+dropdown_name] = 'pixels_'+dropdown_name+'.begin();';
  return '';
};

Blockly.Arduino.smt_ledRGB_WS2812B_setPixelColor = function() {
  var dropdown_name = this.getFieldValue('NEOPIXEL_NAME');
  var pixel_number = Blockly.Arduino.valueToCode(this, 'Pixel_number', Blockly.Arduino.ORDER_ATOMIC);
  var red = Blockly.Arduino.valueToCode(this, 'Red', Blockly.Arduino.ORDER_ATOMIC);
  var green = Blockly.Arduino.valueToCode(this, 'Green', Blockly.Arduino.ORDER_ATOMIC);
  var blue = Blockly.Arduino.valueToCode(this, 'Blue', Blockly.Arduino.ORDER_ATOMIC);

  var code = 'pixels_'+dropdown_name+'.setPixelColor('+pixel_number+', pixels_'+dropdown_name+'.Color('+red+','+green+','+blue+'));\n'
			+ 'pixels_'+dropdown_name+'.show();\n';
  return code;
};

Blockly.Arduino.smt_ledRGB_WS2812B_setBrightness = function() {
  var dropdown_name = this.getFieldValue('NEOPIXEL_NAME');
  var lumin = Blockly.Arduino.valueToCode(this, 'Brightness', Blockly.Arduino.ORDER_ATOMIC);
  //dans le setup
  var code = 'pixels_'+dropdown_name+'.setBrightness('+lumin+');\n';
  return code;
};
