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
          callback(response.data);
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
    $scope.maybePlusOne = function(page) {
      if (page === 'all') {
        return 'all';
      } else {
        return page + 1;
      }
    };
    $scope.getJlptTitle = function(jlpt) {
      if (jlpt >= 1) {
        return 'JLPT Level ' + jlpt;
      } else {
        return 'Not in JLPT';
      }
    };
    var SOURCES = {
      skyrim: {
        titleName: 'SKYRIM',
        name: 'skyrim',
        class: 'skyrim',
        blurb: 'Ordered by frequency. Hover over sentences for an English translation.'
      },
      miyazaki: {
        titleName: 'MIYAZAKI MOVIES',
        name: 'miyazaki',
        class: 'miyazaki',
        blurb: 'Ordered by frequency.'
      },
    }
    // Source description
    $scope.source = SOURCES[$routeParams.source];
    // Page handling
    if ($routeParams.page === 'all') {
      $scope.page = 'all';
    } else {
      $scope.page = parseInt($routeParams.page) - 1;
    }
    function range(size) {
      return Array.apply(null, new Array(size)).map(function (_, i) {return i;});
    }
    $scope.pages = [];
    var PAGESIZE = 100;
    var vocFile = 'data/' + $routeParams.source + 'voc.json';
    //sDataCache.get('data/skyrimvoc.json', function(allWords) {
    sDataCache.get(vocFile, function(allWords) {
      //console.debug(words);
      var numWords = allWords.length;
      var onLast = numWords % PAGESIZE;
      var numPages = (numWords - onLast) / PAGESIZE;
      if (onLast) {
        numPages += 1;
      }
      $scope.pages = range(numPages);
      $scope.pages.push('all');
      if ($scope.page === 'all') {
        $scope.words = allWords;
      } else {
        $scope.words = allWords.slice(
          PAGESIZE * $scope.page,
          PAGESIZE * ($scope.page + 1));
      }
    });
  });
