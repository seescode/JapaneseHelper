'use strict';
(function () {
    angular.module('japaneseHelperApp').factory('kanjiItemService', function ($localForage) {

        return function (kanji, keyword) {

            var update = function (key) {
                $localForage.getItem(key).then(function (data) {
                    var existingVal = data;

                    if (existingVal == null) {
                        $localForage.setItem(key, '1').then(function () {
                        });
                    }
                    else {
                        var incremented = parseInt(existingVal) + 1;

                        $localForage.setItem(key, String(incremented)).then(function () {
                        });
                    }
                }, function (error) {
                    console.error(error);
                });
            }

            var equals = function (item) {
                if (kanji === item.kanji &&
                    keyword === item.keyword) {
                    return true;
                }

                return false;
            };

            var correct = function () {
                var key = kanji + 'C';  //TODO: move to function or some shared area since this is duplicated.
                update(key);
            };

            var incorrect = function () {
                var key = kanji + 'I';
                update(key);
            };

            var getTotalCorrect = function () {
                var key = kanji + 'C';

                return $localForage.getItem(key);
            };

            var getTotalIncorrect = function () {
                var key = kanji + 'I';

                return $localForage.getItem(key);
            };

            return {
                equals: equals,
                correct: correct,
                incorrect: incorrect,
                getTotalCorrect: getTotalCorrect,
                getTotalIncorrect: getTotalIncorrect,
                kanji: kanji,
                keyword: keyword
            };
        }
    });
})();
