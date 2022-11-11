/*
    Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

    You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

var singleNumber = function (nums) {
  if (nums.length === 1) {
    return nums[0];
  }

  nums.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i + 1]) {
      i++;
    } else {
      return nums[i];
    }
  }
};

console.log(singleNumber([4, 1, 2, 1, 2]));

// Expected : 4
