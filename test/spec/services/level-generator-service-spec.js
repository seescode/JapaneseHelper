'use strict';
describe('Service: level-generator-service', function () {
    var mySvc;
    //var kanjiItemSvc;

    // Use to provide any mocks needed
    function _provide(callback) {
        // Execute callback with $provide
        module(function ($provide) {
            callback($provide);
        });
    }

    // Use to inject the code under test
    function _inject() {
        inject(function (levelGeneratorService) {
            mySvc = levelGeneratorService;
        });
    }

    // Call this before each test, except where you are testing for errors
    function _setup() {
        // Mock any expected data
        _provide(function (provide) {
            provide.value('constantsService', { KANJI_PER_LEVEL: 5 });

            var kanjiHelper = { RtkList: { Length: 12 } };
            provide.value('kanjiHelper', kanjiHelper);

        });

        // Inject the code under test
        _inject();
    }

    beforeEach(function () {
        // Load the service's module
        module('japaneseHelperApp');
    });

    xdescribe('generate()', function () {
        beforeEach(function () {
            // Inject with expected values
            _setup();
        });

        it('should return correct kanji for level 1', function () {
            var kanjiSet = mySvc.generate(1);

            expect(range.beginIndex).toEqual(0);
            expect(range.endIndex).toEqual(4);
        });

        it('should return correct kanji for level 2', function () {
            var kanjiSet = mySvc.generate(2);

            expect(range.beginIndex).toEqual(5);
            expect(range.endIndex).toEqual(9);
        });

        it('should return correct kanji for last level', function () {
            var kanjiSet = mySvc.generate(3);

            expect(range.beginIndex).toEqual(10);
            expect(range.endIndex).toEqual(11);
        });
    });

    describe('determineRtkRange()', function () {
        beforeEach(function () {
            // Inject with expected values
            _setup();
        });

        it('should throw error for level 0', function () {
            try {
                mySvc.determineRtkRange(0);
            }
            catch (e) {
                expect(e.error).toEqual("Level must be >= 1");
            }
        });

        it('should calculate range correctly for level 1', function () {
            var range = mySvc.determineRtkRange(1);

            expect(range.beginIndex).toEqual(0);
            expect(range.endIndex).toEqual(4);
        });

        it('should calculate range correctly for level 2', function () {
            var range = mySvc.determineRtkRange(2);

            expect(range.beginIndex).toEqual(5);
            expect(range.endIndex).toEqual(9);
        });

        it('should calculate range correctly for last level', function () {
            var range = mySvc.determineRtkRange(3);

            expect(range.beginIndex).toEqual(10);
            expect(range.endIndex).toEqual(11);
        });

        it('should throw error for nonexistent level', function () {
            try {
                mySvc.determineRtkRange(4);
            }
            catch (e) {
                expect(e.error).toEqual("Level 4 does not exist.");
            }
        });

    });


});
