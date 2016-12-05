
var expect = require('chai').expect;
const insertionMethod = require('./insertionsort');


describe('Array', function() {
  describe('#indexOf()', function() {
    it('should sort the array', function() {
        var array = [5,6,7,14,3,1,8,11];

        var sorted
        expect(insertionMethod(array)).to.deep.equal([1,3,5,6,7,8,11,14]);
    });
  });
});
