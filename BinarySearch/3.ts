// You are given an array of characters letters that is sorted in non-decreasing order, and a character target.
// There are at least two different characters in letters.

// Return the smallest character in letters that is lexicographically greater than target.
// If such a character does not exist, return the first character in letters.

export default function nextGreatestLetter(
  letters: string[],
  target: string
): string {
  if (target >= letters[letters.length - 1]) return letters[0];

  let low = 0;
  let high = letters.length - 1;
  while (low < high) {
    const mid = Math.floor(low + (high - low) / 2);
    if (letters[mid] > target) high = mid;
    else low = mid + 1;
  }
  return letters[low];
}

console.log(nextGreatestLetter(["c", "f", "j"], "g"));
