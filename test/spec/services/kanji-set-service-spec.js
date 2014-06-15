'use strict';
// JavaScript
describe('Service: kanji-set-service', function () {
    var mySvc;
    var kanjiItemSvc;

    // Use to provide any mocks needed
    function _provide(callback) {
        // Execute callback with $provide
        module(function ($provide) {
            callback($provide);
        });
    }

    // Use to inject the code under test
    function _inject() {
        inject(function (kanjiSetService, kanjiItemService) {
            mySvc = kanjiSetService;
            kanjiItemSvc = kanjiItemService;
        });
    }

    // Call this before each test, except where you are testing for errors
    function _setup() {
        // Mock any expected data
        _provide(function (provide) {
            provide.value('myVal', {});
        });

        // Inject the code under test
        _inject();
    }

    beforeEach(function () {
        // Load the service's module
        module('japaneseHelperApp');
    });

    describe('init()', function () {
        beforeEach(function () {
            // Inject with expected values
            _setup();
        });

        it('should throw error for empty kanjiItemsArray array', function () {
            try {
                var svc = new mySvc([]);
            }
            catch (e) {
                expect(e.error).toEqual("KanjiSetService must take in a nonempty array");
            }
        });

        it('should throw error for when kanjiItemsArray is not an array', function () {
            try {
                var svc = new mySvc("abc");
            }
            catch (e) {
                expect(e.error).toEqual("KanjiSetService must take in a nonempty array");
            }
        });

    });

    describe('getNext()', function () {
        beforeEach(function () {
            // Inject with expected values
            _setup();
        });

        it('should return 10 kanji in the same order as kanjiItemsArray', function () {

            var kanjiItemsArray = ['ABC', 'か', '今', '最', '近', '奈', '良', '肉', '僕', 'ト'];
            var svc = new mySvc(kanjiItemsArray);
            
            var newArray = [];

            var i = 0;
            while (i < kanjiItemsArray.length) {
                newArray.push(svc.getNext());
                i++;
            }

            expect(newArray).toEqual(kanjiItemsArray);
        });

        it('should return 5 kanji in the same order as kanjiItemsArray', function () {

            var kanjiItemsArray = [new kanjiItemSvc('今', 'now'),
                new kanjiItemSvc('良', 'good'),
                new kanjiItemSvc('肉', 'meat'),
                new kanjiItemSvc('僕', 'me'),
                new kanjiItemSvc('最', 'recently')];

            var svc = new mySvc(kanjiItemsArray);

            var newArray = [];

            var i = 0;
            while (i < kanjiItemsArray.length) {
                newArray.push(svc.getNext());
                i++;
            }

            var j = 0;
            while (j < kanjiItemsArray.length) {
                expect(newArray[j].kanji).toEqual(kanjiItemsArray[j].kanji);
                expect(newArray[j].keyword).toEqual(kanjiItemsArray[j].keyword);
                j++;
            }

        });


        it('should error out when called twice if you have only one element', function () {

            var kanjiItemsArray = ['one'];
            var svc = new mySvc(kanjiItemsArray);
            svc.getNext();

            try {
                svc.getNext();
            }
            catch (e) {
                expect(e.error).toEqual("Cannot get next: exceeded bounds of the array");
            }
        });

    });

    describe('getRandomOption()', function () {
        beforeEach(function () {
            // Inject with expected values
            _setup();
        });

        it('should fail when called before calling getNext()', function () {

            var kanjiItemsArray = ['ABC', 'か', '今'];
            var svc = new mySvc(kanjiItemsArray);

            try {
                svc.getRandomOption();
            }
            catch (e) {
                expect(e.error).toEqual("Call getNext() at least once before calling getRandomOption()");
            }
        });


        it('should get random options after you call getNext() first', function () {

            var kanjiItemsArray = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];
            var expectedArray = ['2', '3', '4', '5', '6', '7', '8', '9', '10'];

            var svc = new mySvc(kanjiItemsArray);
            svc.getNext();

            var newArray = [];

            var i = 0;
            while (i < expectedArray.length) {
                newArray.push(svc.getRandomOption());
                i++;
            }

            newArray.sort();
            expectedArray.sort();

            expect(newArray).toEqual(expectedArray);
        });

        it('should err out when getting too many random options', function () {

            var kanjiItemsArray = ['1', '2', '3'];
            var expectedArray = ['2', '3'];

            var svc = new mySvc(kanjiItemsArray);
            svc.getNext();

            var newArray = [];

            svc.getRandomOption();
            svc.getRandomOption();

            try {
                svc.getRandomOption();
            }
            catch (e) {
                expect(e.error).toEqual("Exhausted all random options.");
            }

        });

    });
});
