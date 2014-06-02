'use strict';

angular.module('japaneseHelperApp').factory('kanjiItemService', function () {

    var equals = function (item) {
        if (this.kanji === item.kanji &&
            this.keyword === item.keyword) {
            return true;
        }

        return false;
    },

    correct = function () {
        //TODO
        console.log("Saving to local storage as correct");
        alert("correct called");
        alert("kanji: " + this.kanji);
        alert("keyword: " + this.kanji);

    },

    incorrect = function () {
        //TODO
        console.log("Saving to local storage as incorrect");
        alert("incorrect called");
    };

    var kanji = "";
    var keyword = "";

    return {
        equals: equals,
        correct: correct,
        incorrect: incorrect,
        kanji: this.kanji,
        keyword: this.keyword
    };

});