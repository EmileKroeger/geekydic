'use strict';

/**
 * @ngdoc directive
 * @name geekydicApp.directive:episodeNav
 * @description
 * # episodeNav
 */
angular.module('geekydicApp')
  .directive('episodeNav', function () {
    return {
      //template: '<div>IOU a directive</div>',
      templateUrl: 'views/directives/episodenav.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        //element.text('this is the episodeNav directive');
      }
    };
  });
