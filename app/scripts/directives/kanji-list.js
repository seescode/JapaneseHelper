'use strict';

angular.module('japaneseHelperApp')
  .directive('kanjiList', function(kanjiHelper) {
    return {
        restrict: 'A',
        replace: false,
        template: 
        '<div>' +
        '  <pagination total-items="totalItems" ng-model="currentPage" ng-change="pageChanged()" items-per-page="pageSize"></pagination>' +
        '    <ul>{{items}}</ul>' +
        '  <pagination total-items="totalItems" ng-model="currentPage" ng-change="pageChanged()" items-per-page="pageSize"></pagination>' +
        '</div>',        
        scope: { 
            pageSize: '@'
        },
        controller: function ($scope) {
        },
        link: function (scope, element, attrs) {
  			var kanjis = new kanjiHelper.RtkList();
        
  			scope.totalItems = kanjis.Length();
  			scope.currentPage = 1;
    
    
  			scope.pageChanged = function() {
	
				var pageItems = "";
				
				var startIndex = (scope.currentPage - 1) * scope.pageSize + 1;
				var endIndex = scope.currentPage * scope.pageSize;
				
				
				for (var i=startIndex;i<=endIndex;i++) {
					pageItems = pageItems + '<li>' + kanjis.GetById(i) + '</li>';
				}
				
				
				scope.items = pageItems;
				
  			};
        
        
        
        }
    }
  });