Blockly.Blocks.espruino_watch_buttons = {
    category: 'Input',
    init: function() {
        this.appendDummyInput()
            .appendField('watch button');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(this.BUTTONS), 'BUTTON');
        this.appendDummyInput()
            .appendField('on');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(this.EDGES), 'EDGE').appendField('edge');
        this.appendStatementInput('DO')
            .appendField(Blockly.Msg.CONTROLS_REPEAT_INPUT_DO);

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(ESPRUINO_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_WATCH_TOOLTIP);
    },
    BUTTONS: [
        ["A",     'BTN1'],
        ["B",     'BTN2'],
        ["UP",    'BTN3'],
        ["DOWN",  'BTN4'],
        ["LEFT",  'BTN5'],
        ["RIGHT", 'BTN6']
    ],
    EDGES: [
        ["rising", 'rising'],
        ["falling", 'falling'],
        ["both", 'both']
    ]
};


Blockly.Blocks.espruino_touch_amount = {
    category: 'Input',
    init: function() {

        this.appendDummyInput()
            .appendField('detect touch amount on ');
        this.appendDummyInput()
            .appendField(new Blockly.FieldDropdown(this.CORNERS), 'CORNER');

        this.setOutput(true, 'Number');
        this.setColour(ESPRUINO_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_WATCH_TOOLTIP);
    },
    CORNERS: [
        ["Corner 1", "1"],
        ["Corner 2", "2"],
        ["Corner 3", "3"],
        ["Corner 4", "4"],
        ["Corner 5", "5"],
        ["Corner 6", "6"]
    ]
};


Blockly.JavaScript.espruino_watch_buttons = function() {

    var button = this.getTitleValue('BUTTON');
    var edge   = this.getTitleValue('EDGE');
    var branch = Blockly.JavaScript.statementToCode(this, 'DO');
    var json   = { repeat : true, edge : edge, debounce : 10 };

    return "setWatch(function() {\n"+branch+" }, " + button + ", "+JSON.stringify(json)+");\n";
};


Blockly.JavaScript.espruino_touch_amount = function() {

    var corner = this.getTitleValue('CORNER');

    return ["Badge.capSense(" + corner  +") \n", Blockly.JavaScript.ORDER_ATOMIC];
};