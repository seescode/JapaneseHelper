'use strict';

angular.module('japaneseHelperApp')
  .controller('GuessKanjiLevelSelectCtrl', function ($scope, localStorageService, kanjiHelper, constantsService) {

      $scope.currentLevel = localStorageService.get('currentLevel');

      if ($scope.currentLevel === null) {
          localStorageService.set('currentLevel', '1');
          $scope.currentLevel = 1;
      }

      var totalLevels = Math.ceil(kanjiHelper.RtkList.Length() / constantsService.KANJI_PER_LEVEL);

      $scope.levels = [];

      var i;
      for (i = 1; i <= totalLevels; i++) {
          $scope.levels.push(i);
      }
  });