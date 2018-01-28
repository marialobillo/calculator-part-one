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
    if(divisor === 0) {
      throw new Error('the quotient of a number and 0 is undefined');
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

  exponential(base, exponent){
    return base**exponent;
  },

  max(inputArray){
    const arrayLength = inputArray.length;
    if(arrayLength == 0) { return 'empty array'; }

    let maxNumber = inputArray[0];

    for(let i = 1; i < arrayLength; i++){
      let currentNumber = inputArray[i];

      if(maxNumber < currentNumber){
        maxNumber = currentNumber;
      }
    }
    return maxNumber;
  },

  min(inputArray){
    const arrayLength = inputArray.length;
    if(arrayLength == 0) {return 'empty array'; }

    let minNumber = inputArray[0];
    for(let i = 1; i < arrayLength; i++){
      let currentNumber = inputArray[i];
      if(minNumber > currentNumber){
        minNumber = currentNumber;
      }
    }
    return minNumber;
  },


}

module.exports = Calculate;
