'use strict';

var should = require('chai').should();
var nodeCodes = require('../dist-node/index.js');
var jsonCodes = require('../dist/postal-codes.json');

var codes = [nodeCodes, jsonCodes];

describe('switzerland-postal-code', function () {
  it('should return a location', function () {
    codes.forEach(function (item) {
      var cologny = item['1223'];
      cologny.should.equal('Cologny');
    });
  });

  it('should return a composed location', function () {
    codes.forEach(function (item) {
      var miesTannay = item['1295'];
      miesTannay.should.equal('Mies - Tannay');
    });
  });

  it('should return undefined', function () {
    codes.forEach(function (item) {
      var notDefined = item['10000'];
      should.equal(notDefined, undefined);
    });
  });

  it('should contains at least 3000 items', function () {
    codes.forEach(function (item) {
      var enoughLocation = Object.keys(item).length > 3000;
      enoughLocation.should.equal(true);
    });
  });
});
