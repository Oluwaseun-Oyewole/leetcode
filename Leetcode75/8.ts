// Given an integer array nums,
// return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].
// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
// You must write an algorithm that runs in O(n) time and without using the division operation.

export default function productExceptSelf(nums: number[]): number[] {
  const n = nums.length;
  const answer = new Array(n).fill(1);

  let prefix = 1;
  for (let i = 0; i < n; i++) {
    console.log("pre", prefix);
    answer[i] = prefix;
    prefix *= nums[i];
  }

  // Compute the suffix product for each element
  let suffix = 1;
  for (let i = n - 1; i >= 0; i--) {
    console.log("suffix", suffix);
    answer[i] *= suffix;
    suffix *= nums[i];
  }

  return answer;
}

function productExcept(nums: number[]) {
  const n = nums.length;
  const ans = new Array(n).fill(0);
  let product = 1;
  let zeros = 0;

  for (const num of nums) {
    if (num === 0) {
      zeros++;
      continue;
    }
    product *= num;

    if (zeros === 1) {
      for (let index = 0; index < n; index++) {
        ans[index] = nums[index] === 0 ? product : 0;
      }
    }
  }

  console.log("product", product);
  console.log("zero", zeros);
  return product;
}

console.log(productExcept([1, 2, 0, 3, 4]));
