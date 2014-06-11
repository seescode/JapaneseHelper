'use strict';

describe('Directive: kanji-list', function () {
  var element, scope, compile, mockKanjiHelper,
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

  function setup() {

    // Load the directive's module
    module('japaneseHelperApp');

    // Reset data each time

    // Provide any mocks needed
    module(function ($provide) {   
      $provide.value('kanjiHelper', mockKanjiHelper);
    });

    // Inject in angular constructs otherwise,
    //  you would need to inject these into each test
    inject(function ($rootScope, $compile) {
      scope = $rootScope.$new();
      compile = $compile;
    });
  };

  describe('when created', function () {
    // Add specs
    
    it('should set correct startindex and endindex for page-size 50', function () {	

      mockKanjiHelper = {};
      
      mockKanjiHelper.RtkList = function () {
        var x = {};
        
        x.Length = function() {  return 80; }; 
        x.GetById = function() { return "x"; };
       
      	return x;
      }
      
      mockKanjiHelper.KanjiKeywordList = function () { return {}; };
    
      setup();      
    
      var elm = createDirective('<div kanji-list page-size="50"></div>');
    	
      expect(elm.isolateScope().startIndex).toBe(1);
      expect(elm.isolateScope().endIndex).toBe(50);				    	
	});
	
    it('should set correct startindex and endindex for page-size 50 when there is only 20 items', function () {	

      mockKanjiHelper = {};
      
      mockKanjiHelper.RtkList = function () {
        var x = {};
        
        x.Length = function() {  return 20; }; 
        x.GetById = function() { return "x"; };
       
      	return x;
      }
      
      mockKanjiHelper.KanjiKeywordList = function () { return {}; };
      
      setup();    
    
      var elm = createDirective('<div kanji-list page-size="50"></div>');
    	
      expect(elm.isolateScope().startIndex).toBe(1);
      expect(elm.isolateScope().endIndex).toBe(20);					    	
	});

    it('should set correct startindex and endindex for last page', function () {	
    
      mockKanjiHelper = {};
      
      mockKanjiHelper.RtkList = function () {
        var x = {};
        
        x.Length = function() {  return 80; }; 
        x.GetById = function() { return "x"; };
       
      	return x;
      }
      
      mockKanjiHelper.KanjiKeywordList = function () { return {}; };
      
      setup();    
    
      var elm = createDirective('<div kanji-list page-size="50"></div>');
      
      elm.isolateScope().currentPage = 2;
      elm.isolateScope().pageChanged();
    	
      expect(elm.isolateScope().startIndex).toBe(51);
      expect(elm.isolateScope().endIndex).toBe(80);				    	
	});
	
  });

});