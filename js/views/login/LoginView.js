define([
    'jquery',
    'underscore',
    'backbone',
    'text!templates/loginTemplate.html'
], function($, _, Backbone,LoginTemplate){

    var LoginView = Backbone.View.extend({

        el: $("#page"),
        render:function () {
          $('.menu ul li').click(function(){
          $('.menu ul li').removeClass('active');
          $(this).addClass('active');
        });
          this.$el.html(LoginTemplate);
        },
        events: {
            'click #loginBtn': 'getLogin'
        }
    });

    return LoginView;
});