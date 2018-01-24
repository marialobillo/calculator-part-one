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

  describe('.multiply', () => {
    it('returns the product of two numbers', () => {
      const expect = Calculate.multiply(2,4);
      result = 8;
      assert.equal(expect, result);
    });
  });

  describe('divide', () => {
    it('returns the first number divided by the second number', () => {
      const expect = Calculate.divide(10,5);
      result = 2;
      assert.equal(expect, result);
    });

    it('throws an error when the divisor is 0', () => {
      //const expect = Calculate.divide(8,0);
      //result = RangeError;
      //assert.throws(function() { throw new Error("Wrong value"); }, Error);
    });
  });

  describe('absoluteValue', () => {
    it('returns the absolute value of the input number', () => {
      const expect = Calculate.absoluteValue(-5);
      result = 5;
      assert.equal(result, expect);
    });
  });

});
