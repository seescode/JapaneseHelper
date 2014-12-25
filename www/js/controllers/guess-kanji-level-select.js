'use strict';

angular.module('japaneseHelperApp')
  .controller('GuessKanjiLevelSelectCtrl', function ($scope, /*localStorageService,*/ kanjiHelper, constantsService) {

      //$scope.currentLevel = localStorageService.get('currentLevel');

      //if ($scope.currentLevel === null) {
      //    localStorageService.set('currentLevel', '1');
      //    $scope.currentLevel = 1;
      //}
      $scope.currentLevel = 1;

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