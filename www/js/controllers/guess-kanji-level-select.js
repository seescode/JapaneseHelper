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
  });