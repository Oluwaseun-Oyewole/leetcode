const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

function countOccurrence(arr) {
  return (() => {
    return arr.reduce((acc, current) => {
      acc[current] = (acc[current] || 0) + 1;
      return acc;
    }, {});
  })();
}

function countingOccurrenceIterative(arr) {
  const count = {};
  for (let element of fruits) {
    count[element] = (count[element] || 0) + 1;
  }
  return count;
}

const students = [
  { name: "Alice", grade: "A" },
  { name: "Bob", grade: "B" },
  { name: "Charlie", grade: "A" },
];

function mergeStudent(arr) {
  return (() => {
    return arr.reduce((acc, student) => {
      acc[student.grade] = acc[student.grade] || [];
      acc[student.grade].push(student.name);
      return acc;
    }, {});
  })();
}
