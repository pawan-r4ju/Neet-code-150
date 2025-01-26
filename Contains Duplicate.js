/*Contains Duplicate
Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

Example 1:

Input: nums = [1, 2, 3, 3]

Output: true

Example 2:

Input: nums = [1, 2, 3, 4]

Output: false*/

function containDuplicates(arr) {
  let hashMap = {};
  for (let elem of arr) {
    if (elem in hashMap) {
      return true;
    } else {
      hashMap[elem] = 1;
    }
  }
  return false;
}

console.log(containDuplicates([1, 2, 3, 3])); // Output: true
console.log(containDuplicates([1, 2, 3, 4])); // Output: false
