/**
    You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have.
    Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

    Letters are case sensitive, so "a" is considered a different type of stone from "A".
 */

var numJewelsInStones = function (jewels, stones) {
  let total = 0;
  let jewelArr = jewels.split("");

  for (let i = 0; i < stones.length; i++) {
    for (let j = 0; j < jewelArr.length; j++) {
      if (stones[i] === jewelArr[j]) {
        total++;
      }
    }
  }
  return total;
};

console.log(numJewelsInStones("aA", "aAAbbbb"));

// Expected : 3
