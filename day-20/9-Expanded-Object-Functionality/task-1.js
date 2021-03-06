('use strict');

const data = {
  name: 'fred',
  age: 10,
  contact: {
    email: 'moo@example.com',
    meta: {
      verified: true,
      tags: ['important'],
    },
  },
};

Object.defineProperty(Object.prototype, 'mergeDeepRight', {
  value: function (obj) {
    for (let prop in obj) {
      if (Array.isArray(obj[prop])) {
        if (prop in this) {
          console.log(prop);
          this[prop] = obj[prop].concat(this[prop]);
        } else {
          this[prop] = obj[prop];
        }
      } else if (typeof obj[prop] === 'object') {
        if (!(prop in this)) {
          this[prop] = {};
        }
        this[prop].mergeDeepRight(obj[prop]);
      } else {
        this[prop] = obj[prop];
      }
    }
  },
  writable: true,
  configurable: true,
});

data.mergeDeepRight({
  age: 40,
  contact: {
    email: 'baa@example.com',
    favorite: true,
    meta: {
      tags: ['vip'],
    },
  },
});

data.contact = Object.fromEntries(
  Object.entries(data.contact).sort((a, b) => {
    if (b[0] > a[0]) {
      return -1;
    } else {
      return 1;
    }
  })
);

console.log(data);
