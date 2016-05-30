'use strict';

/**
 * @ngdoc function
 * @name geekydicApp.controller:SerieCtrl
 * @description
 * # SerieCtrl
 * Controller of the geekydicApp
 */
angular.module('geekydicApp')
  .controller('SerieCtrl', 
    function ($scope, $routeParams, sEpisodeData, sSeriesIndex) {
      // Seriously Javascript....
      function compareNumbers(a, b)
      {
          return a - b;
      }
      $scope.source = $routeParams.source;
      $scope.episode = parseInt($routeParams.episode);
      $scope.episodes = sSeriesIndex.episodes[$scope.source];
      sEpisodeData.getLearningStats($scope.source, function(learningStats) {
        $scope.learningStats = learningStats;
      });
      sEpisodeData.getJlptLearningStats($scope.source, function(jlptLearningStats) {
        console.debug(jlptLearningStats);
        $scope.jlptLearningStats = jlptLearningStats;
        // Get keys sorted as int
        $scope.statEpisodes = [];
        Object.keys(jlptLearningStats).forEach(function(key) {
          $scope.statEpisodes.push(parseInt(key));
        });
        $scope.statEpisodes.sort(compareNumbers);
      });
    });
