'use strict';
// JavaScript
describe('Service: hard-kanji-finder-service', function () {
    var mySvc;

    // Use to provide any mocks needed
    function _provide(callback) {
        // Execute callback with $provide
        module(function ($provide) {
            callback($provide);
        });
    }

    // Use to inject the code under test
    function _inject() {
        inject(function (hardKanjiFinderService) {
            mySvc = hardKanjiFinderService;
        });
    }

    // Call this before each test, except where you are testing for errors
    function _setup() {
        // Mock any expected data
        _provide(function (provide) {
            //provide.value('$localForage', );


        });

        // Inject the code under test
        _inject();
    }

    beforeEach(function () {
        // Load the service's module
        module('japaneseHelperApp');
    });

    xdescribe('find()', function () {
        beforeEach(function () {
            // Inject with expected values
            _setup();
        });

        it('should return [] for find(0)', function () {

            var result = mySvc.find(0);
            expect(result.length).toEqual(0);
        });

        it('should return the most difficult kanji for find(1)', function () {

            var result = mySvc.find(1);
            expect(result[0].keyword).toEqual('fire');
        });

        it('should return only one result for find(1)', function () {

            var result = mySvc.find(1);
            expect(result.length).toEqual(1);
        });

        it('should return the most difficult kanji for find(1)', function () {

            var result = mySvc.find(1);
            expect(result[0].keyword).toEqual('fire');
        });

    });

    describe('findHardKanji()', function () {
        beforeEach(function () {
            // Inject with expected values
            _setup();
        });

        it('should return [] for findHardKanji()', function () {

            var result = mySvc.findHardKanji();
            expect(result.length).toEqual(0);
        });

        it('should return no items when passing along a kanji item with no incorrects.', function () {

            var result = mySvc.find(1);
            expect(result[0].keyword).toEqual('fire');
        });

        it('should return only one result for find(1)', function () {

            var result = mySvc.find(1);
            expect(result.length).toEqual(1);
        });

        it('should return the most difficult kanji for find(1)', function () {

            var result = mySvc.find(1);
            expect(result[0].keyword).toEqual('fire');
        });

    });

});
