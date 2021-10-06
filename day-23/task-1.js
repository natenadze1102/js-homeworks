class DB {
  constructor() {}
  create(obj) {
    let id = 0;
    if (typeof obj !== 'object') {
      throw new Error('Parameter type must be an object');
    }
    const user = new Map();
    user.set(id, obj);
    id++;
    return user;
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
  name: 'Pitter', // required field with type string
  age: 22, // required field with type number
  country: 'ge', // required field with type string
  salary: 500, // required field with type number
};

const id = db.create(person);
const id2 = db.create(person);
console.log(id);
