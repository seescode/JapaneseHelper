'use strict';

(function () {
    angular.module('japaneseHelperApp')
      .controller('GuessKanjiCtrl', function ($scope, $stateParams, $location, $localForage, levelGeneratorService, constantsService, config) {

          //skipCorrect basically prevents you from getting points whenever you get something wrong and are
          //shown the correct answer and then you answer it correctly.  That shouldn't count as a correct answer.
          var skipCorrect = false;
          var vm = this;

          //TODO get this info from $localForage
          vm.hp = 3;

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

              var options = [];
              var questionText = kanjiSet.getNext();

              //TODO move this into a new method called kanjiSet.getOptions() alternatively just have 
              //getNext() return an object with all this info.
              options.push(questionText);
              options.push(kanjiSet.getRandomOption());
              options.push(kanjiSet.getRandomOption());
              options.push(kanjiSet.getRandomOption());
              options = _.shuffle(options);

              vm.questionText = questionText;
              vm.answer1 = options[0];
              vm.answer2 = options[1];
              vm.answer3 = options[2];
              vm.answer4 = options[3];
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
                      if (vm.hp < 3) {
                          vm.hp = 3;
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