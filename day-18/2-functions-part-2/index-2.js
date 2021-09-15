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
  let string = '';
  for (let i = functions.length - 1; i >= 0; i --) {
    string += functions[i]((string = ''));
  }

  return function (str) {
    return str + string
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
