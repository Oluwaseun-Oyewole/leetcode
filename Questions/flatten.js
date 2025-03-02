// Implement a function flatten that returns a newly-created array with all sub-array
// elements concatenated recursively into a single level. Use Javascript

// test cases
function flatten(values) {
  let result = [];

  for (let element of values) {
    if (Array.isArray(element)) {
      result = result.concat(flatten(element));
    } else result.push(element);
  }
  return result;
}

flatten([1, 2, 3]); // [1, 2, 3]

// Inner arrays are flattened into a single level.
flatten([1, [2, 3]]); // [1, 2, 3]
flatten([
  [1, 2],
  [3, 4],
]); // [1, 2, 3, 4]

// Flattens recursively.
flatten([1, [2, [3, [4, [5]]]]]);

// Flatten execution with closure and IFEE
function flattenWithClosure(arr) {
  let result = [];
  return (() => {
    for (let element of arr) {
      if (Array.isArray(element)) {
        result = result.concat(flatten(element));
      } else result.push(element);
    }
    return result;
  })();
}

function flattenWithReduceClosure(arr) {
  return (() =>
    arr.reduce(
      (acc, currentValue) =>
        acc.concat(
          Array.isArray(currentValue)
            ? flattenWithReduceClosure(currentValue)
            : currentValue
        ),
      []
    ))();
}
