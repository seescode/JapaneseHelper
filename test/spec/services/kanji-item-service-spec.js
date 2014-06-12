'use strict';
// JavaScript
describe('Service: kanji-item-service', function () {
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
        inject(function (kanjiItemService) {
            mySvc = kanjiItemService;
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

        it('should set kanji correctly', function () {            
            var svc = new mySvc('kan', 'key');

            expect(svc.kanji).toEqual("kan");
        });

        it('should set keyword correctly', function () {
            var svc = new mySvc('kan', 'key');

            expect(svc.keyword).toEqual("key");
        });

    });

    describe('equals()', function () {
        beforeEach(function () {
            // Inject with expected values
            _setup();
        });

        it('should return true when both kanji items are the same', function () {

            var svc1 = new mySvc('今', 'now');
            var svc2 = new mySvc('今', 'now');

            expect(svc1.equals(svc2)).toEqual(true);
            expect(svc2.equals(svc1)).toEqual(true);
        });

        it('should return false when the kanji differ', function () {

            var svc1 = new mySvc('今', 'now');
            var svc2 = new mySvc('日', 'now');

            expect(svc1.equals(svc2)).toEqual(false);
            expect(svc2.equals(svc1)).toEqual(false);
        });

        it('should return false when the keyword differ', function () {

            var svc1 = new mySvc('今', 'now');
            var svc2 = new mySvc('今', 'day');

            expect(svc1.equals(svc2)).toEqual(false);
            expect(svc2.equals(svc1)).toEqual(false);
        });

    });
});
