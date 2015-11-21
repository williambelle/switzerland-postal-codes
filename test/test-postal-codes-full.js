(function(){
  'use strict';

  var should = require("chai").should();
  var codes  = require("../dist/postal-codes-full.json");

  describe('postal-codes-full.json', function(){
    it('should return a list of just 1 location', function(){
      var list      = codes['1223'];
      var length    = list.length;
      var cologny   = list[0].name;
      var canton    = list[0].canton;
      var latitude  = list[0].latitude;
      var longitude = list[0].longitude;

      length.should.equal(1);
      cologny.should.equal('Cologny');
      canton.should.equal('GE');
      latitude.should.equal('46.2183');
      longitude.should.equal('6.1871');
    });

    it('should return a list of multiple location', function(){
      var list      = codes['1290'];
      var length    = list.length;
      var versoix   = list[0].name;
      var chavannes = list[1].name;
      var versCant  = list[0].canton;
      var chavCant  = list[1].canton;

      length.should.equal(2);
      versoix.should.equal('Versoix');
      chavannes.should.equal('Chavannes-des-Bois');
      versCant.should.equal('GE');
      chavCant.should.equal('VD');
    });

    it('should return undefined', function(){
      var notDefined = codes['10000'];
      should.equal(notDefined, undefined);
    });

    it('should contains at least 3000 items', function(){
      var enoughLocation = Object.keys(codes).length > 3000;
      enoughLocation.should.equal(true);
    });
  });
})();
