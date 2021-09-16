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

const arr = [3, 2, 1];

function reverse(array) {
  try {
    if (array.length === 0) throw new Error('array should not be empty');
    else {
      for (var i = 0; i <= Math.floor((arr.length - 1) / 2); i++) {
        let el = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = el;
    }
    return arr;
    }
  } catch (e) {
    console.log(e);
  }
}
console.log(reverse(arr));
