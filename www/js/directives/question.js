'use strict';

(function () {

    angular.module('japaneseHelperApp')
      .directive('question', function (kanjiHelper) {
          return {
              restrict: 'A',
              replace: true,
              template: '<div ng-bind="questionText"></div>',
              scope: {
                  questionText: '@'
              },
              controller: function ($scope) {
              },
              link: function (scope, element, attrs) {
              }
          }
      });
})();