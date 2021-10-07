class DB {
  customers = new Map();
  gen = function () {
    return '_' + Math.random().toString(36).substr(2, 9);
  };
  unicKey;

  create(obj) {
    if (typeof obj !== 'object')
      throw new Error('Parameter type must be an Object');

    let randomIdGenerator = this.gen();
    this.customers.set(randomIdGenerator, obj).forEach((_, key) => {
      this.unicKey = key;
    });

    return this.unicKey;
  }

  read(id) {
    if (!arguments.length) {
      throw new Error('Parameter must not be empty!');
    } else if (typeof id != 'string') {
      throw new Error('Parameter type must be a String');
    } else if (!this.customers.has(id)) {
      return null;
    }

    let currentCollection = Array.from(this.customers.entries()).filter(
      (collection) => collection[0] === id
    );
    return Object.fromEntries(new Map(currentCollection));
  }

  readAll() {
    if (arguments.length) throw new Error('Using parameters is forbidden');
    return [...this.customers.values()];
  }

  update(id, obj) {
    if (arguments.length !== 2) {
      throw new Error('2 arguments are required to use');
    } else if (!this.customers.has(id)) {
      throw new Error('non-existing id is passed');
    } else if (typeof id !== 'string') {
      throw new Error('id type has to be a string');
    }

    for (let [key, value] of Object.entries(obj)) {
      this.customers.get(id)[key] = value;
    }
    return this.customers.get(id);
  }

  delete(id) {
    if (!id || !this.customers.has(id))
      throw new Error('non-existent or invalid id');
    return this.customers.delete(id);
  }

  find(query) {
    return customers.filter((arr) => {
      return (
        arr.name === query.name &&
        arr.country === query.country &&
        ((arr.age >= query.age.min && arr.age <= query.age.max) ||
          (arr.age >= query.age.min && !query.age.max) ||
          (arr.age <= query.age.max && !query.age.min)) &&
        ((arr.salary >= query.salary.min && arr.salary <= query.salary.max) ||
          (arr.salary >= query.salary.min && !query.salary.max) ||
          (arr.salary <= query.salary.max && !query.salary.min))
      );
    });
  }
}

const db = new DB();

const person1 = {
  name: 'Pitter', // required field with type string
  age: 21, // required field with type number
  country: 'ua', // required field with type string
  salary: 500, // required field with type number
};

const person2 = {
  name: 'Gio', // required field with type string
  age: 22, // required field with type number
  country: 'uk', // required field with type string
  salary: 450, // required field with type number
};

const person3 = {
  name: 'Dato', // required field with type string
  age: 29, // required field with type number
  country: 'ge', // required field with type string
  salary: 4000, // required field with type number
};

const person4 = {
  name: 'Guram', // required field with type string
  age: 18, // required field with type number
  country: 'en', // required field with type string
  salary: 490, // required field with type number
};

const id1 = db.create(person1);
const id2 = db.create(person2);
const id3 = db.create(person3);
const id4 = db.create(person4);

const customer = db.read(id1);
const customer2 = db.read(id2);
const customer3 = db.read(id3);

const customers = db.readAll();

const query = {
  country: 'ua',
  name: 'Pitter',
  age: {
    min: 21,
    max: 29,
  },
  salary: {
    min: 300,
    max: 9000,
  },
};

const filtered = db.find(query);
console.log(filtered);
