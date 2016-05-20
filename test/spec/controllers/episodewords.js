'use strict';

describe('Controller: EpisodewordsCtrl', function () {

  // load the controller's module
  beforeEach(module('geekydicApp'));

  var EpisodewordsCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EpisodewordsCtrl = $controller('EpisodewordsCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
