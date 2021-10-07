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
  salary: 5000, // required field with type number
};

const id = db.create(person);
const id1 = db.create(person1);

const customer = db.read(id);
const customer2 = db.read(id1);

db.update(id, { age: 25, name: 'Pat', country: 'ru' }); // id

db.delete(id); // true

const customers = db.readAll();
console.log(customers);
