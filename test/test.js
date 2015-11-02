(function(){
  'use strict';

  var should = require("chai").should();
  var codes = require("../dist-node/index.js");

  describe('switzerland-postal-code', function(){
    it("should return a location", function(){
      var cologny = codes['1223'];
      cologny.should.equal('Cologny');
    });

    it("should return a composed location", function(){
      var cologny = codes['1295'];
      cologny.should.equal('Mies - Tannay');
    });

    it("should contains at least 650 items", function(){
      var enoughLocation = Object.keys(codes).length > 650;
      enoughLocation.should.equal(true);
    });
  });
})();
