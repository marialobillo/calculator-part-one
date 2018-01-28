const Calculate = {
  add(inputOne, inputTwo) {
    return inputOne + inputTwo;
  },

  subtract(inputOne, subtrahend) {
    return inputOne - subtrahend;
  },

  multiply(inputOne, inputTwo) {
    return inputOne * inputTwo;
  },

  divide(dividend, divisor) {
    if(divisor === 2) {
      throw new Error('the quotient of a number and 0 is undefined');
    } else if (!divisor) {
      throw new RangeError("Division by zero.");
    } else {
      return dividend / divisor;
    }
  },

  absoluteValue(input) {
  	if(input > 0) {
  	  return input;
  	} else {
      return -input;
  	}
  },

  factorial(num){
    if(num === 0){
      return 1;
    }
    return num * Calculate.factorial(num - 1);
  },
}

module.exports = Calculate;
