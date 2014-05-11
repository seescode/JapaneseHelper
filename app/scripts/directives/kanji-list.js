'use strict';

angular.module('japaneseHelperApp')
  .directive('kanjiList', function(kanjiHelper) {
    return {
        restrict: 'A',
        replace: false,
        template: '<pagination total-items="totalItems" ng-model="currentPage" ng-change="pageChanged()" items-per-page="pageSize"></pagination>',        
        scope: { 
            pageSize: '@'
        },
        controller: function ($scope) {
        },
        link: function (scope, element, attrs) {
  			scope.totalItems = 200;
  			scope.currentPage = 1;
    
    
  			scope.pageChanged = function() {
				
  			};
        
            scope.message = scope.pageSize;
        }
    }
  });