/*
    Given an array nums of size n, return the majority element.

    The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.
 */

var majorityElement = function (nums) {
  if (nums.length <= 2) {
    return nums[0];
  }

  let arr = [1];

  nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    if (arr.length > nums.length / 2) {
      return arr[1];
    }

    if (nums[i] === nums[i + 1]) {
      arr.push(nums[i]);
    } else {
      arr = [1];
    }
  }
};

console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));

// Expected : 2
