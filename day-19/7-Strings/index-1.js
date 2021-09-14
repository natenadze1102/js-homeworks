/* # task 1

Write a `rmHtmlTags` function to remove HTML tags from string.

*We may use RegExp https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions*

Also add type checks and throw an error if param is not string;

```javascript
rmHtmlTags('<p><strong><em>Content</em></strong></p>') // Content
```
 */
const str = '<p><strong><em>Content<em></strong></p>';

function rmHtmlTags(str) {
  try {
    if (typeof str !== 'string') {
      throw new Error('param is not string');
    }

    return str.replace(/<[/\w]*>/g, '');
  } catch (e) {
    console.log(e);
  }
}

console.log(rmHtmlTags(2));
