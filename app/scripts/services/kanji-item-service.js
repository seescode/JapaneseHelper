'use strict';

angular.module('japaneseHelperApp').factory('kanjiItemService', function (localStorageService) {

    return function (kanji, keyword) {

        this.equals = function (item) {
            if (this.kanji === item.kanji &&
                this.keyword === item.keyword) {
                return true;
            }

            return false;
        };

        this.correct = function () {           
            var key = this.kanji + 'C';
            this.update(key);
        };

        this.incorrect = function () {
            var key = this.kanji + 'I';
            this.update(key);
        };

        //TODO: make private method
        this.update = function (key) {
            var existingVal = localStorageService.get(key);

            if (existingVal == null) {
                localStorageService.set(key, '1');
            }
            else {
                var incremented = parseInt(existingVal) + 1;
                localStorageService.set(key, String(incremented));
            }
        }

        this.kanji = kanji;
        this.keyword = keyword;
    }
});