// Problem Statement

// Given an array of numbers sorted in ascending order and a target sum, find a pair in the array whose sum is equal to the given target.
// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.
// If no such pair exists return [-1, -1].

Input: [1, 2, 3, 4, 6], (target = 6);
Output: [1, 3];
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

Input: [2, 5, 9, 11], (target = 11);
Output: [0, 2];
// Explanation: The numbers at index 0 and 2 add up to 11: 2+9=11

// Constraints:
// 2 <= arr.length <= 104
// -109 <= arr[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.

function pairTargetSum(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const currentSum = arr[left] + arr[right];
    if (currentSum === target) return [left, right];
    if (target > currentSum) {
      left++;
    } else {
      right--;
    }
  }
  return [-1, -1];
}

// Analyzing the time complexity
// Initialization is O(1) as it involves assigning values from left and right

//  The while loop runs as long as left is less than right.
//  In the worst case, this loop iterates over all elements of the array once. This happens when no pair is found, or the pair is found at the extreme ends of the array.
//  Each iteration involves a constant amount of work: calculating currentSum, comparing it with targetSum, and then incrementing left or decrementing right.
// Therefore, the loop runs in
// time, where is the number of elements in the array.

// Space Complexity

//     The algorithm uses a fixed amount of extra space: variables left, right, and currentSum.
//     It does not depend on the size of the input array, as no additional data structures are used that grow with the input size.
//     Thus, the space complexity is

//     , constant space.

// In summary, the algorithm has a time complexity of
// and a space complexity of O(1) .
