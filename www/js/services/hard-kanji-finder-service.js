'use strict';

angular.module('japaneseHelperApp').factory('hardKanjiFinderService', function ($localForage, kanjiItemService) {

    var find = function (number) {

        var hardKanjiArray = [];

        if (number <= 0) {
            return hardKanjiArray;
        }
 
        //"一C"
        //var item = new kanjiItemService(kanji, keyword);

        hardKanjiArray.push(new kanjiItemService('hi', 'fire'));
        

        return hardKanjiArray;
    },

    determineRtkRange = function (level) {

    };


    return {
        find: find
    };
});