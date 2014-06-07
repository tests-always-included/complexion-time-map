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
/*global exports, module, require*/
// fid-umd {"depends":[{"name":"TimeMap","commonjs":"time-map"}],"jslint":1,"name":"complexionTimeMap"}
/*global define, YUI*/
(function (n, r, f) {
    "use strict";
    try { module.exports = f(require("time-map")); return; } catch (ignore) {}
    try { exports[n] = f(require("time-map")); return; } catch (ignore) {}
    try { return define.amd && define(n, ["TimeMap"], f); } catch (ignore) {}
    try { return YUI.add(n, function (Y) { Y[n] = f(Y.TimeMap); }, "", { requires: ["TimeMap"] }); } catch (ignore) {}
    try { r[n] = f(r.TimeMap); return; } catch (ignore) {}
    throw new Error("Unable to export " + n);
}("complexionTimeMap", this, function (TimeMap) {
    "use strict";
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
