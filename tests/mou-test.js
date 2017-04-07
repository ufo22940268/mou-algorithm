const lib = require('../lib');
const expect = require('chai').expect;

function testAlgorithm(fn, cardCases) {
  expect(fn(cardCases[0])).to.equal(4);
  expect(fn(cardCases[1])).to.equal(0);
  expect(fn(cardCases[2])).to.equal(1);
  expect(fn(cardCases[3])).to.equal(10);
}

describe('mou card game', function () {
  
  let cardCases = [];
  
  beforeEach(function () {
    cardCases.push([1, 3, 3, 7, 10]);
    cardCases.push([9, 3, 5, 7, 9]);
    cardCases.push([9, 6, 5, 2, 9]);
    cardCases.push([10, 10, 10, 10, 10]);
  });
  
  
  it("should eval niu level with slow algorithm", function () {
    testAlgorithm(lib.slow, cardCases);
  })
  
  it("should eval niu level with faster algorithm", function () {
    testAlgorithm(lib.faster, cardCases);
  })
});
