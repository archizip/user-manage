define([
  'jquery',
  'underscore',
  'backbone',
  'views/home/HomeView',
  'views/login/LoginView',
  'views/footer/FooterView'
  
], function($, _, Backbone, HomeView, LoginView, FooterView) {
  
  var AppRouter = Backbone.Router.extend({
    routes: {
      
      'login': 'showLogin',
      'home' : 'showHome',
      '*actions': 'defaultAction'
    }
  });
  
  var initialize = function(){

    var app_router = new AppRouter;

    app_router.on('route:defaultAction', function (actions) {
        var homeView = new HomeView();
        homeView.render();
    });

    app_router.on('route:showHome', function () {
        var homeView = new HomeView();
        homeView.render();
    });

    app_router.on('route:showLogin', function () {
        var loginView = new LoginView();
        loginView.render();
    });

    var footerView = new FooterView();

    Backbone.history.start();
  };
  return { 
    initialize: initialize
  };
});
