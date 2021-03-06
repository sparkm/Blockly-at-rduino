'use strict';

goog.provide('Blockly.Msg.es');

goog.require('Blockly.Msg');

Blockly.Msg.SV_tab1 = "Entradas lógicas";
Blockly.Msg.SV_tab2 = "Salidas lógicas/PWM";
Blockly.Msg.SV_tab3 = "Entradas analógicas";
Blockly.Msg.SV_tab4 = "Escrutinio";
Blockly.Msg.SV_tab5 = "Funciones avanzadas";
Blockly.Msg.SV_tab5_1 = "Sensores/actuadores trebajando";
Blockly.Msg.SV_tab5_2 = "Bus i2c";
Blockly.Msg.SV_tab5_3 = "Encuestas HTTP";
Blockly.Msg.SV_tab5_4 = "Informes";
Blockly.Msg.SV_visible_tab4 = "Visualiza";
Blockly.Msg.SV_alert1 = "Vuestro navegador es compatible con los websockets";
Blockly.Msg.SV_alert2 = "Vuestro navegador no es compatible con los websockets";
Blockly.Msg.SV_onOpen = " La supervisión está conectada a vuestra tarjeta";
Blockly.Msg.SV_onClose = " El servidor parece cerrado y el websocket inaccesible.";
Blockly.Msg.SV_onMessage_analog = "pin analógico desconocido";
Blockly.Msg.SV_onMessage_digital = "pin digital desconocido";
Blockly.Msg.SV_onMessage_i2c = "No hay frente definido";
Blockly.Msg.SV_NotCon = " Error : connexión a la tarjeta imposible! Está lanzado el servidor ?";
Blockly.Msg.SV_Con = " Conexión a la tarjeta establecida !";
Blockly.Msg.SV_enabled = "Activa";
Blockly.Msg.SV_disabled = "Desactiva";
Blockly.Msg.SV_pin_e = "pin";
Blockly.Msg.SV_pin_s = "Configura el pin";
Blockly.Msg.SV_low_e = "Activa";
Blockly.Msg.SV_high_e = "Desactiva";
Blockly.Msg.SV_low_s = "desactivado";
Blockly.Msg.SV_high_s = "activado";
Blockly.Msg.SV_PWM = "con un señal modulado por PWM~";
Blockly.Msg.SV_get_analog_map = "Lista de puertos analógicos";
Blockly.Msg.SV_get_capability = "Lista de posibilidades de connexión a los pines";
Blockly.Msg.SV_get_firmware = "Versión del firmware de la tarjeta";
Blockly.Msg.SV_get_protocol = "Versión del protocolo de comunicación";
Blockly.Msg.SV_get_pymata = "Versión del servidor PyMata";
Blockly.Msg.SV_get_pin_report = "Obtiene un informe de estado sobre el pin :";
Blockly.Msg.SV_get_pin_report_text = "(para obtener un informe de estado, seleccionad primero el número de pin, o bien escoged el campo, y pulsadlo con el botón";
Blockly.Msg.SV_digital_pin = "Pin digital : ";
Blockly.Msg.SV_analog_pin = "Pin analógico A";
Blockly.Msg.SV_read_pin = "Lee";
Blockly.Msg.SV_data_latch = "Desde : ";
Blockly.Msg.SV_data_latch1 = " - ";
Blockly.Msg.SV_data_latch2 = "subiendo";
Blockly.Msg.SV_data_latch3 = "bajando";
Blockly.Msg.SV_latch_event = "fecha y hora : ";
Blockly.Msg.SV_latch_digital_pin = "Tabla de datos digital cerrada";
Blockly.Msg.SV_latch_analog_pin = "Tabla de datos analógicos cerrada";
Blockly.Msg.SV_data_latchA = "Valor límite";
Blockly.Msg.SV_servo = "Servomotor";
Blockly.Msg.SV_servo_pin = "Para el servomotor en el pin : ";
Blockly.Msg.SV_servo_angle = "fija un ángulo en grados de : ";
Blockly.Msg.SV_servo_set = "Envia la orden";
Blockly.Msg.SV_tone = "Zumbador";
Blockly.Msg.SV_tone_pin = "pin :";
Blockly.Msg.SV_tone_freq = "a la frecuencia (Hz) :";
Blockly.Msg.SV_tone_dur = "con una duración (ms) de :";
Blockly.Msg.SV_tone_play = "Reproduce la nota";
Blockly.Msg.SV_encoder = "Codificador rotatorio";
Blockly.Msg.SV_encoder_pinA = "pin A : ";
Blockly.Msg.SV_encoder_pinB = "pin B : ";
Blockly.Msg.SV_encoder_auto = "Activa la lectura continua";
Blockly.Msg.SV_encoder_manual = "Lee ahora";
Blockly.Msg.SV_sonar = "Telémetro de ultrasonidos";
Blockly.Msg.SV_sonar_trig = "pin 'Trigger' :";
Blockly.Msg.SV_sonar_echo = "pin 'Echo' :";
Blockly.Msg.SV_sonar_auto = "Activa la lectura continua";
Blockly.Msg.SV_sonar_manual = "Lee ahora";
Blockly.Msg.SV_stepper = "Motor paso a paso";
Blockly.Msg.SV_stepper_pin1 = "pin 1 :";
Blockly.Msg.SV_stepper_pin2 = "pin 2 :";
Blockly.Msg.SV_stepper_pin3 = "pin 3 :";
Blockly.Msg.SV_stepper_pin4 = "pin 4 :";
Blockly.Msg.SV_stepper_steps_rev = "Número de pasos por revolución (<= 21 bits)";
Blockly.Msg.SV_stepper_motor = "Velocidad de rotación (<=21 bits)";
Blockly.Msg.SV_stepper_steps = "Número de pasos (<=14 bits)";
Blockly.Msg.SV_stepper_run = "Activa el motor";
Blockly.Msg.SV_HTTP_BT = "Envia (POST) la petición";
Blockly.Msg.SV_i2c_info = "Los valores por defecto son los necesarios para leer la temperatura del sensor ";
Blockly.Msg.SV_i2c_config = "Configuración I2C (hay que hacerlo antes de leer o escribir ! )";
Blockly.Msg.SV_i2c_readButton = "Configura I2C";
Blockly.Msg.SV_i2c_readDelay = "tiempo de retras en la lectura";
Blockly.Msg.SV_i2c_read = "Lectura en el bus I2C";
Blockly.Msg.SV_i2c_read_devAddress = "dirección del periférico";
Blockly.Msg.SV_i2c_read_devRegister =  "registro del periférico";
Blockly.Msg.SV_i2c_read_bytes = "número de bytes a leer";
Blockly.Msg.SV_i2c_read_type = "tipo de lectura";
Blockly.Msg.SV_i2c_readRequest = "Lee I2C";
Blockly.Msg.SV_i2c_retrieveButton = "Busca los últimos valores leídos";
