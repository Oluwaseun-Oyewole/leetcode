// classnames is a commonly-used utility in modern front end applications to conditionally join CSS
// class names together. If you've written React applications,
// you likely have used a similar library.

// Implement the classnames function.

export default function classNames(...args) {
  const classes = [];
  args.forEach((arg) => {
    if (!arg) return;
    const argTye = typeof arg;
    if (argTye === "string" || argTye === "number") {
      classes.push(String(arg));
    } else {
      if (Array.isArray(arg)) {
        return classes.push(classNames(...arg));
      }
      if (argTye === "object") {
        for (let key in arg) {
          if (arg.hasOwnProperty(key) && arg[key]) {
            classes.push(key);
          }
        }
      }
    }
  });

  return classes.join(" ");
}

// console.log("PPP", classNames("foo", { bar: false }));
// console.log("testing", classNames(["foo", "bar", "baz"]));
console.log(
  "Freedom",
  classNames(null, false, "bar", undefined, 0, 1, { baz: null }, "")
);

console.log("PPP", classNames("foo", { bar: false }));
console.log("testing", classNames(["foo", "bar", "baz"]));
