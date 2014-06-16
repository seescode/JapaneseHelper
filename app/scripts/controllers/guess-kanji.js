'use strict';

angular.module('japaneseHelperApp')
  .controller('GuessKanjiCtrl', function ($scope, kanjiSetService) {


      $scope.alertTest = function () {
          alert(123);
      };

  });