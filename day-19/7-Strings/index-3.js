/* # Task 3

Write a `searchWord` function to find a word within a string. Count found word(s)

Also add type checks and throw an error if params are not strings

```javascript
searchWord('The quick brown fox', 'fox'); // "'fox' was found 1 times."
searchWord('aa, bb, cc, dd, aa', 'aa'); // "'aa' was found 2 times."
``` */
const str = 'aa, bb, cc, dd, aa';
const checker = 'aa';
function searchWord(str, checker) {
  try {
    if (typeof str !== 'string' || typeof checker !== 'string') {
      throw new Error('Param is not a string');
    }
    let counter = 0;
    str
      .replace(/\s/g, ',')
      .split(',')
      .forEach((a) => {
        checker == a ? counter++ : '';
      });
    return `${checker} was found ${counter} times`;
  } catch (e) {
    console.log(e);
  }
}

console.log(searchWord(str, checker));
