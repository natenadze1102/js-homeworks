/* # Task 2

You have price as string: `"$120"`.

The first character is the currency, then the number.

Write function `extractCurrencyValue(source)` that will allocate a numeric value from such a string, in this case 120.

Pay attention that it is necessary to return not string 120, need to return the number 120!

If first parameter isn't string - throw error.

```javascript
extractCurrencyValue('$120'); // 120
``` */

const currencyValue = '$120';
function extractCurrencyValue(source) {
  try {
    if (typeof source !== 'string') {
      throw new Error(`Parameter isn't string`);
    }
    return +source.replace(/[\W]/, '');
  } catch (e) {
    return +source.replace(/[\W]/, '');
  }
}

console.log(extractCurrencyValue(currencyValue));
