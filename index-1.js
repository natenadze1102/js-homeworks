/* You have array `[2, 5, 9, 15, 0, 4]`. Using loop `for` and operator `if`, show in console, elements which great than 3, but less than 10.
 */

const arr = [2, 5, 9, 15, 0, 4];

for (elem in arr) {
  if (elem > 3 && elem < 10) console.log(elem);
}
