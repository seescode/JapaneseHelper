'use strict';

angular.module('japaneseHelperApp')
  .controller('GuessKanjiCtrl', function ($scope, kanjiSetService) {

      var set = new kanjiSetService(['12', '34', '55', '77']);

      set.popUniqueRandom();
      set.popUniqueRandom();
      set.popUniqueRandom();
      set.popUniqueRandom();
  
      $scope.abc = set.length();


  });