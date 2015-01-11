'use strict';
(function () {
    angular.module('japaneseHelperApp').factory('kanjiItemService', function ($localForage) {

        return function (kanji, keyword) {

            this.equals = function (item) {
                if (this.kanji === item.kanji &&
                    this.keyword === item.keyword) {
                    return true;
                }

                return false;
            };

            this.correct = function () {
                var key = this.kanji + 'C';
                this.update(key);
            };

            this.incorrect = function () {
                var key = this.kanji + 'I';
                this.update(key);
            };

            //TODO: make private method
            this.update = function (key) {
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

            this.kanji = kanji;
            this.keyword = keyword;
        }
    });
})();
