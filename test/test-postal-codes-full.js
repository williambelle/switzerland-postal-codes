'use strict';

const should = require('chai').should();
const codes = require('../dist/postal-codes-full.json');

describe('postal-codes-full.json', function () {
  it('should return a list of just 1 location', function () {
    const list = codes['1223'];
    const length = list.length;
    const cologny = list[0].name;
    const canton = list[0].canton;
    const latitude = list[0].latitude;
    const longitude = list[0].longitude;

    length.should.equal(1);
    cologny.should.equal('Cologny');
    canton.should.equal('GE');
    latitude.should.equal('46.2183');
    longitude.should.equal('6.1871');
  });

  it('should return a list of multiple location', function () {
    const list = codes['1290'];
    const length = list.length;
    const versoix = list[0].name;
    const chavannes = list[1].name;
    const versCant = list[0].canton;
    const chavCant = list[1].canton;

    length.should.equal(2);
    versoix.should.equal('Versoix');
    chavannes.should.equal('Chavannes-des-Bois');
    versCant.should.equal('GE');
    chavCant.should.equal('VD');
  });

  it('should return undefined', function () {
    const notDefined = codes['10000'];
    should.equal(notDefined, undefined);
  });

  it('should contains at least 3000 items', function () {
    const enoughLocation = Object.keys(codes).length > 3000;
    enoughLocation.should.equal(true);
  });
});
