/* You have number `n=1000`. Divide it by 2 as many times as long as the result of the division is greater than 50. What is the number? Count the number of iterations required for this (iteration is a loop pass), and write it to the variable `num`. Show the result to console. */

let n = 1000;
let limit;
let num = 0;

while (n / 2 > 50) {
  n /= 2;
  num += 1;
  limit = n;
}

console.log(n);
console.log(limit);
