/* 
Given a roman numeral, convert it to an integer.
/*

/**
 * @param {string} s
 * @return {number}
 */

const romanMap = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

var romanToInt = function (s) {
  let total = 0;
  for (let i = 0; i < s.length; i++) {
    let currentNumeral = s[i];
    let nextNumeral = s[i + 1];
    if (romanMap.get(currentNumeral) < romanMap.get(nextNumeral)) {
      total += romanMap.get(nextNumeral) - romanMap.get(currentNumeral);
      i += 1;
    } else {
      total += romanMap.get(currentNumeral);
    }
  }
  return total;
};

console.log(romanToInt("MCMXCIV"));

// Expected : 1994
