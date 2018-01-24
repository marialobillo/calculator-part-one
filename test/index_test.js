const assert = require('assert');
const Calculate =  require('../index.js')


describe('Calculate', () => {

  describe('.add', () => {

    it('returns the value of two numbers added together', () => {
      const expect = Calculate.add(2,4);
      result = 6;
      assert.equal(expect, result);
    });
  });

  describe('.subtract', () => {
    it('returns the difference of the first number minus the second number', () => {
      const expect = Calculate.subtract(6,4);
      result = 2;
      assert.equal(expect, result);
    });
  });
});
