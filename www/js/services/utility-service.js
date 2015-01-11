'use strict';
(function () {
    angular.module('japaneseHelperApp').factory('utilityService', function () {

        var shuffle = function (array) {

            return array;
        },

        abc = function () {
            //TODO
            console.log("Saving to local storage as correct");
            alert("correct called");
            alert("kanji: " + this.kanji);
            alert("keyword: " + this.kanji);

        };


        return {
            shuffle: shuffle
        };

    });
})();





