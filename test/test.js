(function(){
  'use strict';

  var should = require("chai").should();
  var codes = require("../dist-node/index.js");

  describe('swizerland-postal-code', function(){
    it("should return a location", function(){
      var cologny = codes['1223'];
      cologny.should.equal('Cologny');
    });

    it("should contains at least 350 items", function(){
      var enoughLocation = Object.keys(codes).length > 350;
      enoughLocation.should.equal(true);
    });
  });
})();
