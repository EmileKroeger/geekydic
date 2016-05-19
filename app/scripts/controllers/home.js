'use strict';

/**
 * @ngdoc function
 * @name geekydicApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the geekydicApp
 */
angular.module('geekydicApp')
  .controller('HomeCtrl', function ($scope) {
    $scope.series = [
      {
        "name": "naruto",
        "episodes": [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      },
    ];
  });
