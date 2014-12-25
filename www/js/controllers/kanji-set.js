'use strict';

angular.module('japaneseHelperApp')
  .controller('KanjiSetCtrl', function ($scope, $stateParams, $ionicModal, kanjiHelper, constantsService) {
      var kanjis = kanjiHelper.RtkList;
      var conversions = kanjiHelper.KanjiKeywordList;

      $scope.currentPage = $stateParams.level;
 
      $scope.showEnglish = function (kanji) {
          $scope.keyword = conversions.Get(kanji);
          $scope.modal.show();
      };

      $ionicModal.fromTemplateUrl('/templates/kanji-list/kanji-modal.html', {
          scope: $scope,  //this line of code basically says inherit the parent scope
          animation: 'slide-in-up'
      }).then(function (modal) {
          $scope.modal = modal;
      });

      //Cleanup the modal when we're done with it!
      $scope.$on('$destroy', function () {
          $scope.modal.remove();
      });

      $scope.determineKanjiRange = function () {
          $scope.startIndex = ($scope.currentPage - 1) * constantsService.KANJI_PER_LEVEL;
          $scope.endIndex = $scope.currentPage * constantsService.KANJI_PER_LEVEL + 1;

          if ($scope.endIndex > kanjis.Length()) {
              $scope.endIndex = kanjis.Length();
          }
      }

      $scope.generateItems = function () {
          $scope.determineKanjiRange();

          var pageItems = [];
          for (var i = $scope.startIndex; i <= $scope.endIndex; i++) {
              pageItems.push(kanjis.GetById(i));
          }

          $scope.items = pageItems;
      }

      $scope.generateItems();
  });