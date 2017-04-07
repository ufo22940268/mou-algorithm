const lib = require('../lib');
const expect = require('chai').expect;

describe('mou card game', function () {
  
  let cardCases = [];
  
  beforeEach(function() {
    cardCases.push([1, 3, 3, 7, 10]);
    cardCases.push([9, 3, 5, 7, 9]);
    cardCases.push([9, 6, 5, 2, 9]);
  });
  
  it("should eval niu level", function() {
    expect(lib.slow(cardCases[0])).to.equal(4);
    expect(lib.slow(cardCases[1])).to.equal(0);
    expect(lib.slow(cardCases[2])).to.equal(1);
  })
});
