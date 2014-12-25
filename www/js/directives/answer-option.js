'use strict';

angular.module('japaneseHelperApp')
  .directive('answerOption', function(kanjiHelper) {
    return {
        restrict: 'A',
        template: '<div>{{answerText}}</div>',
        scope: { 
            answerText: '@'
        },
        controller: function ($scope) {
        },
        link: function (scope, element, attrs) {      			
        }
    }
  });