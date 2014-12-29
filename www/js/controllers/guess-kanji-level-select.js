'use strict';

angular.module('japaneseHelperApp')
  .controller('GuessKanjiLevelSelectCtrl', function ($scope, $localForage, kanjiHelper, constantsService) {

      $localForage.getItem('currentLevel').then(function (data) {
          $scope.currentLevel = data;

          if ($scope.currentLevel == null) {
              $localForage.setItem('currentLevel', 1).then(function () {
              });
              $scope.currentLevel = 1;
          }
      });

      var totalLevels = Math.ceil(kanjiHelper.RtkList.Length() / constantsService.KANJI_PER_LEVEL);

      $scope.firstHalfLevels = [];
      $scope.lastHalfLevels = [];

      var i;
      for (i = 1; i <= totalLevels / 2; i++) {
          $scope.firstHalfLevels.push(i);
      }

      var j;
      for (j = i; j <= totalLevels; j++) {
          $scope.lastHalfLevels.push(j);
      }

  });