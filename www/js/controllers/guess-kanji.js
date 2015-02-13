'use strict';

(function () {
    angular.module('japaneseHelperApp')
      .controller('GuessKanjiCtrl', function ($scope, $stateParams, $location, $localForage, levelGeneratorService, constantsService, config) {

          //skipCorrect basically prevents you from getting points whenever you get something wrong and are
          //shown the correct answer and then you answer it correctly.  That shouldn't count as a correct answer.
          var skipCorrect = false;
          var vm = this;

          vm.hp = constantsService.STARTING_HEALTH;

          //Get the current level from the url.
          vm.level = $stateParams.level

          var kanjiSet;

          if (vm.level == 0) {
              $localForage.getItem(config.currentLevelKey).then(function (data) {
                  vm.level = data;

                  if (vm.level == null) {
                      $localForage.setItem(config.currentLevelKey, 1).then(function () {
                      });

                      vm.level = 1;
                  }

                  // Need to refactor and put this into the game logic service
                  kanjiSet = levelGeneratorService.generate(vm.level);

                  populateItems();
              }, function (error) {
                  console.error(error);
              });
          } else {
              kanjiSet = levelGeneratorService.generate(vm.level);

              populateItems();
          }

          function populateItems() {

              var set = kanjiSet.getNextSet();

              vm.questionText = set.questionText;
              vm.answer1 = set.options[0];
              vm.answer2 = set.options[1];
              vm.answer3 = set.options[2];
              vm.answer4 = set.options[3];
          }

          vm.onAnswerOptionClick = function (kanjiItem) {

              if (kanjiItem.equals(vm.questionText)) {

                  if (skipCorrect == false) {
                      vm.questionText.correct();
                  }

                  if (kanjiSet.reachedLastElement() === true) {
                      alert("You win! Try the next level");

                      //increment the level
                      var lvl = parseFloat(vm.level);
                      lvl++;
                      vm.level = String(lvl);

                      //TODO move this to a service and 3 should be a constant.
                      if (vm.hp < constantsService.STARTING_HEALTH) {
                          vm.hp = constantsService.STARTING_HEALTH;
                      }
                      else if (vm.hp < constantsService.MAX_HEALTH) {
                          vm.hp++;
                      }

                      //save the level
                      $localForage.setItem(config.currentLevelKey, lvl).then(function () {
                      });

                      kanjiSet = levelGeneratorService.generate(vm.level);
                  }

                  populateItems();
                  skipCorrect = false;
              }
              else {
                  alert("Wrong! " + vm.questionText.keyword + " = " + vm.questionText.kanji);
                  vm.hp--;
                  vm.questionText.incorrect();
                  skipCorrect = true;

                  if (vm.hp <= 0) {
                      $location.url(config.guessKanjiLevelSelectUrl);
                  }
              }
          };
      });
})();