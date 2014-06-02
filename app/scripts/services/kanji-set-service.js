'use strict';

angular.module('japaneseHelperApp').factory('kanjiSetService', function () {

    return function (kanjiItemsArray) {
        this.items = kanjiItemsArray;

        this.getUniqueRandom = function (item) {
            return this.items[0];
        };

        this.reset = function () {
            this.items = [];
        };
    };
});