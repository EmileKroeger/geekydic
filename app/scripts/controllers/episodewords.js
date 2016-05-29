'use strict';

/**
 * @ngdoc function
 * @name geekydicApp.controller:EpisodewordsCtrl
 * @description
 * # EpisodewordsCtrl
 * Controller of the geekydicApp
 */
angular.module('geekydicApp')
  .controller('EpisodeWordsCtrl', 
    function ($scope, $routeParams, sEpisodeData, sSeriesIndex) {
      $scope.source = $routeParams.source;
      $scope.episode = parseInt($routeParams.episode);
      $scope.episodes = sSeriesIndex.episodes[$scope.source];
      $scope.listname = $routeParams.list;
      $scope.vocDomains = sEpisodeData.vocDomains;
      sEpisodeData.vocDomains.forEach(function(vocDomain) {
        if (vocDomain.key === $scope.listname) {
          $scope.vocDomain = vocDomain;
        }
      });
      //$scope.vocDomain = sEpisodeData.vocDomains[$scope.listname];
      //console.debug($scope.vocDomain);
      $scope.vocabularyLists = null;
      sEpisodeData.get($scope.source, $scope.episode, function(vocabularyLists) {
        $scope.vocabularyLists = vocabularyLists;
      });
      sEpisodeData.getInfo($scope.source, $scope.episode, function(info) {
        $scope.episodeInfo = info;
      });
      $scope.toggleShowDefinition = function(entry) {
        entry.show = !entry.show;
      };
      $scope.shouldShowDefinition = function(entry) {
        return (!entry.known) || entry.show;
      };
  });
