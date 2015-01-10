'use strict';
(function () {
    angular.module('japaneseHelperApp')
      .controller('KanjiSetCtrl', function ($scope, $stateParams, $ionicModal, kanjiHelper, constantsService) {
          var vm = this;
          var kanjis = kanjiHelper.RtkList;
          var conversions = kanjiHelper.KanjiKeywordList;

          var currentPage = $stateParams.level;

          vm.showEnglish = function (kanji) {
              vm.keyword = conversions.Get(kanji);
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

          var determineKanjiRange = function () {
              var range = {};
              range.startIndex = (currentPage - 1) * constantsService.KANJI_PER_LEVEL;
              range.endIndex = currentPage * constantsService.KANJI_PER_LEVEL + 1;

              if (range.endIndex > kanjis.Length()) {
                  range.endIndex = kanjis.Length();
              }

              return range;
          }

          var generateItems = function () {
              var range = determineKanjiRange();

              var pageItems = [];
              for (var i = range.startIndex; i <= range.endIndex; i++) {
                  pageItems.push(kanjis.GetById(i));
              }

              vm.items = pageItems;
          }

          generateItems();
      });
})();