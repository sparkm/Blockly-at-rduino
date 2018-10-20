
'use strict';

goog.provide('Blockly.Blocks.smt');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');
goog.require('Blockly.FieldInstance');

Blockly.Blocks['smt_hcsr04'] = {
  init: function() {
    this.setColour(Blockly.Blocks.smt.HUE);
	this.setHelpUrl(Blockly.Msg.SMT_HCSR04_HELPURL);
    this.appendDummyInput()
	    .appendField(Blockly.Msg.SMT_HCSR04_1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/smt/hcsr04.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("TRIGER")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SMT_HCSR04_2);
    this.appendValueInput("DIST")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.SMT_HCSR04_3);
	this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.SMT_HCSR04_TOOLTIP);
  }
};

Blockly.Blocks.smt_servo_attach = {
  init: function() {
    this.setColour(Blockly.Blocks.smt.HUE);
	this.setHelpUrl(Blockly.Msg.SMT_SERVO_MOVE_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.SMT_SERVO_ATTACH1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/smt/servo.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.SMT_SERVO_ATTACH2)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SMT_SERVO_DEFAULT_NAME,
                                      false, false, false),
            'SERVO_NAME');
	this.appendValueInput("PIN")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.SMT_SERVO_MOVE_INPUT2);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SMT_SERVO_MOVE_TOOLTIP);
  }
};

