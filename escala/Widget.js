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
      // Custom widget code goes here


      //methods to communication with app container:

       postCreate: function() {
         this.inherited(arguments);
       },

       //función de startup
       startup: function() {
          this.inherited(arguments);
          //almacenamos el mapa
          var mapa = this.map;
          //añadimos en el elemento del htm la escala actual. Con Math.round redondeamos los decimales
          dom.byId("txtEscala").innerHTML = "Escala actual = 1:"+ Math.round(this.map.getScale());
          //añadimos la función que acutalizará el html para el evento del mapa
          on(this.map,"zoom-end", function(){
            //alternativa uno:
            dom.byId("txtEscala").innerHTML = "Escala actual = 1:"+ Math.round(mapa.getScale());
            //alternativa dos: llamar a un método
            //this.actualizarEscala();
          });
          
       },

       //onOpen: function(){
        //
       //}
       //método que actualiza la escala
       actualizarEscala: function(evt){
          dom.byId("txtEscala").innerHTML = "Escala actual = 1:"+ Math.round(this.getScale());
       },


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