'use strict';

/**
 * @ngdoc function
 * @name geekydicApp.controller:SkyrimCtrl
 * @description
 * # SkyrimCtrl
 * Controller of the geekydicApp
 */
angular.module('geekydicApp')
  .controller('SkyrimCtrl', function ($scope, $http) {
    console.log("getting data..!");
    $scope.words = [];
    $scope.stars = {
      0: "",
      1: "★",
      2: "★★",
      3: "★★★",
      4: "★★★★",
      5: "★★★★★",
    }
    $scope.nostars = {
      0: "☆☆☆☆☆",
      1: "☆☆☆☆",
      2: "☆☆☆",
      3: "☆☆",
      4: "☆",
      5: "",
    }
    $http.get("data/skyrimvoc.json").then(function(words) {
      console.debug(words);
      $scope.words = words.data;
      //$scope.$apply(function() {
      //  $scope.words = words;
      //  console.log("got words");
      //});
    })
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