Blockly.Blocks.smt_servo_move = {
  init: function() {
    this.setColour(Blockly.Blocks.smt.HUE);
	this.setHelpUrl(Blockly.Msg.SMT_SERVO_MOVE_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.SMT_SERVO_MOVE_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/smt/servo.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SMT_SERVO_DEFAULT_NAME,
                                      false, false, false),
            'SERVO_NAME');
    this.appendValueInput("DEGREE")
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.SMT_SERVO_MOVE_DEGREE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SMT_SERVO_MOVE_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SERVO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Servo', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SMT_SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks.smt_servo_read_degrees = {
  init: function() {
    this.setColour(Blockly.Blocks.smt.HUE);
	this.setHelpUrl(Blockly.Msg.SMT_SERVO_READ_DEGREES_HELPURL);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.SMT_SERVO_READ_DEGREES_INPUT1)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/smt/servo.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SMT_SERVO_DEFAULT_NAME,
                                      false, false, false),
            'SERVO_NAME');
	this.setOutput(true, 'Number');
    this.setTooltip(Blockly.Msg.SMT_SERVO_READ_DEGREES_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SERVO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Servo', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SMT_SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks.smt_servo_attached = {
  init: function() {
	this.setColour(Blockly.Blocks.smt.HUE);
	this.setHelpUrl('https://www.sparkmythought.com');
    this.appendDummyInput("")
        .appendField(Blockly.Msg.SMT_SERVO_ATTACHED)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/smt/servo.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SMT_SERVO_DEFAULT_NAME,
                                      false, false, false),
            'SERVO_NAME');
    this.setOutput(true, 'Boolean');
    this.setTooltip('true if the servo is attached to pin; false otherwise. ');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SERVO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Servo', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SMT_SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks.smt_servo_detach = {
  init: function() {
    this.setColour(Blockly.Blocks.smt.HUE);
	this.setHelpUrl('https://www.sparkmythought.com');
	this.setInputsInline(false);
    this.appendDummyInput("")
        .appendField(Blockly.Msg.SMT_SERVO_DETACH)
        .appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/smt/servo.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SMT_SERVO_DEFAULT_NAME,
                                      false, false, false),
            'SERVO_NAME');
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip('Release a pin from servo driving.');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SERVO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Servo', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SMT_SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks.smt_servo_rot_continue = {
  init: function() {
    this.setColour(Blockly.Blocks.smt.HUE);
    this.setHelpUrl(Blockly.Msg.SMT_SERVO_ROT_CONTINUE_HELPURL);
	this.appendDummyInput()
		.appendField(Blockly.Msg.SMT_SERVO_ROT_CONTINUE_TEXT)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/smt/servo_cont.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SMT_SERVO_DEFAULT_NAME,
                                      false, false, false),
            'SERVO_NAME');
    this.setInputsInline(true);
	this.appendValueInput("SPEED")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.SMT_SERVO_ROT_CONTINUE_INPUT2);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SMT_SERVO_ROT_CONTINUE_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SERVO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Servo', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SMT_SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks.smt_servo_rot_continue_param = {
  init: function() {
    this.setColour(Blockly.Blocks.smt.HUE);
    this.setHelpUrl(Blockly.Msg.SMT_SERVO_ROT_CONTINUE_HELPURL);
	this.appendDummyInput()
		.appendField(Blockly.Msg.SMT_SERVO_ROT_CONTINUE_TEXT)
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/smt/servo_cont.jpg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(
            new Blockly.FieldInstance('Servo',
                                      Blockly.Msg.SMT_SERVO_DEFAULT_NAME,
                                      false, false, false),
            'SERVO_NAME');
    this.setInputsInline(true);
	this.appendValueInput("SPEED")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
      	.appendField(Blockly.Msg.SMT_SERVO_ROT_CONTINUE_INPUT3);
	this.appendDummyInput()
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.SMT_SERVO_ROT_CONTINUE_INPUT4)
        .appendField(new Blockly.FieldDropdown([[Blockly.Msg.ADAFRUIT_MOTORSHIELD_AVANT, "FORWARD"], [Blockly.Msg.ADAFRUIT_MOTORSHIELD_ARRIERE, "BACKWARD"]]), 'ETAT');    
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setTooltip(Blockly.Msg.SMT_SERVO_ROT_CONTINUE_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('SERVO_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'Servo', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SMT_SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};


Blockly.Blocks['smt_l298n_motor_init'] = {
  init: function() {
    this.setColour(Blockly.Blocks.smt.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.SMT_L298N_MOTOR_INIT_TITLE)
		.appendField(new Blockly.FieldImage("blocks/smt/l298n.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.SMT_L298N_ID)
        .appendField(new Blockly.FieldInstance('L298_ID', 'L298_ID', false, false, false), 'L298_NAME');
	this.appendDummyInput()
		.appendField(Blockly.Msg.SMT_L298N_MOTOR_PIN_EN)
        .appendField(new Blockly.FieldTextInput('0',  Blockly.Arduino.pinPWMValidator), 'PIN-EN')
	    .setAlign(Blockly.ALIGN_RIGHT);
	this.appendDummyInput()
		.appendField(Blockly.Msg.SMT_L298N_MOTOR_PIN_IN1)
        .appendField(new Blockly.FieldTextInput('0',  Blockly.Arduino.pinDualValidator), 'PIN-IN1')
		.appendField(Blockly.Msg.SMT_L298N_MOTOR_PIN_IN2)
        .appendField(new Blockly.FieldTextInput('0',  Blockly.Arduino.pinDualValidator), 'PIN-IN2')
	    .setAlign(Blockly.ALIGN_RIGHT);
	this.setInputsInline(false);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.SMT_L298N_INIT_TOOLTIP);
  }
};

Blockly.Blocks['smt_l298n_motor'] = {
  init: function() {
    this.setColour(Blockly.Blocks.smt.HUE);
	this.appendDummyInput()
		.appendField(Blockly.Msg.SMT_L298N_MOTOR_TITLE)
		.appendField(new Blockly.FieldImage("blocks/smt/l298n.jpg", Blockly.Arduino.imageSize, Blockly.Arduino.imageSize))
		.appendField(
				new Blockly.FieldDropdown([
						[ Blockly.Msg.SMT_L298N_STOP, "stop" ],
						[ Blockly.Msg.SMT_L298N_FORWARD, "forward" ],
						[ Blockly.Msg.SMT_L298N_BACKWARD, "backward" ],
						[ Blockly.Msg.SMT_L298N_BRAKE, "brake" ] ]),
				"DIRECTION");
    this.appendDummyInput("")
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.SMT_L298N_ID)
        .appendField(new Blockly.FieldInstance('L298_ID', 'L298_ID', false, false, false), 'L298_NAME');
    this.appendValueInput("SPEED", 'Number')
        .setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
        .appendField(Blockly.Msg.SMT_L298N_MOTOR_SPEED);
	this.setInputsInline(false);
	this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
	this.setTooltip(Blockly.Msg.SMT_L298N_TOOLTIP);
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.
    var instanceName = this.getFieldValue('L298_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'L298_ID', this)) {
      this.setWarningText(null);
    } else {
      // Set a warning to select a valid config block
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            //'%1', Blockly.Msg.SERVO_COMPONENT).replace(
            '%1', '').replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['smt_ledRGB_WS2812B_init'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.smt_ledRGB_WS2812B_init)
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(
				new Blockly.FieldInstance('WS2812_fieldInstance',
										  Blockly.Msg.smt_ledRGB_WS2812B_DEFAULT_NAME,
										  false, false, false),
				'NEOPIXEL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/smt/led-rgb-ws2812b.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("Pin_LedRGB_init")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.smt_ledRGB_WS2812B_init_Pin);
    this.appendValueInput("Number_of_Pixels")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.smt_ledRGB_WS2812B_init_Number_of_Pixels);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.smt.HUE);
    this.setTooltip('');
    this.setHelpUrl('https://www.sparkmythought.com');
  }
};

Blockly.Blocks['smt_ledRGB_WS2812B_setPixelColor'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.smt_ledRGB_WS2812B_setPixelColor)
		.appendField(
				new Blockly.FieldInstance('WS2812_fieldInstance',
										  Blockly.Msg.smt_ledRGB_WS2812B_DEFAULT_NAME,
										  false, false, false),
				'NEOPIXEL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/smt/led-rgb-ws2812b.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("Red")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.smt_ledRGB_WS2812B_setPixelColor_Red);
    this.appendValueInput("Green")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.smt_ledRGB_WS2812B_setPixelColor_Green);
    this.appendValueInput("Blue")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.smt_ledRGB_WS2812B_setPixelColor_Blue);
    this.appendValueInput("Pixel_number")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.smt_ledRGB_WS2812B_setPixelColor_Pixel_Number);
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.smt.HUE);
    this.setTooltip('');
    this.setHelpUrl('https://www.sparkmythought.com');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('NEOPIXEL_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'WS2812_fieldInstance', this)) {
      this.setWarningText(null);
    } else {
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.NEOPIXEL_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};

