Blockly.Blocks.espruino_leds = {
    category: 'Input',
    init: function() {
        this.appendDummyInput()
            .appendField('switch led');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(this.LEDS), 'LED');
        this.appendDummyInput()
            .appendField('');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(this.VALUE), 'VALUE');

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(ESPRUINO_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_WATCH_TOOLTIP);
    },
    LEDS: [
        ["1", 'LED1'],
        ["2", 'LED2'],
        ["3", 'LED3'],
        ["4", 'LED4'],
        ["5", 'LED5'],
        ["6", 'LED6']
    ],
    VALUE: [
        ["on",  '1'],
        ["off", '0']
    ]
};

Blockly.Blocks.espruino_nfc_url = {
    category: 'Output',
    init: function() {
        this.appendDummyInput()
            .appendField('broadcast NFC ');

        this.appendValueInput('url')
            .setCheck(['Text'])
            .appendField( 'URL' );

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(ESPRUINO_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_WATCH_TOOLTIP);
    }
};

Blockly.JavaScript.espruino_leds = function() {

    var led    = this.getTitleValue('LED');
    var value  = this.getTitleValue('VALUE');

    return led + ".write(" + value + ") \n";
};


Blockly.JavaScript.espruino_nfc_url = function() {

    var url = Blockly.JavaScript.valueToCode(this, 'url',
        Blockly.JavaScript.ORDER_NONE) || '"https://dmccarthy-dev.github.io/EspruinoWebIDE/"';

    return "NRF.nfcURL(" + url + "); \n";
};