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
      var miesTannay = codes['1295'];
      miesTannay.should.equal('Mies - Tannay');
    });

    it("should contains at least 3000 items", function(){
      var enoughLocation = Object.keys(codes).length > 3000;
      enoughLocation.should.equal(true);
    });
  });
})();
