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
      .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeCtrl',
      })
      //.when('/about', {
      //  templateUrl: 'views/about.html',
      //  controller: 'AboutCtrl'
      //})
      .when('/guide/:source', {
        templateUrl: 'views/series.html',
        controller: 'SeriesCtrl'
      })
      .when('/guide/:source/stats', {
        templateUrl: 'views/serie.html',
        controller: 'SerieCtrl'
      })
      .when('/guide/:source/episode/:episode', {
        templateUrl: 'views/episode.html',
        controller: 'EpisodeCtrl'
      })
      .when('/guide/:source/episode/:episode/:list', {
        templateUrl: 'views/episodewords.html',
        controller: 'EpisodeWordsCtrl'
      })
      .when('/:source/:page', {
        templateUrl: 'views/wordlist.html',
        controller: 'WordlistCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
