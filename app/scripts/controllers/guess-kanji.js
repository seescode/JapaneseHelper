'use strict';

angular.module('japaneseHelperApp')
  .controller('GuessKanjiCtrl', function ($scope, kanjiSetService) {

      var set = new kanjiSetService(['12', '34']);

      $scope.abc = set.getUniqueRandom();

  });