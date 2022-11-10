/*
    Given a sorted array of distinct integers and a target value, return the index if the target is found. 
    If not, return the index where it would be if it were inserted in order.
*/

var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[0] > target) {
      return 0;
    }
    if (nums[i] === target) {
      return i;
    } else {
      if (nums[nums.length - 1] < target) {
        return nums.length;
      } else if (nums[i] <= target && nums[i + 1] >= target) {
        return i + 1;
      }
    }
  }
};

console.log(searchInsert([1, 3, 5, 6], 7));

// Expected : 4
