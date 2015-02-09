'use strict';

(function () {

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
            return [];
        },
        update = function (kanjiItem) {
            //Whenever someone gets something correct or incorrect we need to recalculate the
            //hard kanji.  
            /*
            -Maintain a separate 20 hardest items list in localforage.
              -Something like ['abc','def','efg'].  This will be in sorted order from hardest to less hardest.
              -When something is incorrect/correct.  You need to recalc your list.
                -Case I: it's already in your list
                -Case II: it's not in your list yet.  
            -
             
            */
        },
        calculateDifficulty = function (kanjiItem) {
            //This should calculate difficulty for a specific kanji.


        };

        return {
            find: find,
            findHardKanji: findHardKanji,
            calculateDifficulty: calculateDifficulty
        };
    });
})();
