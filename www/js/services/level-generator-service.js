'use strict';
(function () {
    angular.module('japaneseHelperApp').factory('levelGeneratorService', function (kanjiSetService, kanjiItemService, constantsService, kanjiHelper) {

        var generate = function (level) {

            var rtkRange = determineRtkRange(level);
            var i = rtkRange.beginIndex;

            var kanjiItemsArray = [];

            //Fill up the kanjiItemsArray
            while (i <= rtkRange.endIndex) {
                var kanji = kanjiHelper.RtkList.GetById(i);
                var keyword = kanjiHelper.KanjiKeywordList.Get(kanji);
                var item = new kanjiItemService(kanji, keyword);

                kanjiItemsArray.push(item);
                i++;
            }

            return new kanjiSetService(kanjiItemsArray);
        },

        determineRtkRange = function (level) {

            if (level <= 0) {
                throw {
                    error: "Level must be >= 1"
                };
            }

            var beginIndex = level * constantsService.KANJI_PER_LEVEL - constantsService.KANJI_PER_LEVEL;
            var endIndex = level * constantsService.KANJI_PER_LEVEL - 1;

            if (beginIndex > kanjiHelper.RtkList.Length - 1) {
                throw {
                    error: "Level " + level + " does not exist."
                };
            }

            if (endIndex > kanjiHelper.RtkList.Length - 1) {
                endIndex = kanjiHelper.RtkList.Length - 1;
            }

            return {
                beginIndex: beginIndex,
                endIndex: endIndex
            };
        };


        return {
            generate: generate,
            determineRtkRange: determineRtkRange
        };
    });
})();
