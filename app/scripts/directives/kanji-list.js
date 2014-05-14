'use strict';

angular.module('japaneseHelperApp')
  .directive('kanjiList', function(kanjiHelper) {
    return {
        restrict: 'A',
        replace: false,
        template: 
        '<div>' +
        '  <pagination total-items="totalItems" ng-model="currentPage" ng-change="pageChanged()" items-per-page="pageSize"></pagination>' +
        '    <ul class="kanjis"><li ng-repeat="i in items" ng-click="showEnglish(i)">{{i}}</li></ul>' +
        '  <pagination total-items="totalItems" ng-model="currentPage" ng-change="pageChanged()" items-per-page="pageSize"></pagination>' +
        '</div>',        
        scope: { 
            pageSize: '@'
        },
        controller: function ($scope) {
        },
        link: function (scope, element, attrs) {
  			var kanjis = new kanjiHelper.RtkList();  			
  			var conversions = new kanjiHelper.KanjiKeywordList();
        
  			scope.totalItems = kanjis.Length();
  			scope.currentPage = 1;
  			
  			var lastPage = Math.ceil(scope.totalItems / scope.pageSize);
    
    
  			scope.pageChanged = function() {
	
				var pageItems = [];
				
				var startIndex = (scope.currentPage - 1) * scope.pageSize + 1;
				var endIndex = scope.currentPage * scope.pageSize;
				
				if (scope.currentPage === lastPage) {
					endIndex = scope.totalItems;
				}				
				
				for (var i=startIndex;i<=endIndex;i++) {					
					pageItems.push(kanjis.GetById(i));
				}
								
				scope.items = pageItems;				
  			};        
  			
  			scope.showEnglish = function(kanji) {
  				alert(conversions.Get(kanji));
  			};
  			
  			scope.pageChanged();
        }
    }
  });