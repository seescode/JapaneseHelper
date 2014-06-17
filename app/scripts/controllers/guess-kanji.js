'use strict';

angular.module('japaneseHelperApp')
  .controller('GuessKanjiCtrl', function ($scope, $routeParams, levelGeneratorService) {

      //Get the current level from the url.
      $scope.level = $routeParams.level


      // Need to refactor and put this into the game logic service
      var kanjiSet = levelGeneratorService.generate($scope.level);
      var options = [];

      options.push(kanjiSet.getNext());
      options.push(kanjiSet.getRandomOption());
      options.push(kanjiSet.getRandomOption());
      options.push(kanjiSet.getRandomOption());

      $scope.questionText = options[0];

      options = _.shuffle(options);

      $scope.answer1 = options[0];
      $scope.answer2 = options[1];
      $scope.answer3 = options[2];
      $scope.answer4 = options[3];

      $scope.alertTest = function () {
          alert(123);
      };

  });