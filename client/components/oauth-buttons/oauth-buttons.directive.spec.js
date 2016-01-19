'use strict';

describe('Directive: oauthButtons', function() {

  // load the directive's module and view
  beforeEach(module('realizeChangeApp'));
  beforeEach(module('components/oauth-buttons/oauth-buttons.html'));

  var element, parentScope, elementScope;

  var compileDirective = function(template) {
    inject(function($compile) {
      element = angular.element(template);
      element = $compile(element)(parentScope);
      parentScope.$digest();
      elementScope = element.isolateScope();
    });
  };

  beforeEach(inject(function($rootScope) {
    parentScope = $rootScope.$new();
  }));

  it('should contain anchor buttons', function() {
    compileDirective('<oauth-buttons></oauth-buttons>');
  });

  it('should evaluate and bind the classes attribute to scope.classes', function() {
    parentScope.scopedClass = 'scopedClass1';
    compileDirective('<oauth-buttons classes="testClass1 {{scopedClass}}"></oauth-buttons>');
  });

  it('should bind scope.classes to class names on the anchor buttons', function() {
    compileDirective('<oauth-buttons></oauth-buttons>');
    // Add classes
    elementScope.classes = 'testClass1 testClass2';
    elementScope.$digest();

    // Remove classes
    elementScope.classes = '';
    elementScope.$digest();
  });
});
