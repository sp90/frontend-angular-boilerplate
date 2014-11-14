'use strict';
var angular = require('angular');
var uiRouter = require('angular-ui-router');
var ngResource = require('angular-resource');
var ngAnimate = require('angular-animate');
var i18n = require('angular-i18n-da-dk');

var app = module.exports = angular.module('Conductor', ['ui.router', 'ngResource', 'ngAnimate']);

/* State example */
app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $locationProvider.hashPrefix('!');

    $urlRouterProvider.otherwise('/');

    /*$stateProvider
      .state('frontpage', {
        url: '/',
        templateUrl: '/js/templates/pages/frontpage.html',
        data: {
          containerClass: 'landing-page'
        }
      });

    require('./states/login')($stateProvider);
    require('./states/handbook')($stateProvider);
    require('./states/companies')($stateProvider);
    require('./states/news')($stateProvider);
    require('./states/network')($stateProvider);*/
}]);