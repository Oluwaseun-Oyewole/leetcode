// Debouncing is a technique used to control how many times we allow a function to be executed over time.
// When a JavaScript function is debounced with a wait time of X milliseconds,
// it must wait until after X milliseconds have elapsed since the debounced function was last called.
// You almost certainly have encountered debouncing in your daily lives before — when entering an elevator.
// Only after X duration of not pressing the "Door open" button (the debounced function not being called)
// will the elevator door actually close (the callback function is executed).

// Implement a debounce function which accepts a callback function and a wait duration. Calling debounce()
// returns a function which has debounced invocations of the callback  function following the behavior described above.

// Follow Up
// Debounce with a cancel() method to cancel delayed invocations and a flush() method to immediately invoke them.
// Implement throttle, which is similar to debounce but a little different.

function debounce(func, wait) {
  let timeout;
  let thisContext;
  let currentArgs;

  const debounced = function (...args) {
    currentArgs = args;
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(thisContext, [...currentArgs]), wait);
  };

  debounced.cancel = function () {
    clearTimeout(timeout);
    timeout = null;
  };

  debounced.flush = function () {
    if (timeout) {
      clearTimeout(timeout);
      func.call(thisContext, currentArgs);
    }
  };

  return debounced;
}
