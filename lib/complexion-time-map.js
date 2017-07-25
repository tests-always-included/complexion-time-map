/**
 * Profile your Complexion library to improve performance.
 *
 * Usage:
 *
 * var complexion, yourTokenizer;
 * complexion = require('complexion');
 * require('complexion-time-map')(complexion);
 * yourTokenizer = require('complexion-js');
 * complexion.initialize(jsPlugin());
 * complexion.tokenize(' ... your text ... ');
 * complexion.timeMap.log();
 *
 * For more information about the timeMap object, look at the time-map project
 * in NPM.
 */
/* global exports, require */
// fid-umd {"name":"complexionTimeMap","depends":[{"name":"TimeMap","commonjs":"time-map","nodejs":"time-map"}]}
"use strict";
(function (name, root, factory) {
    /**
     * Determine if something is an object.
     *
     * @param {*} x
     * @return {boolean}
     */
    function isObject(x) {
        return typeof x === "object";
    }

    if (isObject(module) && isObject(module.exports)) {
        module.exports = factory(require("time-map"));
    } else if (isObject(exports)) {
        exports[name] = factory(require("time-map"));
    } else if (isObject(root.define) && root.define.amd) {
        root.define(name, ["TimeMap"], factory);
    } else if (isObject(root.modulejs)) {
        root.modulejs.define(name, ["TimeMap"], factory);
    } else if (isObject(root.YUI)) {
        root.YUI.add(name, function (Y) {
            Y[name] = factory(Y.TimeMap);
        }, "", {
            requires: ["TimeMap"]
        });
    } else {
        root[name] = factory(root.TimeMap);
    }
}("complexionTimeMap", this, function (TimeMap) { // eslint-disable-line no-invalid-this
    // fid-umd end

    /**
     * Add an instance of TimeMap to Complexion.  This will help you profile
     * the code and ensure the tokenization process is as fast as possible.
     *
     * @param {Complexion} complexion
     */
    return function (complexion) {
        var defineToken;

        complexion.timeMap = new TimeMap();
        defineToken = complexion.defineToken;
        complexion.defineToken = function (tokenName, matcher) {
            matcher = complexion.timeMap.wrapFunction(matcher, tokenName);

            return defineToken.call(complexion, tokenName, matcher);
        };
    };

    // fid-umd post
}));
// fid-umd post-end
