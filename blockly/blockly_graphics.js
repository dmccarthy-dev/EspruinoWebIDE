/**
 Copyright 2014 Gordon Williams (gw@pur3.co.uk)

 This Source Code is subject to the terms of the Mozilla Public
 License, v2.0. If a copy of the MPL was not distributed with this
 file, You can obtain one at http://mozilla.org/MPL/2.0/.

 ------------------------------------------------------------------
  Blockly blocks for Espruino
 ------------------------------------------------------------------
**/

// // --------------------------------- Blockly init code - see /js/core/editorBlockly.js
// window.onload = function() {
//   var toolbox = document.getElementById('toolbox');
//   // Remove any stuff we don't want from the toolbox...
//   for (var i=0;i<toolbox.children.length;i++) {
//     var enable_if = toolbox.children[i].attributes["enable_if"];
//     if (enable_if) {
//       var keep = false;
//       if (window.location.search && window.location.search.indexOf("%7C"+enable_if.value+"%7C")>=0)
//         keep = true;
//       if (!keep) {
//         toolbox.removeChild(toolbox.children[i]);
//         i--;
//       }
//     }
//   }
//   // Set up blockly from toolbox
//   Blockly.inject(document.body,{path: '', toolbox: toolbox});
//   // Set up initial code
//   Blockly.Xml.domToWorkspace(Blockly.mainWorkspace, document.getElementById('blocklyInitial'));
//   // Notify parent
//   window.parent.blocklyLoaded(Blockly, window); // see core/editorBlockly.js
// };

/* TODO: Looks like we could use Blockly.JavaScript.indentLines(code, Blockly.JavaScript.INDENT)
to properly sort out the padding of all this stuff */

Blockly.Msg.ESPRUINO_GRAPHICS_PRINTTEXT   = 'printText Text';
Blockly.Msg.ESPRUINO_GRAPHICS_CLEARSCREEN = 'clearScreen';

Blockly.Msg.ESPRUINO_GRAPHICS_x = 'x';
Blockly.Msg.ESPRUINO_GRAPHICS_y = 'y';

var GRAPHICS_COL = 130;

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
        this.appendValueInput('x')
            .setCheck(['Number'])
            .appendField(  'move To ' + Blockly.Msg.ESPRUINO_GRAPHICS_x );
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
        this.appendValueInput('x')
            .setCheck(['Number'])
            .appendField( 'line To ' + Blockly.Msg.ESPRUINO_GRAPHICS_x );
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


// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------

Blockly.JavaScript.graphics_clearScreen = function() {
    return "g.clear(); \n"+
        "g.flip();\n"
};


Blockly.JavaScript.graphics_printText = function() {
    var argument0 = Blockly.JavaScript.valueToCode(this, 'TEXT',
        Blockly.JavaScript.ORDER_NONE) || '\'\'';

    return "g.clear(); \n" +
        "g.setFontVector(16); \n" +
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
        Blockly.JavaScript.ORDER_NONE) || 0;
    var y = Blockly.JavaScript.valueToCode(this, 'y',
        Blockly.JavaScript.ORDER_NONE) || 0;

    return "g.lineTo(" + x + ", " + y + "); \n" +
        "g.flip();\n";
};

