/** A: Debounce decorator. */
function debounce(func, timeout) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), timeout);
  };
}
