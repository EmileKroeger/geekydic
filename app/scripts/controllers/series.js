'use strict';

/**
 * @ngdoc function
 * @name geekydicApp.controller:SeriesCtrl
 * @description
 * # SeriesCtrl
 * Controller of the geekydicApp
 */
angular.module('geekydicApp')
  .controller('SeriesCtrl', 
function ($scope, $routeParams, $location, sEpisodeData, sSeriesIndex) {
  $scope.source = $routeParams.source;
  $scope.episodes = sSeriesIndex.episodes[$scope.source];
  sEpisodeData.getAllInfo($scope.source, function(episodeInfo) {
    $scope.episodeInfo = episodeInfo;
  });
  $scope.goToEpisode = function(ep) {
    $location.path('/guide/' + $scope.source + '/episode/' + ep);
  };
});
