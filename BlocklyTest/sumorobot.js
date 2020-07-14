Blockly.Blocks['sumorobot_sleep'] = {
    init: function() {
        this.setColour("#E64C00");
        this.appendDummyInput()
          .appendField("")
            .appendField(new Blockly.FieldTextInput('1000',
              Blockly.FieldNumber.numberValidator), 'SLEEP');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks['sumorobot_move'] = {
    init: function() {
        var OPERATORS = [
            ['move stop', 'STOP'],
            ['move left', 'LEFT'],
            ['move right', 'RIGHT'],
            ['move forward', 'FORWARD'],
            ['move backward', 'BACKWARD']
        ];
        this.setColour("#E60000");
        var dropdown = new Blockly.FieldDropdown(OPERATORS);
        this.appendDummyInput().appendField(dropdown, 'MOVE');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks['sumorobot_opponent'] = {
    init: function() {
        this.setColour("#0099E6");
        this.appendDummyInput().appendField('opponent');
        this.setOutput(true, 'Boolean');
    }
};

Blockly.Blocks['sumorobot_line'] = {
    init: function() {
        var OPERATORS = [
            ['line left', 'LEFT'],
            ['line right', 'RIGHT']
        ];
        this.setColour("#E6BF00");
        var dropdown = new Blockly.FieldDropdown(OPERATORS);
        this.appendDummyInput().appendField(dropdown, 'LINE');
        this.setOutput(true, 'Boolean');
    }
};

Blockly.Python['sumorobot_sleep'] = function(block) {
    var code = 'sumorobot.sleep(' + parseFloat(block.getFieldValue('SLEEP')) + ', "' + block.id + '")\n';
    return code;
};

Blockly.Python['sumorobot_move'] = function(block) {
    var code = 'sumorobot.move(' + block.getFieldValue('MOVE') + ', "' + block.id + '")\n';
    return code;
};

Blockly.Python['sumorobot_opponent'] = function(block) {
    var code = 'sumorobot.is_opponent("' + block.id + '")';
    return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Python['sumorobot_line'] = function(block) {
    var code = 'sumorobot.is_line(' + block.getFieldValue('LINE') + ', "' + block.id + '")';
    return [code, Blockly.Python.ORDER_ATOMIC];
};