// You are given two strings word1 and word2.
// Merge the strings by adding letters in alternating order,
// starting with word1. If a string is longer than the other,
// append the additional letters onto the end of the merged string.

// Return the merged string.

export default function mergeAlternately(word1: string, word2: string): string {
  let mergedString = "";
  for (let index = 0; index < Math.max(word1.length, word2.length); index++) {
    if (index < word1.length) mergedString += word1[index];
    if (index < word2.length) mergedString += word2[index];
  }
  return mergedString;
}
