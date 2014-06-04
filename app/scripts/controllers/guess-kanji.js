'use strict';

angular.module('japaneseHelperApp')
  .controller('GuessKanjiCtrl', function ($scope, kanjiSetService) {

      var set = new kanjiSetService(['12', '34', '55', '77']);

      var x = set.getNext() + " " + set.getRandomOption() + " " +
        set.getRandomOption() + " " + set.getRandomOption();

      set.getRandomOption();
  
      $scope.abc = x;


  });