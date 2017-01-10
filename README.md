Complexion Time Map
===================

Want to see if your tokenizer can be tweaked?  This library will provide profiling per [time-map].

[![npm version][npm-badge]][npm-link]
[![Build Status][travis-badge]][travis-link]
[![Dependencies][dependencies-badge]][dependencies-link]
[![Dev Dependencies][devdependencies-badge]][devdependencies-link]


What Does This Do?
------------------

It extends [Complexion] and gives you detailed timing about the methods being called for your tokenizer.  This way one is able to more easily determine the slowest portions or what gets called the most so you can optimize code.


Usage
-----

Install the code using `npm`, `bower` or possibly just clone the repository.  Then, use the library in your JavaScript.  There is UMD markup (via [FidUmd]) that should make this library available under any module system that you prefer to use.

Next, you add this between creating an instance of Complexion and where you add your tokens.

    var Complexion = require('complexion');
    var instance = new Complexion();
    require('complexion-time-map')(instance);  // This is it
    require('your-library-goes-here')(instance);
    instance.tokenize(' ... your text ... ');
    instance.timeMap.log();

For more information on what the `timeMap` property does, see the [time-map] project documentation.


Development
-----------

If you want to work on this library, you need to check out the repository and run `npm install` to get the dependencies.

Tests are *always* included.  Make sure tests cover your changes.  To run the current tests, just use `npm test` or `grunt test` (they will run the same test suite).


License
-------

This software is licensed under an [MIT license with an additional non-advertising clause](LICENSE.md).

[Complexion]: https://github.com/tests-always-included/complexion
[dependencies-badge]: https://img.shields.io/david/tests-always-included/complexion-time-map.svg
[dependencies-link]: https://david-dm.org/tests-always-included/complexion-time-map
[devdependencies-badge]: https://img.shields.io/david/dev/tests-always-included/complexion-time-map.svg
[devdependencies-link]: https://david-dm.org/tests-always-included/complexion-time-map#info=devDependencies
[FidUmd]: https://github.com/fidian/fid-umd/
[LICENSE]: LICENSE.md
[npm-badge]: https://img.shields.io/npm/v/complexion-time-map.svg
[npm-link]: https://npmjs.org/package/complexion-time-map
[time-map]: https://github.com/tests-always-included/time-map
[travis-badge]: https://img.shields.io/travis/tests-always-included/complexion-time-map/master.svg
[travis-link]: http://travis-ci.org/tests-always-included/complexion-time-map
