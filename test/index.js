var isostring = require('..')
  , should    = require('should');


describe('isostring', function () {
  it('should validate invalid dates', function () {
    isostring('2012-12-30').should.be.ok;
    isostring('2012-12-30T20:10').should.be.ok;
    isostring('2012-12-30T20:12Z').should.be.ok;
    isostring('2012-12-30T20:12:22').should.be.ok;
    isostring('2012-12-30T20:12:22+01:00').should.be.ok;
    isostring('2012-12-30T20:12:22-05:00').should.be.ok;
    isostring('2012-12-30T20:12:22.222').should.be.ok;
    isostring('2012-12-30T20:12:22.222Z').should.be.ok;
    isostring('2012-12-30T20:12:22.222222').should.be.ok;
    isostring('2012-12-30T20:12:22.222').should.be.ok;
  });

  it('should not validate ambiguous or invalid dates', function () {
    isostring('2012').should.not.be.ok;
    isostring('2012-12').should.not.be.ok;
    isostring('2012-12-30T').should.not.be.ok;
    isostring('2012-12-30T10').should.not.be.ok;
  });
});