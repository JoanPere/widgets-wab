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
    //propiedad para almacenar el símbolo
    symbol: null,
    graphic: null,

    //método del postcreate, dónde creamos el símbolo
    postCreate: function() {
      this.inherited(arguments);      
      this.symbol = new SimpleMarkerSymbol(SimpleMarkerSymbol.STYLE_CIRCLE, 10, null, new Color("blue"));
    },


    // start up child widgets
    startup: function() {
      this.inherited(arguments);
      
    },

    drawPoint: function(evt){
      //se comprueba que 
      if(dom.byId("activado").checked){
        console.log("click");
        var point = evt.mapPoint;
        this.graphic = new Graphic(point, this.symbol);
        this.map.graphics.clear();
        this.map.graphics.add(this.graphic);
      }
    },
    //en la función onOpen, añadimos la función que dibuja el punto al evento click del mapa
    onOpen: function() {
      this.map.on("click", lang.hitch(this,this.drawPoint));
      //hace visible la capa de gráficos
      this.map.graphics.show();
    },

    //en la función onClose, añadimos una función vacia al evento click del mapa, para que no pinte nada, 
    onClose: function() {
      this.map.on("click", function(){
        console.log("click_close");
      });
      this.map.graphics.hide();
    }
  });

  return clazz;
});
