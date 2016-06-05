'use strict';

/**
 * @ngdoc function
 * @name geekydicApp.controller:EpisodeCtrl
 * @description
 * # EpisodeCtrl
 * Controller of the geekydicApp
 */
angular.module('geekydicApp')
  .service('sEpisodeData', function (sDataCache) {
    this.get = function(source, episode, callback) {
      var dataFile = 'data/episodes/' + source + '_' + episode + '.json';
      sDataCache.get(dataFile, callback);
    };
    this.getInfo = function(source, episode, callback) {
      var dataFile = 'data/episodes/' + source + '_summaries.json';
      sDataCache.get(dataFile, function(episodesInfo) {
        callback(episodesInfo[episode]);
      });
    };
    this.getAllInfo = function(source, callback) {
      var dataFile = 'data/episodes/' + source + '_summaries.json';
      sDataCache.get(dataFile, function(episodesInfo) {
        callback(episodesInfo);
      });
    };
    this.getLearningStats = function(source, callback) {
      // Not used any more
      var dataFile = 'data/episodes/' + source + '_learning.json';
      sDataCache.get(dataFile, function(learningStats) {
        callback(learningStats);
      });
    };
    this.getJlptLearningStats = function(source, callback) {
      var dataFile = 'data/episodes/' + source + '_jlpt_learning.json';
      sDataCache.get(dataFile, function(jlptLearningStats) {
        callback(jlptLearningStats);
      });
    };
    this.vocDomains = [
      {
        title: 'Known',
        key: 'known',
      },
      {
        title: 'To Learn',
        key: 'tolearn',
      },
      {
        title: 'ALL',
        key: 'all',
      },
      //{
      //  title: 'Other',
      //  key: 'other',
      //},
    ];
    
  })
  .controller('EpisodeCtrl', 
  function ($scope, $routeParams, sEpisodeData, sSeriesIndex) {
    $scope.source = $routeParams.source;
    $scope.episode = parseInt($routeParams.episode);
    $scope.episodes = sSeriesIndex.episodes[$scope.source];
    $scope.vocDomains = sEpisodeData.vocDomains;
    $scope.vocabularyLists = null;
    sEpisodeData.get($scope.source, $scope.episode, function(vocabularyLists) {
      $scope.vocabularyLists = vocabularyLists;
    });
    sEpisodeData.getInfo($scope.source, $scope.episode, function(info) {
      $scope.episodeInfo = info;
    });
    $scope.totals = {};
    sEpisodeData.getJlptLearningStats($scope.source, function(jlptLearningStats) {
      $scope.jlptLearningStats = jlptLearningStats[$scope.episode];
      for (var jlpt=0; jlpt < 5; jlpt++) {
        var counts = $scope.jlptLearningStats[jlpt];
        $scope.totals[jlpt] = 0;
        ['known', 'tolearn', 'other'].forEach(function(cat) {
          if (counts[cat]) {
            $scope.totals[jlpt] += counts[cat];
          }
        })
      }
    });
    
  });
