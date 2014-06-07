/*global beforeEach, describe, expect, it, require, spyOn*/

(function () {
    'use strict';

    var Complexion, complexionTimeMap;

    Complexion = require('complexion');
    complexionTimeMap = require('../');

    describe('initialization', function () {
        it('initializes without errors', function () {
            var complexion;
            complexion = new Complexion();
            complexionTimeMap(complexion);
            expect(typeof complexion.timeMap).toBe('object');
        });
    });
    describe('timing', function () {
        var complexion;

        beforeEach(function () {
            complexion = new Complexion();
            complexionTimeMap(complexion);
        });
        it('times added matchers', function () {
            complexion.defineToken('DOT', complexion.matchString('.'));
            complexion.defineToken('COMMA', complexion.matchString(','));
            expect(complexion.timeMap.profiles[0].calls).toBe(0);
            expect(complexion.timeMap.profiles[1].calls).toBe(0);
            complexion.tokenize('.,');
            expect(complexion.timeMap.profiles[0].calls).toBe(2);
            expect(complexion.timeMap.profiles[1].calls).toBe(1);
        });
    });
}());
