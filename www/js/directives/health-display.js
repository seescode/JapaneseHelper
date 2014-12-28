'use strict';

angular.module('japaneseHelperApp')
  .directive('healthDisplay', function() {
    return {
        restrict: 'A',
        template: '',
        scope: {
            hp: '@',
            maxHp: '@'
        },
        controller: function ($scope) {
        },
        link: function (scope, element, attrs) {
            var buildView = function () {
                var template = '<div style="float:right">';

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