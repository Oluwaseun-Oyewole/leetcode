// shallow copy/clone creates a new object or array but it also copies the
// reference to the nested object or array within th original. This means that changes in the nested object will affect
// the original and vice versa because they both reference the same memory location

// Deep copy/clone is the opposite.

// Example of shallow copy
const bio_date = {
  name: "Seun",
  age: 100,
  address: { city: "Lagos" },
};

const shallowCopy = { ...bio_date };
shallowCopy.age = 102;
shallowCopy.name = "Samuel";
shallowCopy.address.city = "New York";

// Example for deep copy. This approach is nice for simple objects. Do not use with circular reference objects
const deep_copy = JSON.parse(JSON.stringify(bio_date));

// Implement a deepClone function that performs a deep clone operation on JavaScript objects.
// You can assume the input only contains JSON-serializable values (null, boolean, number, string, Array, Object)
// and will not contain any other objects like Date, Regex, Map or Set.
function deep_copy(obj) {
  if (typeof obj !== "object" || obj === null) return obj;
  const clone = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      clone[key] = deep_copy(obj[key]);
    }
  }
  return clone;
}

// Implement a function deepEqual that performs a deep comparison between two values. It returns true if two input values are deemed equal, and returns false if not.

// You can assume there are only JSON-serializable values (numbers, strings, boolean, null, objects, arrays).
// There wouldn't be cyclic objects, i.e. objects with circular references.

export default function deepEqual(a, b) {
  // If both are not objects, perform a simple comparison
  if (
    typeof a !== "object" ||
    typeof b !== "object" ||
    a === null ||
    b === null
  ) {
    return a === b;
  }

  // If one is an array and the other is not, they are not equal
  if (Array.isArray(a) !== Array.isArray(b)) {
    return false;
  }

  // If both are arrays, compare them element by element
  if (Array.isArray(a)) {
    if (a.length !== b.length) {
      return false;
    }
    for (let i = 0; i < a.length; i++) {
      if (!deepEqual(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }

  // If both are objects, compare their properties
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  for (let key in a) {
    if (!(key in b) || !deepEqual(a[key], b[key])) {
      return false;
    }
  }
  return true;
}
