'use strict';

/**
 * @ngdoc function
 * @name geekydicApp.controller:SkyrimCtrl
 * @description
 * # SkyrimCtrl
 * Controller of the geekydicApp
 */
angular.module('geekydicApp')
  .service('sDataCache', function($http) {
    var data = {};
    this.get = function(url, callback) {
      if (data[url]) {
        callback(data[url]);
      } else {
        $http.get(url).then(function(response) {
          data[url] = response.data;
          callback(response.data)
        });
      }
    };
  })
  .controller('SkyrimCtrl', function ($scope, $routeParams, sDataCache) {
    $scope.words = [];
    // JLPT stuff
    $scope.jlptSymbols = {
      0: '➄➃➂➁➀⓿',
      1: '➄➃➂➁❶',
      2: '➄➃➂❷',
      3: '➄➃❸',
      4: '➄❹',
      5: '❺',
    };
    $scope.getJlptTitle = function(jlpt) {
      if (jlpt >= 1) {
        return 'JLPT Level ' + jlpt;
      } else {
        return 'Not in JLPT';
      }
    }
    $scope.page = parseInt($routeParams.page) - 1;
    function range(size) {
      return Array.apply(null, Array(size)).map(function (_, i) {return i;});
    }
    $scope.pages = [];
    var PAGESIZE = 100;
    sDataCache.get('data/skyrimvoc.json', function(allWords) {
      //console.debug(words);
      var numWords = allWords.length;
      var onLast = numWords % PAGESIZE;
      var numPages = (numWords - onLast) / PAGESIZE;
      if (onLast) {
        numPages += 1;
      }
      $scope.pages = range(numPages);
      $scope.words = allWords.slice(
        PAGESIZE * $scope.page,
        PAGESIZE * ($scope.page + 1));
    });
  });
