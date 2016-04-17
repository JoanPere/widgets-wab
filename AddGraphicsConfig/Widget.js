define([
  'dojo/_base/declare',
  'jimu/BaseWidget',
  "dojo/dom-style",
  "dojo/dom",
  "esri/map",
  "esri/geometry/Point",
  "esri/graphic",
  "esri/symbols/SimpleMarkerSymbol",
  "esri/Color",
  'dojo/_base/lang'
], function(
  declare,
  BaseWidget,
  domStyle,
  dom,
  Map,
  Point,
  Graphic,
  SimpleMarkerSymbol,
  Color,
  lang
) {

  var clazz = declare([BaseWidget], {
    //these two properties are defined in the BaseWiget
    baseClass: 'my-widget',
    name: 'AddGraphics',
    symbol: null,
    isDraw: false,
    graphic: null,



    postCreate: function() {
      this.inherited(arguments);
      //ejecutamos el método que crea la simbología
      this.createSymbol();
    },


    // start up child widgets
    startup: function() {
      this.inherited(arguments);
    },

    //función que dibuja el punto en el mapa
    drawPoint: function(evt){
      if(dom.byId("activado").checked){
        var point = evt.mapPoint;
        this.graphic = new Graphic(point, this.symbol);
        this.map.graphics.clear();
        this.map.graphics.add(this.graphic);
      }
    },

    createSymbol: function(){
      var style = this.config.symbol.params.style;

      var intStyle = null;

      switch (style){
        case "STYLE_CIRCLE":
          intStyle = SimpleMarkerSymbol.STYLE_CIRCLE;
        break;
        case "STYLE_CROSS":
          intStyle = SimpleMarkerSymbol.STYLE_CROSS;
        break;
        case "STYLE_DIAMOND":
          intStyle = SimpleMarkerSymbol.STYLE_DIAMOND;
        break;
        case "STYLE_PATH":
          intStyle = SimpleMarkerSymbol.STYLE_PATH;
        break;
        case "STYLE_SQUARE":
          intStyle = SimpleMarkerSymbol.STYLE_SQUARE;
        break;
        case "STYLE_X":
          intStyle = SimpleMarkerSymbol.STYLE_X;
        break;
      }
      var size = this.config.symbol.params.size;
      var color = this.config.symbol.params.color;

      this.symbol = new SimpleMarkerSymbol(intStyle, size, null, new Color(color));
    },

    onOpen: function() {
      this.map.on("click", lang.hitch(this,this.drawPoint));
      this.map.graphics.show();
        
    },

    onClose: function() {
      this.map.on("click", function(){});
      this.map.graphics.hide();
    }
  });

  return clazz;
});