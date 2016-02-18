requirejs.config({
  paths: {
    jquery: '../bower_components/jquery/dist/jquery',
    underscore: '../bower_components/underscore/underscore',
    backbone: '../bower_components/backbone/backbone',
    parsley: 'bower_components/parsleyjs/dist/parsley',
    templates: '../templates'
  }
});

requirejs([
  'app',
], function(App){
  App.initialize();
});
