/*Task 2

Write your own implementation of function `compose`. Function is waiting for unlimited list of parameters. Each parameter has to be function. Each function is waiting for 1 parameter. Function `compose` returns another function with one parameter.

Main idea of function `compose` is `compose(f, g)(x) = f(g(x))`

Example:

compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a'); // 'abc' */

function compose(...functions) {
  const arr = [];

  for (f of functions) {
    f();
  }

  return function (str) {
    for (let f of functions) {
      arr.unshift(f(str));
    }

    return arr
      .join('')
      .split('')
      .filter((item, index, array) => array.indexOf(item) === index)
      .sort()
      .join('');
  };
}

console.log(
  compose(
    (str) => {
      return str + 'c';
    },
    (str) => {
      return str + 'b';
    }
  )('a')
);
