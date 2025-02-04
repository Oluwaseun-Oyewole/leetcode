// Given an array of numbers sorted in ascending order and a target sum, find a pair in the array whose sum is equal to the given target. If no such pair exists return [-1, -1].
// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

function total_sum(arr: number[], target: number) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    const current_sum = arr[left] + arr[right];
    if (current_sum === target) {
      return [left, right];
    } else if (current_sum > target) right--;
    else if (current_sum < target) left++;
  }
  return [-1, -1];
}
