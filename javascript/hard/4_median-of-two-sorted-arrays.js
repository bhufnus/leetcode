/**
    Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

    The overall run time complexity should be O(log (m+n)).
 */

var findMedianSortedArrays = function (nums1, nums2) {
  nums1.push(...nums2);
  nums1.sort(function (a, b) {
    return a - b;
  });
  if (nums1.length % 2 === 0) {
    let midpoint = nums1.length / 2 - 1;
    return (nums1[midpoint] + nums1[midpoint + 1]) / 2;
  } else {
    let midpoint = nums1.length / 2 - 0.5;
    return nums1[midpoint];
  }
};

console.log(findMedianSortedArrays([1, 3], [2]));

// Expected: 2.00000
