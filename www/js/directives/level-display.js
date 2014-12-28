'use strict';

angular.module('japaneseHelperApp')
  .directive('levelDisplay', function() {
    return {
        restrict: 'A',
        template: '<div class="level-display">Level: <span ng-bind="level"></span></div>',
        scope: { 
            level: '@'
        },
        controller: function ($scope) {
        },
        link: function (scope, element, attrs) {      			
        }
    }
  });