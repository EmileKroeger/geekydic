'use strict';

/**
 * @ngdoc function
 * @name geekydicApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the geekydicApp
 */
angular.module('geekydicApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
