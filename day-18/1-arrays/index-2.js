/* Task 2

Create function `reverse`, that gets array as parameter and returns array in opposite order.

Function should contain next checks:

- First parameter required and has to be only array
- Throw error if passed empty array
- Creating new array is not allowed
- Using Array.reverse is not allowed

javascript
const arr = [3,2,1];
reverse(arr); // [1,2,3]
 */

const arr = ['Gio', 'Dato', 'Levani'];

function reverse(array) {
  try {
    if (array.length === 0) throw new Error('array should not be empty');
    else {
      return array.sort((a, b) => {
        if (typeof a === 'string' && typeof b === 'string') {
          return b > a ? 1 : -1;
        } else {
          return b - a;
        }
      });
    }
  } catch (e) {
    console.log(e);
  }
}
console.log(reverse(arr));
