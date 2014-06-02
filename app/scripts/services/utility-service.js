﻿'use strict';

angular.module('japaneseHelperApp').factory('utilityService', function () {

    //Algorithm taking from this stack overflow post
    //http://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    var shuffle = function (array) {
        var currentIndex = array.length
          , temporaryValue
          , randomIndex
        ;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

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





