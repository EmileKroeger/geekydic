'use strict';

describe('Directive: episodeNav', function () {

  // load the directive's module
  beforeEach(module('geekydicApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<episode-nav></episode-nav>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the episodeNav directive');
  }));
});
