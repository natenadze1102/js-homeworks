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
}

const db = new DB();

const person1 = {
  name: 'Pitter', // required field with type string
  age: 21, // required field with type number
  country: 'ge', // required field with type string
  salary: 500, // required field with type number
};

const person2 = {
  name: 'Gio', // required field with type string
  age: 22, // required field with type number
  country: 'uk', // required field with type string
  salary: 5000, // required field with type number
};

const id1 = db.create(person1);
const id2 = db.create(person2);

const customer1 = db.read(id1);
const customer2 = db.read(id2);
console.log(customer1);
console.log(customer2);

db.update(id1, { age: 25, name: 'Pat', country: 'bel' }); // id
db.delete(id1); // true

const customers = db.readAll();
console.log(customers);
