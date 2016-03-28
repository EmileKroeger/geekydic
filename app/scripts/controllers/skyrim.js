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
    $scope.stars = {
      0: '➄➃➂➁➀✪',
      1: '➄➃➂➁❶',
      2: '➄➃➂❷',
      3: '➄➃❸',
      4: '➄❹',
      5: '❺',
      //❶❷❸❹❺
      //➀➁➂➃➄
    };
    $scope.nostars = {
      0: '',
      1: '',
      2: '➀',
      3: '➁➀',
      4: '➂➁➀',
      5: '➃➂➁➀',
    };
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
