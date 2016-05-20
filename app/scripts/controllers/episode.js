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
    this.vocDomains = [
      {
        title: 'Important words',
        key: 'important',
      },
      {
        title: 'Words you should already know',
        key: 'known',
      },
      {
        title: 'Other words',
        key: 'other',
      },
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
  });
