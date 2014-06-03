'use strict';

angular.module('japaneseHelperApp').factory('kanjiSetService', function () {

    return function (kanjiItemsArray) {
        this.items = kanjiItemsArray;
        this.shuffledItems = _.shuffle(angular.copy(this.items));

        this.popUniqueRandom = function (item) {

            if (this.shuffledItems.length <= 0) {
                throw {
                    error: "Cannot pop unique random when length is 0"
                };
            }

            return this.shuffledItems.pop();
        };

        this.length = function () {
            return this.shuffledItems.length;
        };

        this.reset = function () {
            this.shuffledItems = _.shuffle(angular.copy(this.items));
        };
    };
});