Complexion Time Map
===================

Want to see if your tokenizer can be tweaked?  This library will provide profiling per [time-map].

[![NPM][npm-image]][NPM]
[![Build Status][travis-image]][Travis CI]
[![Dependencies][dependencies-image]][Dependencies]
[![Dev Dependencies][devdependencies-image]][Dev Dependencies]


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

Tests are *always* included.  Make sure tests cover your changes.  To run the current tests, just use `npm test` or `grunt test` (they will run the same test sute).


License
-------

This software is licensed under an [MIT license with an additional non-advertising clause](LICENSE.md).

[Complexion]: https://github.com/tests-always-included/complexion
[Dev Dependencies]: https://david-dm.org/tests-always-included/complexion-time-map#info=devDependencies
[devdependencies-image]: https://david-dm.org/tests-always-included/complexion-time-map/dev-status.png
[Dependencies]: https://david-dm.org/tests-always-included/complexion-time-map
[dependencies-image]: https://david-dm.org/tests-always-included/complexion-time-map.png
[FidUmd]: https://github.com/fidian/fid-umd/
[NPM]: https://npmjs.org/package/complexion-time-map
[npm-image]: https://nodei.co/npm/complexion-time-map.png?downloads=true&stars=true
[time-map]: https://github.com/tests-always-included/time-map
[travis-image]: https://secure.travis-ci.org/tests-always-included/complexion-time-map.png
[Travis CI]: http://travis-ci.org/tests-always-included/complexion-time-map
