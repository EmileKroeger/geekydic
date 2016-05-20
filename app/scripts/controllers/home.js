'use strict';

/**
 * @ngdoc function
 * @name geekydicApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the geekydicApp
 */
angular.module('geekydicApp')
  .service('sSeriesIndex', function() {
    this.episodes = {
      naruto: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    };
    this.series = ['naruto'];
  })
  .controller('HomeCtrl', function ($scope, sSeriesIndex) {
    $scope.series = sSeriesIndex.series;
    $scope.episodes = sSeriesIndex.episodes;
  });
