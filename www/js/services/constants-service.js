'use strict';

(function () {
    angular.module('japaneseHelperApp').factory('constantsService', function () {
        return {
            KANJI_PER_LEVEL: 10,
            STARTING_HEALTH: 2,
            MAX_HEALTH: 6
        };
    });
})();
