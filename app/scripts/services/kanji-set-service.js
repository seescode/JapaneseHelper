'use strict';

angular.module('japaneseHelperApp').factory('kanjiSetService', function () {

    var getUniqueRandom = function (item) {

    },

    reset = function () {
        this.items = [];
    },

    create = function (kanjiItemsArray) {
        this.items = kanjiItemsArray;
    };

    return {
        getUniqueRandom: getUniqueRandom,
        reset: reset,
        create: create
    };

});