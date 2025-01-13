// Given an array of integers nums which is sorted in ascending order,
// and an integer target, write a function to search target in nums.
// If target exists, then return its index. Otherwise, return -1.
// You must write an algorithm with O(log n) runtime complexity.

// Example 1:
// Input: nums = [-1,0,3,5,9,12], target = 9
// Output: 4
// Explanation: 9 exists in nums and its index is 4

// Example 2:
// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1b
// Explanation: 2 does not exist in nums so return -1

// time complexity - O(log n)
export default function binary_search(arr: number[], target: number) {
  let low = 0;
  let high = arr.length;
  do {
    const mid = Math.floor(low + (high - low) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) high = mid;
    else low = mid + 1;
  } while (low < high);
  return -1;
}

console.log(binary_search([-1, 0, 3, 5, 9, 12], 2));
