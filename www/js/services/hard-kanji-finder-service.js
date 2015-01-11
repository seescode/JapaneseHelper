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

    findHardKanji = function (kanjiItems) {
        //This method is where the bulk of the logic should happen.
        //This method does not interact with $localForage.  The calling
        //method will get the data from $localForage and pass it to this 
        //method to do the work.

        //this is a private method so no need to test this directly.
    };


    return {
        find: find
    };
});