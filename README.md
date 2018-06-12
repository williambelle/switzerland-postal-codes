Switzerland Postal Codes
========================

[![Build Status][travis-image]][travis-url]
[![Coverage Status][coverage-image]][coverage-url]
[![Dependency Status][daviddm-image]][daviddm-url]
[![NPM version][npm-image]][npm-url]
[![Bower version][bower-image]][bower-url]

Switzerland postal codes Javascript module

Usage
-----

### npm

```bash
$ npm install switzerland-postal-codes
```

Then you can `require('switzerland-postal-codes')`.

```js
var postalCodes = require('switzerland-postal-codes');

console.log(postalCodes['1260']);
//=> 'Nyon'
```

### Bower

```bash
$ bower install switzerland-postal-codes
```

Then use `dist/postal-codes.json` or `dist/postal-codes-full.json` in your HTML.

### Download

Download `postal-codes.json` or `postal-codes-full.json` from the  [Github Release pages](https://github.com/williambelle/switzerland-postal-codes/releases)

Demo
----

See the [demo](https://williambelle.github.io/switzerland-postal-codes/).

Build
-----

You need Node.js, then `cd` into this folder and

```bash
$ npm install
$ ./src/converter.js
```

Data
----

  - Postal codes based on the [official postal codes database][1] from Swiss Post
  - Geolocation based on the [Geonames database][2] licensed under a [Creative
    Commons Attribution 3.0 License][3].

License
-------

The MIT License (MIT)

[1]: https://www.post.ch/en/business/a-z-of-subjects/maintaining-customer-addresses/address-master-data
[2]: http://www.geonames.org/
[3]: http://creativecommons.org/licenses/by/3.0/
[npm-image]: https://img.shields.io/npm/v/switzerland-postal-codes.svg
[npm-url]: https://www.npmjs.com/package/switzerland-postal-codes
[bower-image]: https://img.shields.io/bower/v/switzerland-postal-codes.svg
[bower-url]: http://bower.io/search/?q=switzerland-postal-codes
[travis-image]: https://travis-ci.org/williambelle/switzerland-postal-codes.svg?branch=master
[travis-url]: https://travis-ci.org/williambelle/switzerland-postal-codes
[coverage-image]: https://coveralls.io/repos/github/williambelle/switzerland-postal-codes/badge.svg
[coverage-url]: https://coveralls.io/github/williambelle/switzerland-postal-codes
[daviddm-image]: https://david-dm.org/williambelle/switzerland-postal-codes/status.svg
[daviddm-url]: https://david-dm.org/williambelle/switzerland-postal-codes
