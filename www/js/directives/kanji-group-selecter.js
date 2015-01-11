'use strict';

(function () {

    angular.module('japaneseHelperApp')
      .directive('kanjiGroupSelecter', function (kanjiHelper, constantsService) {
          return {
              restrict: 'A',
              replace: false,
              templateUrl: 'templates/directives/kanji-group-selecter.html',
              scope: {
                  url: '@',
                  text: '@'
              },
              link: function (scope, element, attrs) {
                  /*
                      Need to have this directive use ng-transclude in order for it to be very reusable.
                      My plan is to reuse this directive both on the guess-kanji-level-select.html and
                      kanji-list.html.  You should be able to specify what the lin
                  */

                  var totalLevels = Math.ceil(kanjiHelper.RtkList.Length() / constantsService.KANJI_PER_LEVEL);

                  scope.firstHalfLevels = [];
                  scope.lastHalfLevels = [];

                  var i;
                  for (i = 1; i <= totalLevels / 2; i++) {
                      scope.firstHalfLevels.push(i);
                  }

                  var j;
                  for (j = i; j <= totalLevels; j++) {
                      scope.lastHalfLevels.push(j);
                  }
              }
          }
      });
})();