'use strict';

angular.module('japaneseHelperApp')
  .controller('GuessKanjiCtrl', function ($scope, $stateParams, $location, $localForage, levelGeneratorService) {

      //TODO get this info from $localForage
      $scope.hp = 3;
      $scope.maxHp = 3;

      //Get the current level from the url.
      $scope.level = $stateParams.level

      var kanjiSet;

      if ($scope.level == 0) {
          $localForage.getItem('currentLevel').then(function (data) {
              $scope.level = data;

              if ($scope.level == null) {
                  $localForage.setItem('currentLevel', 1).then(function () {
                  });

                  $scope.level = 1;
              }

              // Need to refactor and put this into the game logic service
              kanjiSet = levelGeneratorService.generate($scope.level);

              populateItems();
          }, function (error) {
              console.error(error);
          });
      } else {
          kanjiSet = levelGeneratorService.generate($scope.level);

          populateItems();
      }

      function populateItems() {

          var options = [];
          var questionText = kanjiSet.getNext();
          options.push(questionText);
          options.push(kanjiSet.getRandomOption());
          options.push(kanjiSet.getRandomOption());
          options.push(kanjiSet.getRandomOption());
          options = _.shuffle(options);

          $scope.questionText = questionText;
          $scope.answer1 = options[0];
          $scope.answer2 = options[1];
          $scope.answer3 = options[2];
          $scope.answer4 = options[3];
      }

      $scope.onAnswerOptionClick = function (kanjiItem) {

          if (kanjiItem.equals($scope.questionText)) {

              $scope.questionText.correct();

              if (kanjiSet.reachedLastElement() === true) {
                  alert("You win! Try the next level");

                  //increment the level
                  var lvl = parseFloat($scope.level);
                  lvl++;
                  $scope.level = String(lvl);

                  //save the level
                  $localForage.setItem('currentLevel', lvl).then(function () {
                  });

                  kanjiSet = levelGeneratorService.generate($scope.level);
              }

              populateItems();
          }
          else {
              alert("Wrong! " + $scope.questionText.keyword + " = " + $scope.questionText.kanji);
              $scope.hp--;
              $scope.questionText.incorrect();

              if ($scope.hp <= 0) {
                  $location.url('/guess-kanji-level-select');
              }
          }
      };
  });