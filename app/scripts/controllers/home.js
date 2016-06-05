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
    
    function range(start, stop, step) {
        if (typeof stop === 'undefined') {
            // one param defined
            stop = start;
            start = 0;
        }
        if (typeof step === 'undefined') {
            step = 1;
        }
        if ((step > 0 && start >= stop) || (step < 0 && start <= stop)) {
            return [];
        }
        var result = [];
        for (var i = start; step > 0 ? i < stop : i > stop; i += step) {
            result.push(i);
        }
        return result;
    }
    this.episodes = {
      naruto: range(1, 36),
    };
    this.series = ['naruto'];
  })
  .controller('HomeCtrl', function ($scope, sSeriesIndex) {
    $scope.series = sSeriesIndex.series;
    $scope.episodes = sSeriesIndex.episodes;
  });
