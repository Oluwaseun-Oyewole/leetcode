// Given an input string s, reverse the order of the words.
// A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.
// Return a string of the words in reverse order concatenated by a single space.
// Note that s may contain leading or trailing spaces or multiple spaces between two words.
// The returned string should only have a single space separating the words. Do not include any extra spaces.

// O(n) implementation
function reverseWords(s: string): string {
  const str = s.trim().split(/\s+/);
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    [str[left], str[right]] = [str[right], str[left]];
    left++;
    right--;
  }
  return str.join(" ");

  //   Alternative solution with reduce O(n)
  //   s.split(" ").reduce((a, c, index) => {
  //     if (c === "") return a;
  //     if (index === 0 || a === "") return c;
  //     return `${c} ${a}`;
  //   }, "")
}

console.log(reverseWords("  hello world  "));
console.log(reverseWords("a good   example"));
