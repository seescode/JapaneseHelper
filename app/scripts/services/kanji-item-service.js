'use strict';

angular.module('japaneseHelperApp').factory('kanjiItemService', function () {

    return function (kanji, keyword) {

        this.equals = function (item) {
            if (this.kanji === item.kanji &&
                this.keyword === item.keyword) {
                return true;
            }

            return false;
        };

        this.correct = function () {
            //TODO
            console.log("Saving to local storage as correct");
            alert("correct called");
            alert("kanji: " + this.kanji);
            alert("keyword: " + this.kanji);

        };

        this.incorrect = function () {
            //TODO
            console.log("Saving to local storage as incorrect");
            alert("incorrect called");
        };

        this.kanji = kanji;
        this.keyword = keyword;
    }
});