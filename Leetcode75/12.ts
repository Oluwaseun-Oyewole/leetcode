// Given an array of unsorted numbers, find all unique triplets in it that add up to zero.

// Example 1:

// Input: [-3, 0, 1, 2, -1, 1, -2]
// Output: [[-3, 1, 2], [-2, 0, 2], [-2, 1, 1], [-1, 0, 1]]
// Explanation: There are four unique triplets whose sum is equal to zero.

function findTriplets(arr: number[]) {
  arr.sort((a, b) => a - b);
  const triplets: number[][] = [];
  const arr_length = arr.length;
}
