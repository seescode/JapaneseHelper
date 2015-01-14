'use strict';
(function () {
    angular.module('japaneseHelperApp')
      .controller('KanjiSetCtrl', function ($scope, $stateParams, $ionicModal, kanjiHelper, kanjiItemService, constantsService) {
          var vm = this;
          var kanjis = kanjiHelper.RtkList;
          var conversions = kanjiHelper.KanjiKeywordList;

          var currentPage = $stateParams.level;

          vm.showEnglish = function (item) {
              vm.keyword = item.keyword;

              item.getTotalCorrect().then(function (data) {
                  vm.correct = data;
              }, function (error) {
                  console.error(error);
              });

              item.getTotalIncorrect().then(function (data) {
                  vm.incorrect = data;
              }, function (error) {
                  console.error(error);
              });

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

                  var kanji = kanjiHelper.RtkList.GetById(i);
                  var keyword = kanjiHelper.KanjiKeywordList.Get(kanji);
                  var item = new kanjiItemService(kanji, keyword);

                  pageItems.push(item);
              }

              vm.items = pageItems;
          }

          generateItems();
      });
})();