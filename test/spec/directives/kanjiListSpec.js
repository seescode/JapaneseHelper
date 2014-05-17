'use strict';

describe('Directive: kanjiList', function () {
  var element, scope, compile,
      validTemplate = '<div kanji-list></div>';

  function createDirective(template) {
    var elm;

    // Create directive
    elm = compile(template || validTemplate)(scope);

    // Trigger watchers
    //scope.$apply();

    // Return
    return elm;
  }

  beforeEach(function () {

    // Load the directive's module
    module('japaneseHelperApp');

    // Reset data each time

    // Provide any mocks needed
    module(function ($provide) {
      //$provide.value('Name', new MockName());
    });

    // Inject in angular constructs otherwise,
    //  you would need to inject these into each test
    inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      compile = $compile;
    });
  });

  describe('when created', function () {
    // Add specs
    
    it('should set correct startindex and endindex for page-size 50', function () {
    	
    	var elm = createDirective('<div kanji-list page-size="50"></div>');
    	
    	expect(elm.isolateScope().startIndex).toBe(1);
    	expect(elm.isolateScope().endIndex).toBe(50);				
	});
  });

  describe('when the model changes', function () {
    // Add specs
  });

  return describe('when destroyed', function () {
    // Add specs
  });
});