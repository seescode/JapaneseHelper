'use strict';

(function () {
    angular.module('japaneseHelperApp').factory('constantsService', function () {
        return {
            KANJI_PER_LEVEL: 25,
            STARTING_HEALTH: 3,
            MAX_HEALTH: 5
        };
    });
})();
