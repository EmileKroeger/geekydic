'use strict';

/**
 * @ngdoc function
 * @name geekydicApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the geekydicApp
 */
angular.module('geekydicApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
