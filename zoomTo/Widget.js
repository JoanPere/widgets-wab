define(['dojo/_base/declare', 
  'jimu/BaseWidget',
  'esri/geometry/Point',
  "dojo/dom",
  'dojo/on'],
  function(declare, 
    BaseWidget, 
    Point,
    dom,
    on) {
    //To create a widget, you need to derive from BaseWidget.
    return declare([BaseWidget], {

      //--------------propiedades del widget

      baseClass: 'jimu-widget-customWidget',
      _pnt: new Point(-3.7, 40.41),

      //------------------------------------



      //---------------métodos del widget------------------:
       postCreate: function() {
         this.inherited(arguments);         
       },


       startup: function() {
          this.inherited(arguments);
       },
       //método que será llamado en el evento click del botón
        _onZoomClick: function(){
          //obtenemos el elemento html input de la latitud
          var lat = dom.byId("latitud");
          //obtenemos el elemento html input de la longitud
          var lon = dom.byId("longitud");
          //obtenemos el nivel de zoom del input del html
          var level = dom.byId("levelZoom");
          //creamos el punto a partir de estos valores
          var punto = new Point(lon.value, lat.value);
          //en este método del mapa, centramos el mapa y ponemos al nivel de zoom
          this.map.centerAndZoom(punto, level.value);
       },


      //onOpen: function(){
        //alert('onOpen');
      //}
      // onClose: function(){
      //   console.log('onClose');
      // },

      // onMinimize: function(){
      //   console.log('onMinimize');
      // },

      // onMaximize: function(){
      //   console.log('onMaximize');
      // },

      // onSignIn: function(credential){
      //   /* jshint unused:false*/
      //   console.log('onSignIn');
      // },

      // onSignOut: function(){
      //   console.log('onSignOut');
      // }

      // onPositionChange: function(){
      //   console.log('onPositionChange');
      // },

      // resize: function(){
      //   console.log('resize');
      // }

    });
  });