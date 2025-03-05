// Find Non-Duplicate Number Instances (easy)
// Problem Statement

// Given an array of sorted numbers, move all non-duplicate number instances at the beginning of the array in-place. The non-duplicate numbers should be sorted and you should not use any extra space so that the solution has constant space complexity i.e.,

// .

// Move all the unique number instances at the beginning of the array and after moving return the length of the subarray that has no duplicate in it.

// Example 1:

// Input: [2, 3, 3, 3, 6, 9, 9]
// Output: 4
// Explanation: The first four elements after moving element will be [2, 3, 6, 9].

// Example 2:

// Input: [2, 2, 2, 11]
// Output: 2
// Explanation: The first two elements after moving elements will be [2, 11].

// Constraints:

//     1 <= nums.length <= 3 * 104
//     -100 <= nums[i] <= 100
//     nums is sorted in non-decreasing order.

function findNonDuplicate(arr) {
  let nextDuplicate = 0;
  let firstIndex = 1;

  while (firstIndex < arr.length) {
    if (arr[nextDuplicate] !== arr[firstIndex]) {
      nextDuplicate++;
      arr[nextDuplicate] = arr[firstIndex];
    }
    firstIndex++;
  }
  return nextDuplicate + 1;
}

const array = [1, 2, 3, 3, 3, 4, 4, 5, 6, 6];
const length = findNonDuplicate(array);
console.log("length", length);
console.log(array.slice(0, length));
