/**
 Copyright 2014 Gordon Williams (gw@pur3.co.uk)

 This Source Code is subject to the terms of the Mozilla Public
 License, v2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.

 ------------------------------------------------------------------
  Blockly blocks for Espruino
 ------------------------------------------------------------------
**/


Blockly.Msg.ESPRUINO_GRAPHICS_PRINTTEXT   = 'printText';
Blockly.Msg.ESPRUINO_GRAPHICS_CLEARSCREEN = 'clearScreen';
Blockly.Msg.ESPRUINO_GRAPHICS_GET_HEIGHT  = 'getScreenHeight';
Blockly.Msg.ESPRUINO_GRAPHICS_GET_WIDTH   = 'getScreenWidth';

Blockly.Msg.ESPRUINO_GRAPHICS_x = 'x';
Blockly.Msg.ESPRUINO_GRAPHICS_y = 'y';
Blockly.Msg.ESPRUINO_GRAPHICS_RADIUS = 'radius';

var GRAPHICS_COL = 130;

Blockly.Blocks.graphics_coord = {
    category: 'Graphics',
    init: function() {

        this.appendDummyInput()
            .appendField( 'coordinate' );
        this.appendValueInput('x')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_x );
        this.appendValueInput('y')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_y );

        this.setOutput(true, 'Number');
        this.setColour(GRAPHICS_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_VALUE);
    }
};

Blockly.Blocks.graphics_fillPoly = {
    category: 'Graphics',
    init: function() {

        this.appendDummyInput()
            .appendField( 'fillShape' );
        this.appendValueInput('coordlist')
            .appendField( 'list of coordinates' );

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(GRAPHICS_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_VALUE);
    }
};


Blockly.Blocks.graphics_getHeight = {
    category: 'Graphics',
    init: function() {

        this.appendDummyInput()
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_GET_HEIGHT );

        this.setOutput(true, 'Number');
        this.setColour(GRAPHICS_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_VALUE);
    }
};


Blockly.Blocks.graphics_getWidth = {
    category: 'Graphics',
    init: function() {

        this.appendDummyInput()
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_GET_WIDTH );

        this.setOutput(true, 'Number');
        this.setColour(GRAPHICS_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_VALUE);
    }
};


Blockly.Blocks.graphics_clearScreen = {
    category: 'Graphics',
    init: function() {
        this.appendDummyInput()
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_CLEARSCREEN );

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(GRAPHICS_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_VALUE);
    }
};


Blockly.Blocks.graphics_printText = {
  category: 'Graphics',
  init: function() {
      this.appendValueInput('TEXT')
          .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_PRINTTEXT );

    this.setPreviousStatement(true);
    this.setNextStatement(true);
    this.setColour(GRAPHICS_COL);
    this.setInputsInline(true);
    this.setTooltip(Blockly.Msg.ESPRUINO_VALUE);
  }
};



Blockly.Blocks.graphics_moveTo = {
    category: 'Graphics',
    init: function() {
        this.appendDummyInput()
            .appendField('moveTo');
        this.appendValueInput('x')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_x );
        this.appendValueInput('y')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_y );

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(GRAPHICS_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_VALUE);
    }
};


Blockly.Blocks.graphics_lineTo = {
    category: 'Graphics',
    init: function() {
        this.appendDummyInput()
            .appendField('lineTo');
        this.appendValueInput('x')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_x );
        this.appendValueInput('y')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_y );

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(GRAPHICS_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_VALUE);
    }
};


Blockly.Blocks.graphics_drawCircle = {
    category: 'Graphics',
    init: function() {
        this.appendDummyInput()
            .appendField('drawCircle');
        this.appendValueInput('x')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_x );
        this.appendValueInput('y')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_y );
        this.appendValueInput('radius')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_RADIUS );

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(GRAPHICS_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_VALUE);
    }
};


Blockly.Blocks.graphics_fillCircle = {
    category: 'Graphics',
    init: function() {

        this.appendDummyInput()
            .appendField('fillCircle');
        this.appendValueInput('x')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_x );
        this.appendValueInput('y')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_y );
        this.appendValueInput('radius')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_RADIUS );

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(GRAPHICS_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_VALUE);
    }
};


