'use strict';

const should = require('chai').should();
const nodeCodes = require('../dist-node/index.js');
const jsonCodes = require('../dist/postal-codes.json');

const codes = [nodeCodes, jsonCodes];

describe('switzerland-postal-code', function () {
  it('should return a location', function () {
    codes.forEach(function (item) {
      const cologny = item['1223'];
      cologny.should.equal('Cologny');
    });
  });

  it('should return a composed location', function () {
    codes.forEach(function (item) {
      const miesTannay = item['1295'];
      miesTannay.should.equal('Mies - Tannay');
    });
  });

  it('should return undefined', function () {
    codes.forEach(function (item) {
      const notDefined = item['10000'];
      should.equal(notDefined, undefined);
    });
  });

  it('should contains at least 3000 items', function () {
    codes.forEach(function (item) {
      const enoughLocation = Object.keys(item).length > 3000;
      enoughLocation.should.equal(true);
    });
  });
});
