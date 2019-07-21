Contributing
============

Welcome, so you are thinking about contributing?
Awesome, this a great place to start.

Setup
-----

```bash
git clone git@github.com:williambelle/switzerland-postal-codes.git
cd switzerland-postal-codes
npm i
```

Build
-----

```bash
./src/converter.js
```

Test
----

```bash
npm t
```

Code coverage:

```bash
npm run coverage
```

Release
-------

1. Bump the correct version (`npm version [<newversion> | major | minor | patch]`)
1. Update the file [CHANGELOG.md](CHANGELOG.md)
1. Create the tag (`git tag -a v<version> -m "Tagging the v<version> release"`)
1. Publish with `npm publish`

License
-------

The MIT License (MIT)

See the [LICENSE](LICENSE) file for more details.
