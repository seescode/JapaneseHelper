'use strict';

angular.module('japaneseHelperApp')
  .controller('GuessKanjiCtrl', function ($scope, $routeParams, $location, localStorageService, levelGeneratorService) {

      //Get the current level from the url.
      $scope.level = $routeParams.level

      var currentLevel = localStorageService.get('currentLevel');

      if (currentLevel === null) {
          localStorageService.set('currentLevel', '1');
      }

      if ($scope.level == 0) {
          $scope.level = localStorageService.get('currentLevel');
      }      

      // Need to refactor and put this into the game logic service
      var kanjiSet = levelGeneratorService.generate($scope.level);

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
                  localStorageService.set('currentLevel', lvl);

                  kanjiSet = levelGeneratorService.generate($scope.level);


              }

              populateItems();
          }
          else {
              $scope.questionText.incorrect();
              $location.url('/guess-kanji-level-select');
          }

      };

     
      populateItems();

  });