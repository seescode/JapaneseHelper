'use strict';

angular.module('japaneseHelperApp').factory('kanjiSetService', function (utilityService) {

    return function (kanjiItemsArray) {
        this.items = utilityService.shuffle(kanjiItemsArray);

        this.getUniqueRandom = function (item) {
            return this.items[0];
        };

        this.reset = function () {
            this.items = [];
        };
    };
});