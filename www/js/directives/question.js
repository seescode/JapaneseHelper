'use strict';

angular.module('japaneseHelperApp')
  .directive('question', function(kanjiHelper) {
    return {
        restrict: 'A',
        replace: true,
        template: '<div>{{questionText}}</div>',
        scope: {
            questionText: '@'
        },
        controller: function ($scope) {
        },
        link: function (scope, element, attrs) {
        }
    }
  });