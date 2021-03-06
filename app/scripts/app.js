'use strict';

/**
 * @ngdoc overview
 * @name geekydicApp
 * @description
 * # geekydicApp
 *
 * Main module of the application.
 */
angular
  .module('geekydicApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      //.when('/', {
      //  templateUrl: 'views/main.html',
      //  controller: 'MainCtrl'
      //})
      //.when('/about', {
      //  templateUrl: 'views/about.html',
      //  controller: 'AboutCtrl'
      //})
      .when('/skyrim/:page', {
        templateUrl: 'views/skyrim.html',
        controller: 'SkyrimCtrl'
      })
      .otherwise({
        redirectTo: 'skyrim/1'
      });
  });
