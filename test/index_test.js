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
      const dividend = 8;
      const divisor = 0;
      expected = Error;
      const exercise = () => Calculate.divide(dividend, divisor);

      assert.throws(exercise, expected);
    });
  });

  describe('absoluteValue', () => {
    it('returns the absolute value of the input number', () => {
      const expect = Calculate.absoluteValue(-5);
      result = 5;
      assert.equal(result, expect);
    });
  });

  describe('.factorial', () => {
    it('return the output for 5!', () => {
      const expected = Calculate.factorial(5);
      result = 120;
      assert.equal(expected, result);
    });
    it('return the output for 4!', () => {
      const expected = Calculate.factorial(4);
      result = 24;
      assert.equal(expected, result);
    });
    it('return the 0!', () => {
      const expected = Calculate.factorial(0);
      result = 1;
      assert.equal(expected, result);
    });
  });

  describe('.exponential', () => {
    it('returns the result of a base raised to a power', () => {
      const expected = Calculate.exponential(2,3);
      result = 8;
      assert.equal(expected, result);
    });
    it('returns 1 when the exponent is 0', () => {
      const expected = Calculate.exponential(4,0);
    });
  });

  describe('.max', () => {
    it('return the maximum number in an array', () => {
      const expected = Calculate.max([3,8,6,7,11]);
      result = 11;
      assert.equal(expected, result);
    });
    it('throws an Error when the array is empty', () => {
      const inputArray = [];
      const expected = 'empty array';
      const result = Calculate.max(inputArray);

      assert.equal(expected, result);
    });
  });

  describe('.min', () => {
    it('returns the minimum number in an array', () => {
      const expected = Calculate.min([2,5,6,7,3,4]);
      result = 2;
      assert.equal(expected, result);
    });
    it('returns a messaje of empty when is empty', () => {
      const inputArray = [];
      const expected = 'empty array';
      const result = Calculate.min(inputArray);

      assert.equal(expected, result);
    });
  });

  describe('.average', () => {
    it('returns the average value of an array', () => {
      const result = Calculate.average([6,8,3,7]);
      const expected = 6
      assert.equal(expected, result);
    });
    it('returns a message when array is empty', () => {
      const result = Calculate.average([]);
      const expected = 'empty array';
      assert.equal(expected, result);
    });
  });
});
