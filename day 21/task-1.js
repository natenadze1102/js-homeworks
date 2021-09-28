/* Task 1

Implement the class **Validator**, for validating strings. This class has next methods:

- method **isEmail** that gets string as parameter and validate is it correct email or not. If it's ok, return true, otherwise false
- method **isDomain** for domain validating
- method **isDate** for date validation
- method **isPhone** for phone validation

- use Regexp for simpler validation

Example:

```javascript
var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+375 (29) 817-68-92')); // it can be format of your country
 */

class Validator {
  regexp = '';
  isEmail(str) {
    this.regexp = /^\w{2,}@\w+\.[a-z]+$/i;
    return this.regexp.test(str);
  }

  isDomain(str) {
    this.regexp = /^\w{2,}\.[a-z]+$/i;
    return this.regexp.test(str);
  }

  isDate(str) {
    this.regexp = /^\d{2}.\d{2}.\d{4}$/;
    return this.regexp.test(str);
  }

  isPhone(str) {
    this.regexp = /^[+]\d{1,3}\s?\(\d{2,3}\)\s?-?\d{2,3}\s?-\d{2}-\d{2,3}$/;
    return this.regexp.test(str);
  }
}

var validator = new Validator();

console.log(validator.isEmail('jshtml@mail.ru'));
console.log(validator.isDomain('jshtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+7 (911) 841-31-610'));
//'+XXX (XX) XXX-XX-XX'
//'+XXX (XXX)-XX-XX-XX'
//'+X (XXX) XXX-XX-XXX'
