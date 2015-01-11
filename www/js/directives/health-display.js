'use strict';

(function () {

    angular.module('japaneseHelperApp')
      .directive('healthDisplay', function () {
          return {
              restrict: 'A',
              template: '',
              scope: {
                  hp: '@',
                  maxHp: '@'  //TODO: maybe show an outlined heart for missing health.
              },
              controller: function ($scope) {
              },
              link: function (scope, element, attrs) {
                  var buildView = function () {
                      var template = '<div class="health-display">';

                      for (var i = 0; i < scope.hp; i++) {
                          template += '<i class="icon ion-heart"></i>';
                      }

                      template += '</div">';

                      element.html(template);
                  };

                  scope.$watch('hp', function (newValue, oldValue) {
                      if (newValue !== oldValue) {
                          buildView();
                      }
                  });

                  buildView();
              }
          }
      });
})();