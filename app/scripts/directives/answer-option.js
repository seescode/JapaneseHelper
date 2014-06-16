'use strict';

angular.module('japaneseHelperApp')
  .directive('answerOption', function(kanjiHelper) {
    return {
        restrict: 'A',
        replace: false,
        template: '<div ng-click="click()">{{answerText}}</div>',
        scope: { 
            answerText: '@',
            click: '&'
        },
        controller: function ($scope) {
        },
        link: function (scope, element, attrs) {      			
        }
    }
  });