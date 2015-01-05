'use strict';
describe('Service: level-generator-service', function () {
    var mySvc;
    //var kanjiItemSvc;
    var mockKanjiSetService;


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

            var kanjiHelper = { RtkList: { Length: 12 }, KanjiKeywordList: {} };
            kanjiHelper.RtkList.GetById = function () { return '1' };
            kanjiHelper.KanjiKeywordList.Get = function () { return '1' };
            provide.value('kanjiHelper', kanjiHelper);

            var kanjiItemService = function () { this.x = 2; };
            provide.value('kanjiItemService', kanjiItemService);

            mockKanjiSetService = jasmine.createSpy('mockKanjiSetService');
            provide.value('kanjiSetService', mockKanjiSetService);
        });

        // Inject the code under test
        _inject();
    }

    beforeEach(function () {
        // Load the service's module
        module('japaneseHelperApp');
    });

    describe('generate()', function () {
        beforeEach(function () {
            // Inject with expected values
            _setup();
        });

        it('should generate correct number of kanji for level 1', function () {
            var kanjiSet = mySvc.generate(1);

            expect(mockKanjiSetService.mostRecentCall.args[0].length).toEqual(5);
        });

        it('should generate correct number of kanji for level 2', function () {
            var kanjiSet = mySvc.generate(2);

            expect(mockKanjiSetService.mostRecentCall.args[0].length).toEqual(5);
        });

        it('should generate correct number of kanji for last level', function () {
            var kanjiSet = mySvc.generate(3);

            expect(mockKanjiSetService.mostRecentCall.args[0].length).toEqual(2);
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
