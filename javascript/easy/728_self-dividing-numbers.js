/**
A self-dividing number is a number that is divisible by every digit it contains.

For example, 128 is a self-dividing number because 128 % 1 == 0, 128 % 2 == 0, and 128 % 8 == 0.
A self-dividing number is not allowed to contain the digit zero.

Given two integers left and right, return a list of all the self-dividing numbers in the range [left, right].
 */

var selfDividingNumbers = function (left, right) {
  var result = [];
  for (var i = left; i <= right; i++) {
    var number = i;
    if (isSelfDeviding(number)) {
      result.push(number);
    }
  }
  return result;
};

var isSelfDeviding = function (number) {
  var copy = number;
  while (copy !== 0) {
    var remainder = copy % 10;
    var devisor = Math.floor(copy / 10);
    if (remainder === 0 || number % remainder !== 0) {
      return false;
    }
    copy = devisor;
  }
  return true;
};

console.log(selfDividingNumbers(1, 22));

// Expected : [1,2,3,4,5,6,7,8,9,11,12,15,22]
