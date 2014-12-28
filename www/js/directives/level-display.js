'use strict';

angular.module('japaneseHelperApp')
  .directive('levelDisplay', function() {
    return {
        restrict: 'A',
        template: '<div style="float:left">Level: <span ng-bind="level"></span></div>',
        scope: { 
            level: '@'
        },
        controller: function ($scope) {
        },
        link: function (scope, element, attrs) {      			
        }
    }
  });