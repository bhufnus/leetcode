/* 
Given an integer x, return true if x is a palindrome, and false otherwise.
/*

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let text = x.toString();
  let forwardHalf = [];
  let backHalf = [];
  let i = 0;
  let j = text.length - 1;
  while (i < text.length) {
    forwardHalf.push(text[i]);
    i++;
  }
  while (j >= 0) {
    backHalf.push(text[j]);
    j--;
  }

  if (forwardHalf.toString() === backHalf.toString()) {
    return true;
  } else {
    return false;
  }
};

console.log(isPalindrome(121));

// Expected : true
