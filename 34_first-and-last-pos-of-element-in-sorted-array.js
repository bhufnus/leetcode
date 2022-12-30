/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  if (!nums.length) {
    return [-1, -1];
  }

  let positionCount = 0;
  let positions = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== target) {
      positionCount++;
    } else {
      positions.push(positionCount);
      positionCount++;
    }
  }
  console.log(positions);
  if (!positions.length) {
    return [-1, -1];
  } else if (positions.length === 1) {
    return [positions[0], positions[0]];
  } else {
    return [positions[0], positions[positions.length - 1]];
  }
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8));

// Expected: [3,4]
