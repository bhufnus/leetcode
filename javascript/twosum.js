/* Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order. */

var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    let numA = nums[i];
    for (let j = 1; j < nums.length; j++) {
      let numB = nums[j];
      if (numA + numB === target) {
        if (i !== j) {
          let answer = [i, j];
          return [i, j];
        }
      }
    }
  }
};

let nums = [2, 7, 11, 15];
let target = 9;

console.log(twoSum(nums, target));
