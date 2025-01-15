// Given a string s, reverse only all the vowels in the string and return it.

// The vowels are 'a', 'e', 'i', 'o', and 'u',
// and they can appear in both lower and upper cases, more than once.
function reverseVowels(s: string): string {
  let vowels = new Set(["e", "a", "i", "o", "u", "A", "E", "I", "O", "U"]);
  const string = s.split("");
  let left = 0;
  let right = string.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(string[left])) {
      left++;
    }

    while (left < right && !vowels.has(string[right])) {
      right--;
    }
    [string[left], string[right]] = [string[right], string[left]];
    left++;
    right--;
  }

  return string.join("");
}

console.log(reverseVowels("IceCreAm"));
