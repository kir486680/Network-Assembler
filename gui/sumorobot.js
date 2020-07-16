Blockly.Blocks['sumorobot_sleep'] = {
    init: function() {
        this.setColour("#E64C00");
        this.appendDummyInput()
          .appendField("sleep")
            .appendField(new Blockly.FieldTextInput('1000',
              Blockly.FieldNumber.numberValidator), 'SLEEP');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks['max_pool'] = {
    init: function() {
        this.setColour("#E64C00");
        this.appendDummyInput()
          .appendField("Max Pool")
            .appendField(new Blockly.FieldTextInput('2',
              Blockly.FieldNumber.numberValidator), 'POOL');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks['Dense'] = {
    init: function() {
        this.setColour("#E64C00");
        this.appendDummyInput()
        .appendField("Dense")
        this.appendDummyInput()
          .appendField("Nodes")
            .appendField(new Blockly.FieldTextInput('8',
              Blockly.FieldNumber.numberValidator), 'nodes')
              .appendField("Activation")
              .appendField(new Blockly.FieldTextInput('"relu"',
                Blockly.FieldNumber.numberValidator), 'activation');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks['DenseInit'] = {
    init: function() {
        this.setColour("#E64C00");
        this.appendDummyInput()
        .appendField("Dense Input")
        this.appendDummyInput()
        .appendField("Input Shape")
        .appendField(new Blockly.FieldTextInput('64,64,3',
        Blockly.FieldNumber.numberValidator), 'InputShape')
          .appendField("Nodes")
            .appendField(new Blockly.FieldTextInput('8',
              Blockly.FieldNumber.numberValidator), 'nodes')
              .appendField("Activation")
              .appendField(new Blockly.FieldTextInput('"relu"',
                Blockly.FieldNumber.numberValidator), 'activation');
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks['Input'] = {
    init: function() {
        this.setColour("#E64C00");
        this.appendDummyInput()
        .appendField("Input")
        this.appendDummyInput()
        .appendField("Input Shape")
        .appendField(new Blockly.FieldTextInput('"16,"',
        Blockly.FieldNumber.numberValidator), 'InputShape')

        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks['Dropout'] = {
    init: function() {
        this.setColour("#E64C00");
        this.appendDummyInput()
        .appendField("Dropout")
        .appendField(new Blockly.FieldTextInput('0.25',
        Blockly.FieldNumber.numberValidator), 'Dropout')

        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
};

Blockly.Blocks['flatten'] = {
    init: function() {
        this.setColour("#E64C00");
        this.appendDummyInput()
        .appendField("Flatten")
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
}

Blockly.Blocks['Conv2DInit'] = {
    init: function() {
        this.setColour("#E64C00");
        this.appendDummyInput()
        .appendField("Conv2D Input")
        this.appendDummyInput()
        .appendField("Input Shape")
        .appendField(new Blockly.FieldTextInput('64,64,3',
        Blockly.FieldNumber.numberValidator), 'InputShape')
        .appendField("Filters")
        .appendField(new Blockly.FieldTextInput('3',
        Blockly.FieldNumber.numberValidator), 'Filters')
        .appendField("KernelSize")
        this.appendDummyInput()
        .appendField(new Blockly.FieldTextInput('3',
        Blockly.FieldNumber.numberValidator), 'KernelSize')
        .appendField("Padding")
        .appendField(new Blockly.FieldTextInput('3',
        Blockly.FieldNumber.numberValidator), 'Padding')
        .appendField("Activation")
        .appendField(new Blockly.FieldTextInput('relu',
        Blockly.FieldNumber.numberValidator), 'Activation')
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
}
Blockly.Blocks['Conv2D'] = {
    init: function() {
        this.setColour("#E64C00");
        this.appendDummyInput()
        .appendField("Conv2D")
        this.appendDummyInput()
        .appendField("Filters")
        .appendField(new Blockly.FieldTextInput('3',
        Blockly.FieldNumber.numberValidator), 'Filters')
        .appendField("KernelSize")
        .appendField(new Blockly.FieldTextInput('3',
        Blockly.FieldNumber.numberValidator), 'KernelSize')
        this.appendDummyInput()
        .appendField("Padding")
        .appendField(new Blockly.FieldTextInput('1',
        Blockly.FieldNumber.numberValidator), 'Padding')
        .appendField("Activation")
        .appendField(new Blockly.FieldTextInput('relu',
        Blockly.FieldNumber.numberValidator), 'Activation')
        this.setPreviousStatement(true);
        this.setNextStatement(true);
    }
}

Blockly.Python['flatten'] = function(block) {
    var code = 'layers.Flatten(),'
    return code;
};

Blockly.Python['Conv2D'] = function(block) {
    var code = 'layers.Conv2D(filters='+block.getFieldValue('Filters') +',kernel_size='+block.getFieldValue('KernelSize')+',padding='+block.getFieldValue('Padding')+', activation=' +block.getFieldValue('Activation')+')),'
    return code;
};

Blockly.Python['max_pool'] = function(block) {
    var code = 'layers.MaxPooling2D(pool_size=(' + block.getFieldValue('POOL')+',' + block.getFieldValue('POOL')+'))),'
    return code;
};
Blockly.Python['Dense'] = function(block) {
    var code = 'layers.Dense(' + block.getFieldValue('nodes')+', activation=' + block.getFieldValue('activation')+')),'
    return code;
};

Blockly.Python['Input'] = function(block) {
    var code = 'keras.Input(shape=(' + block.getFieldValue('InputShape') + '))),'
    return code;
};
Blockly.Python['Dropout'] = function(block) {
    var code = 'layers.Dropout(' + block.getFieldValue('Dropout') + '),'
    return code;
};