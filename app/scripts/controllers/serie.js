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
      $scope.source = $routeParams.source;
      $scope.episode = parseInt($routeParams.episode);
      $scope.episodes = sSeriesIndex.episodes[$scope.source];
      sEpisodeData.getLearningStats($scope.source, function(learningStats) {
        $scope.learningStats = learningStats;
      });
      sEpisodeData.getJlptLearningStats($scope.source, function(jlptLearningStats) {
        console.debug(jlptLearningStats);
        $scope.jlptLearningStats = jlptLearningStats;
      });
    });
