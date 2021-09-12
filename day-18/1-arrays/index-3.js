/* Task 3

Create function `rotate`, which will rotate array based on given parameters.

params:
  array - required - target
  number - required - count(how many times) to rotate array
  string - optional - rotate direction: left or right. defualt is right

- function should contain checks:
  - first parameter required and has to be only array
  - second parameter required and has to be number
  - third parameter optional and has to be only string

- creating new array is not allowed

javascript
const arr = [1,2,3];
rotate(arr, 1, 'left');  // result: [2,3,1]
rotate(arr, 1);  // result: [3,1,2]
rotate(arr, 2);  // result: [2,3,1]
*/
const arr = [1, 2, 3];

function rotate(arr, nTimes) {
  try {
    if (!Array.isArray(arr)) {
      throw new Error('first Parameter has to be array!');
    } else if (typeof nTimes !== 'number') {
      throw new Error('second Parameter has to be number!');
    } else if (typeof rotateTo !== 'string') {
      throw new Error('third Parameter has to be string!');
    }

    while (nTimes) {
      let targetItem;

      if (rotateTo === 'right') {
        targetItem = arr.pop();
        arr.unshift(targetItem);
      } else if (rotateTo === 'left') {
        targetItem = arr.shift();
        arr.push(targetItem);
      }
      nTimes--;
    }

    return arr;
  } catch (e) {
    console.error(`${e.name}: ${e.message}`);
  }
}

console.log(rotate(arr, 1, (rotateTo = 'left')));
