'use strict';

describe('Controller: SerieCtrl', function () {

  // load the controller's module
  beforeEach(module('geekydicApp'));

  var SerieCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SerieCtrl = $controller('SerieCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
