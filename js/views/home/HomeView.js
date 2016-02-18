define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/homeTemplate.html'
], function($, _, Backbone, homeTemplate){

  var HomeView = Backbone.View.extend({
    el: $("#page"),

    render: function(){

      $('.menu ul li').click(function(){
        $('.menu ul li').removeClass('active');
        $(this).addClass('active');
      });

      this.$el.html(homeTemplate);
    }

  });

  return HomeView;
  
});
