'use strict';

/**
 * @ngdoc function
 * @name geekydicApp.controller:EpisodeCtrl
 * @description
 * # EpisodeCtrl
 * Controller of the geekydicApp
 */
angular.module('geekydicApp')
  .service('sEpisodeData', function ($http) {
    this.get = function(source, episode, callback) {
      var dataFile = 'data/episodes/' + source + '_' + episode + '.json';
      console.debug("Fetching: " + dataFile)
      $http.get(dataFile).then(function(response) {
        callback(response.data);
      });
    };
  })
  .controller('EpisodeCtrl', function ($scope, $routeParams, sEpisodeData) {
    $scope.source = $routeParams.source;
    $scope.episode = $routeParams.episode;
    $scope.vocabularyLists = null;
    $scope.vocDomains = [
      {
        title: "Important words",
        key: "important",
      },
      {
        title: "Words you should already know",
        key: "already_known",
      },
      {
        title: "Other words",
        key: "other",
      },
    ]
    sEpisodeData.get($scope.source, $scope.episode, function(vocabularyLists) {
      //$scope.$apply(function() {
        console.log("I got data!");
        $scope.vocabularyLists = vocabularyLists;
        console.debug(vocabularyLists);
        //});
    });
  });