Blockly.Blocks['smt_ledRGB_WS2812B_setBrightness'] = {
  init: function() {
    this.appendDummyInput()
        .appendField(Blockly.Msg.smt_ledRGB_WS2812B_setPixelColor)
		.appendField(
				new Blockly.FieldInstance('WS2812_fieldInstance',
										  Blockly.Msg.smt_ledRGB_WS2812B_DEFAULT_NAME,
										  false, false, false),
				'NEOPIXEL_NAME')
		.appendField(new Blockly.FieldImage(Blockly.pathToBlockly + 'blocks/smt/led-rgb-ws2812b.svg', Blockly.Arduino.imageSize, Blockly.Arduino.imageSize));
    this.appendValueInput("Brightness")
		.setCheck('Number')
        .setAlign(Blockly.ALIGN_RIGHT)
		.appendField(Blockly.Msg.smt_ledRGB_WS2812B_Brightness);		
    this.setInputsInline(false);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setColour(Blockly.Blocks.smt.HUE);
    this.setTooltip('');
    this.setHelpUrl('https://www.sparkmythought.com');
  },
  /**
   * Called whenever anything on the workspace changes.
   * It checks/warns if the selected stepper instance has a config block.
   * @this Blockly.Block
   */
  onchange: function() {
    if (!this.workspace) return;  // Block has been deleted.

    var instanceName = this.getFieldValue('NEOPIXEL_NAME')
    if (Blockly.Instances.isInstancePresent(instanceName, 'WS2812_fieldInstance', this)) {
      this.setWarningText(null);
    } else {
      this.setWarningText(
        Blockly.Msg.COMPONENT_WARN.replace(
            '%1', Blockly.Msg.NEOPIXEL_COMPONENT).replace(
                '%2', instanceName));
    }
  }
};
