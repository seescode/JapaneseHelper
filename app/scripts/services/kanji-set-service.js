'use strict';

/*
    The way I envision using this is say that you are on level 1 which has kanji 1 to 25.
    You would then use this service with the first 25 kanji passed into the constructor.
    You would run getNext on each new kanji until you get to the last one.  In order
    to get random options I would call getRandomOption.
*/

angular.module('japaneseHelperApp').factory('kanjiSetService', function () {

    return function (kanjiItemsArray) {

        if (_.isArray(kanjiItemsArray) === false || kanjiItemsArray === []) {
            throw {
                error: "KanjiSetService must take in a nonempty array"
            }
        }

        this.items = kanjiItemsArray;
        this.shuffledItems = _.shuffle(angular.copy(this.items));
        this.nextIndex = -1;

        //Call this method to get the next item in the list.  
        this.getNext = function () {

            if (this.nextIndex + 1 >= this.items.length) {
                throw {
                    error: "Cannot get next: exceeded bounds of the array"
                };
            }

            this.reset();
            this.nextIndex++;

            return this.items[this.nextIndex];
        };

        //Call this method after you have gotten getNext() in order to get possible
        //random values to choose from.
        this.getRandomOption = function () {

            if (this.nextIndex === -1) {
                throw {
                    error: "Call getNext() at least once before calling getRandomOption()"
                };
            }

            var randomItem = this.shuffledItems.pop();

            if (this.nextIndex >= 0 && randomItem.equals(this.items[this.nextIndex])) {
                if (this.shuffledItems.length <= 0) {
                    throw {
                        error: "Exhausted all random options."
                    };
                }

                randomItem = this.shuffledItems.pop();
            }

            return randomItem;
        };

        this.reachedLastElement = function () {
            if (this.nextIndex + 1 >= this.items.length) {
                return true;
            }

            return false;
        };

        //[REFACTOR] and make this a private method
        this.reset = function () {
            this.shuffledItems = _.shuffle(angular.copy(this.items));
        };
    };
});