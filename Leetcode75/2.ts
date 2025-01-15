// For two strings s and t, we say "t divides s" if and only if s = t + t + t + ... + t + t
// (i.e., t is concatenated with itself one or more times).
// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 !== str2 + str1) return "";
  const recursiveEuclidean = (a: number, b: number) => {
    if (b === 0) return a;
    return recursiveEuclidean(b, a % b);
  };
  const gcdLength = recursiveEuclidean(str1.length, str2.length);
  return str1.substring(0, gcdLength);
}

// console.log(gcdOfStrings("ABCABC", "ABC"));
// console.log(gcdOfStrings("ABABAB", "ABAB"));
