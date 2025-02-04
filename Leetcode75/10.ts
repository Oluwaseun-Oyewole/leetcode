// Given an array of numbers sorted in ascending order and a target sum, find a pair in the array whose sum is equal to the given target. If no such pair exists return [-1, -1].
// Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target.

// Input: [1, 2, 3, 4, 6], target=6
// Output: [1, 3]
// Explanation: The numbers at index 1 and 3 add up to 6: 2+4=6

function array_square(arr: number[]) {
  let left_pointer = 0;
  let right_pointer = arr.length - 1;
  let highIndex = arr.length - 1;

  const squares = new Array(arr.length);

  while (left_pointer <= right_pointer) {
    const left_sum = arr[left_pointer] * arr[left_pointer];
    const right_sum = arr[right_pointer] * arr[right_pointer];

    if (left_sum > right_sum) {
      squares[highIndex] = left_sum;
      left_pointer++;
    } else {
      squares[highIndex] = right_sum;
      right_pointer--;
    }
    highIndex--;
  }
  return squares;
}
