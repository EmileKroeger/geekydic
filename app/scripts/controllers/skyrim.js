'use strict';

/**
 * @ngdoc function
 * @name geekydicApp.controller:SkyrimCtrl
 * @description
 * # SkyrimCtrl
 * Controller of the geekydicApp
 */
angular.module('geekydicApp')
  .service('sSkyrimData', function($http) {
    // TODO
  })
  .controller('SkyrimCtrl', function ($scope, $http, $routeParams) {
    $scope.words = [];
    $scope.stars = {
      0: '',
      1: '★',
      2: '★★',
      3: '★★★',
      4: '★★★★',
      5: '★★★★★',
    };
    $scope.nostars = {
      0: '☆☆☆☆☆',
      1: '☆☆☆☆',
      2: '☆☆☆',
      3: '☆☆',
      4: '☆',
      5: '',
    };
    $scope.page = parseInt($routeParams.page) - 1;
    function range(size) {
      return Array.apply(null, Array(size)).map(function (_, i) {return i;});
    }
    $scope.pages = [];
    $http.get('data/skyrimvoc.json').then(function(response) {
      //console.debug(words);
      var PAGESIZE = 100;
      var allWords = response.data;
      var numWords = allWords.length;
      var onLast = numWords % PAGESIZE;
      var numPages = (numWords - onLast) / PAGESIZE;
      if (onLast) {
        numPages += 1;
      }
      $scope.pages = range(numPages);
      $scope.words = response.data.slice(
        PAGESIZE * $scope.page,
        PAGESIZE * ($scope.page + 1));
    });
  });
