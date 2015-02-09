'use strict';

(function () {
    angular.module('japaneseHelperApp')
      .controller('GuessKanjiLevelSelectCtrl', function ($scope, $localForage, kanjiHelper, constantsService, config) {
          var vm = this;

          $localForage.getItem(config.currentLevelKey).then(function (data) {
              vm.currentLevel = data;

              if (vm.currentLevel == null) {
                  $localForage.setItem(config.currentLevelKey, 1).then(function () {
                  });
                  vm.currentLevel = 1;
              }
          });

          vm.guessKanjiUrl = config.guessKanjiUrl;
          vm.title = config.title;
      });
})();