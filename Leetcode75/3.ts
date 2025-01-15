// Given an integer array nums, return the greatest common divisor of the smallest number and largest number in nums.

// The greatest common divisor of two numbers is the largest positive integer that evenly divides both numbers.

function findGCD(nums: number[]): number {
  // function findMinMax(nums) {
  //     let min = nums[0];
  //     let max = nums[1];
  //     for (let index = 0; index < nums.length; index++) {
  //         if (nums[index] < min) min = nums[index];
  //         if (nums[index] > max) max = nums[index];
  //     }
  //     return { min, max };
  // }
  const min = Math.min(...nums);
  const max = Math.max(...nums);
  // const arr = findMinMax(nums);
  if (max % min === 0) return min;
  function gcd(a: number, b: number) {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  return gcd(min, max);
}

console.log(findGCD([7, 5, 6, 8, 9]));
console.log(findGCD([7, 5, 6, 8, 2]));