Blockly.Blocks.graphics_drawRect = {
    category: 'Graphics',
    init: function() {

        this.appendDummyInput()
            .appendField('drawRect');
        this.appendValueInput('x')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_x );
        this.appendValueInput('y')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_y );
        this.appendValueInput('width')
            .setCheck(['Number'])
            .appendField( 'width' );
        this.appendValueInput('height')
            .setCheck(['Number'])
            .appendField( 'height' );

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(GRAPHICS_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_VALUE);
    }
};

Blockly.Blocks.graphics_fillRect = {
    category: 'Graphics',
    init: function() {

        this.appendDummyInput()
            .appendField('fillRect');
        this.appendValueInput('x')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_x );
        this.appendValueInput('y')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_y );
        this.appendValueInput('width')
            .setCheck(['Number'])
            .appendField( 'width' );
        this.appendValueInput('height')
            .setCheck(['Number'])
            .appendField( 'height' );

        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(GRAPHICS_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_VALUE);
    }
};

Blockly.Blocks.graphics_drawString = {
    category: 'Graphics',
    init: function() {

        this.appendDummyInput()
            .appendField('drawString');
        this.appendValueInput('text')
            .appendField( 'text' );
        this.appendValueInput('x')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_x );
        this.appendValueInput('y')
            .setCheck(['Number'])
            .appendField( Blockly.Msg.ESPRUINO_GRAPHICS_y );
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(GRAPHICS_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_VALUE);
    }
};


Blockly.Blocks.graphics_getStringWidth = {
    category: 'Graphics',
    init: function() {

        this.appendDummyInput()
            .appendField( 'getStringWidth' );
        this.appendValueInput('text')
            .appendField( 'text' );

        this.setOutput(true, 'Number');
        this.setColour(GRAPHICS_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_VALUE);
    }
};


Blockly.Blocks.graphics_setFontSize = {
    category: 'Graphics',
    init: function() {

        this.appendDummyInput()
            .appendField('setFontSize');
        this.appendValueInput('size')
            .setCheck(['Number'])
            .appendField( 'size' );
        this.setPreviousStatement(true);
        this.setNextStatement(true);
        this.setColour(GRAPHICS_COL);
        this.setInputsInline(true);
        this.setTooltip(Blockly.Msg.ESPRUINO_VALUE);
    }
};

// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
Blockly.JavaScript.graphics_coord = function() {
    var x = Blockly.JavaScript.valueToCode(this, 'x',
        Blockly.JavaScript.ORDER_NONE) || 0;
    var y = Blockly.JavaScript.valueToCode(this, 'y',
        Blockly.JavaScript.ORDER_NONE) || 0;

    return ["["+x+","+y+"]\n", Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.graphics_fillPoly = function() {

    var coordlist = Blockly.JavaScript.valueToCode(this, 'coordlist',
        Blockly.JavaScript.ORDER_NONE) || [];

    coordlist = JSON.parse( coordlist );

    var newArr = [];

    for(var i = 0; i < coordlist.length; i++){
        if ( null !== coordlist[i] ){
            newArr.push(coordlist[i][0]);
            newArr.push(coordlist[i][1]);
        }
    }

    return "g.fillPoly(" + JSON.stringify( newArr ) + ") \n"+
        "g.flip();\n";
};


Blockly.JavaScript.graphics_getHeight = function() {
    return ["g.getHeight() \n", Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.graphics_getWidth = function() {
    return ["g.getWidth() \n", Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript.graphics_clearScreen = function() {
    return "g.clear(); \n"+
        "g.flip();\n"
};


Blockly.JavaScript.graphics_printText = function() {
    var argument0 = Blockly.JavaScript.valueToCode(this, 'TEXT',
        Blockly.JavaScript.ORDER_NONE) || '\'\'';

    return "g.clear(); \n" +
        "x = g.getWidth()/2; \n" +
        "y = 16; \n" +
        "g.drawString(" + argument0 + ", x-g.stringWidth(" + argument0 + ")/2, y); \n" +
        "g.flip();\n"
};


Blockly.JavaScript.graphics_moveTo = function() {

    var x = Blockly.JavaScript.valueToCode(this, 'x',
        Blockly.JavaScript.ORDER_NONE) || 0;
    var y = Blockly.JavaScript.valueToCode(this, 'y',
        Blockly.JavaScript.ORDER_NONE) || 0;

    return "g.moveTo(" + x + ", " + y + "); \n";
};


Blockly.JavaScript.graphics_lineTo = function() {

    var x = Blockly.JavaScript.valueToCode(this, 'x',
        Blockly.JavaScript.ORDER_NONE) || 100;
    var y = Blockly.JavaScript.valueToCode(this, 'y',
        Blockly.JavaScript.ORDER_NONE) || 50;
    var radius = Blockly.JavaScript.valueToCode(this, 'radius',
        Blockly.JavaScript.ORDER_NONE) || 20;

    return "g.lineTo(" + x + ", " + y + "); \n" +
        "g.flip();\n";
};


Blockly.JavaScript.graphics_drawCircle = function() {

    var x = Blockly.JavaScript.valueToCode(this, 'x',
        Blockly.JavaScript.ORDER_NONE) || 100;
    var y = Blockly.JavaScript.valueToCode(this, 'y',
        Blockly.JavaScript.ORDER_NONE) || 50;
    var radius = Blockly.JavaScript.valueToCode(this, 'radius',
        Blockly.JavaScript.ORDER_NONE) || 20;

    return "g.drawCircle(" + x + ", " + y + ", " + radius + "); \n" +
        "g.flip();\n";
};


Blockly.JavaScript.graphics_fillCircle = function() {

    var x = Blockly.JavaScript.valueToCode(this, 'x',
        Blockly.JavaScript.ORDER_NONE) || 0;
    var y = Blockly.JavaScript.valueToCode(this, 'y',
        Blockly.JavaScript.ORDER_NONE) || 0;
    var radius = Blockly.JavaScript.valueToCode(this, 'radius',
        Blockly.JavaScript.ORDER_NONE) || 20;

    return "g.fillCircle(" + x + ", " + y + ", " + radius + "); \n" +
        "g.flip();\n";
};



Blockly.JavaScript.graphics_drawRect = function() {

    var x = Blockly.JavaScript.valueToCode(this, 'x',
        Blockly.JavaScript.ORDER_NONE) || 0;
    var y = Blockly.JavaScript.valueToCode(this, 'y',
        Blockly.JavaScript.ORDER_NONE) || 0;
    var width = Blockly.JavaScript.valueToCode(this, 'width',
        Blockly.JavaScript.ORDER_NONE) || 30;
    var height = Blockly.JavaScript.valueToCode(this, 'height',
        Blockly.JavaScript.ORDER_NONE) || 30;

    var x2 = parseInt(x) + parseInt( width );
    var y2 = parseInt(y) + parseInt( height );

    return "g.drawRect(" + x + ", " + y + ", " + x2 + ", " + y2 + "); \n" +
        "g.flip();\n";
};


Blockly.JavaScript.graphics_fillRect = function() {

    var x = Blockly.JavaScript.valueToCode(this, 'x',
        Blockly.JavaScript.ORDER_NONE) || 0;
    var y = Blockly.JavaScript.valueToCode(this, 'y',
        Blockly.JavaScript.ORDER_NONE) || 0;
    var width = Blockly.JavaScript.valueToCode(this, 'width',
        Blockly.JavaScript.ORDER_NONE) || 30;
    var height = Blockly.JavaScript.valueToCode(this, 'height',
        Blockly.JavaScript.ORDER_NONE) || 30;

    var x2 = parseInt(x) + parseInt( width );
    var y2 = parseInt(y) + parseInt( height );

    return "g.fillRect(" + x + ", " + y + ", " + x2 + ", " + y2 + "); \n" +
        "g.flip();\n";
};


Blockly.JavaScript.graphics_drawString = function() {

    var text = Blockly.JavaScript.valueToCode(this, 'text',
        Blockly.JavaScript.ORDER_NONE) || '"Hello Espruino"';
    var x = Blockly.JavaScript.valueToCode(this, 'x',
        Blockly.JavaScript.ORDER_NONE) || 0;
    var y = Blockly.JavaScript.valueToCode(this, 'y',
        Blockly.JavaScript.ORDER_NONE) || 0;

    return "g.drawString(" + text + "," + x + ", " + y + "); \n" +
        "g.flip();\n";
};



Blockly.JavaScript.graphics_getStringWidth = function() {

    var text = Blockly.JavaScript.valueToCode(this, 'text',
        Blockly.JavaScript.ORDER_NONE) || '""';

    return ["g.stringWidth(" + text + ") \n", Blockly.JavaScript.ORDER_ATOMIC];
};



Blockly.JavaScript.graphics_setFontSize = function() {

    var size = Blockly.JavaScript.valueToCode(this, 'size',
        Blockly.JavaScript.ORDER_NONE) || 10;

    return "g.setFontVector(" + size + "); \n";
};

