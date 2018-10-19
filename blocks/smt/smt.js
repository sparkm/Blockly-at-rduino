
'use strict';

goog.provide('Blockly.Blocks.smt');

goog.require('Blockly.Blocks');
goog.require('Blockly.Types');

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
