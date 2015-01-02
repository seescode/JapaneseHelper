'use strict';

angular.module('japaneseHelperApp')
  .controller('GuessKanjiLevelSelectCtrl', function ($scope, $localForage, kanjiHelper, constantsService) {
      var vm = this;

      $localForage.getItem('currentLevel').then(function (data) {
          vm.currentLevel = data;

          if (vm.currentLevel == null) {
              $localForage.setItem('currentLevel', 1).then(function () {
              });
              vm.currentLevel = 1;
          }
      });
  });