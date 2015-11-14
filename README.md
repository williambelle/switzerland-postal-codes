Switzerland Postal Codes
========================

[![Build Status](https://travis-ci.org/williambelle/switzerland-postal-codes.svg?branch=master)](https://travis-ci.org/williambelle/switzerland-postal-codes)

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
```

### Bower

```bash
$ bower install switzerland-postal-codes
```

Then use `dist/postal-codes.json` in your HTML.

### Download

Download `postal-codes.json` from [Release](https://github.com/williambelle/switzerland-postal-codes/releases)

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
