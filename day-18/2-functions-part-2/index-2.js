/*Task 2

Write your own implementation of function `compose`. Function is waiting for unlimited list of parameters. Each parameter has to be function. Each function is waiting for 1 parameter. Function `compose` returns another function with one parameter.

Main idea of function `compose` is `compose(f, g)(x) = f(g(x))`

Example:

compose((str) => {
    return str + 'c';
}, (str) => {
    return str + 'b';
})('a'); // 'abc' */

function reverseString(str) {
  return str.split('').reverse().join('');
}

function compose(...functions) {
  let string = '';
  let f;
  for (f of functions) {
    string += f((string = ''));
  }

  return function (str) {
    return reverseString(string + str);
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
