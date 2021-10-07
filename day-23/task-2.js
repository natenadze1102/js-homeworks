/* Improve `DB` class from previous task.

- Add a `find` method that will return an array of users that satisfy the condition passed as a parameter.
- Generate an error if the `query` is not valid.
- The fields `name` and` country` are looking for a 100% match.
- The fields `age` and` salary` accept an object in which there must be either 2 parameters `min` and` max` or at least one of them.
- Return an empty array if it was not possible to find users that satisfy the request object.

```javascript
const query = {
    country: 'ua',
    age: {
        min: 21
    },
    salary: {
        min: 300,
        max: 600
    }
};
const customers = db.find(query); // array of users */
class DB {
  users = new Map();
  gen = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  unicKey;

  create(obj) {
    if (typeof obj !== 'object')
      throw new Error('Parameter type must be an Object');

    let randomIdGenerator = this.gen();
    this.users.set(randomIdGenerator, obj).forEach((_, key) => {
      this.unicKey = key;
    });

    return this.unicKey;
  }

  read(id) {
    if (!this.users.has(id)) throw new Error('no such users');
    if (!id) throw new Error('Parameter must not be empty!');
    if (typeof id !== 'string')
      throw new Error('Parameter type must be a String');

    let currentCollection = Array.from(this.users.entries()).filter(
      (x, y, z) => x[0] === id
    );
    return Object.fromEntries(new Map(currentCollection));
  }

  readAll() {
    if (arguments.length) throw new Error('Using parameters is forbidden');
    return [...this.users.values()];
  }

  update(id, obj) {
    if (arguments.length !== 2) {
      throw new Error('2 arguments are required to use');
    } else if (!this.users.has(id)) {
      throw new Error('non-existing id is passed');
    } else if (typeof id !== 'string') {
      throw new Error('id type has to be a string');
    }

    for (let [key, value] of Object.entries(obj)) {
      this.users.get(id)[key] = value;
    }
    return this.users.get(id);
  }

  delete(id) {
    if (!id || !this.users.has(id))
      throw new Error('non-existent or invalid id');
    return this.users.delete(id);
  }

  find(query) {}
}

const db = new DB();

const person = {
  name: 'Pitter', // required field with type string
  age: 21, // required field with type number
  country: 'ge', // required field with type string
  salary: 500, // required field with type number
};

const person1 = {
  name: 'Gio', // required field with type string
  age: 22, // required field with type number
  country: 'uk', // required field with type string
  salary: 450, // required field with type number
};

const person2 = {
  name: 'Dato', // required field with type string
  age: 29, // required field with type number
  country: 'ge', // required field with type string
  salary: 4000, // required field with type number
};

const id = db.create(person);
const id1 = db.create(person1);
const id2 = db.create(person1);

const customer = db.read(id);
const customer2 = db.read(id1);
const customer3 = db.read(id1);

//db.update(id, { age: 25, name: 'Pat', country: 'ru' }); // id
// db.delete(id); // true

const customers = db.readAll();

const query = {
  country: 'ua',
  age: {
    min: 21,
  },
  salary: {
    min: 300,
    max: 600,
  },
};
customers.filter((elem, index, array) => {
  console.log(elem);
  function iterate(obj) {
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        if (elem.hasOwnProperty(prop)) console.log(prop + '!');
        if (typeof obj[prop] == 'object') {
          /* iterate(obj[prop]); */
          return obj[prop].min < elem[prop];
        } else {
          /* console.log(` ${prop} ${obj[prop]}`); */
        }
      }
    }
  }

  console.log(iterate(query));
});

/* let map = new Map(Object.entries(query));
console.log(
  map.entries().forEach(function (a, b, c) {
    console.log(a);
  })
);
 */
