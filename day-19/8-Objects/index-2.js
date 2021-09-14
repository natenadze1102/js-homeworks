/* # Task 2

Update previous 'readingStatus(books)' function and add logic into it: if book is read by the author, display how many days ago he finished it.

*You may fing this resource helpful https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date*

- Use object getter method name it 'daysAgo' and return string: `{x} days ago`

Result should be:
    'Bill have read The Road Ahead book {x} days ago'
    'Steve have read Walter Isaacson book {x} days ago'
    'Jhon haven't read The Hunger Games book yet'
 */

var Books = [
  {
    author: 'Bill',
    title: 'The Road Ahead',
    haveRead: true,
    dateOfRead: new Date(2020, 10, 10),
  },
  {
    author: 'Steve',
    title: 'Walter Isaacson',
    haveRead: true,
    dateOfRead: new Date(2020, 10, 5),
  },
  {
    author: 'Jhon',
    title: 'The Hunger Games',
    haveRead: false,
    dateOfRead: NaN,
  },
];

function readingStatus(Books) {
  Books.forEach((item) => {
    let read = item.haveRead
      ? `have read ${item.title} book`
      : `haven't read ${item.title} book yet`;
    console.log(`${item.author} ${read}`);
  });
}

readingStatus(Books);
let date1 = new Date(2020, 10, 5);
console.log(date1);
let date2 = new Date();
let diff = date2 - date1;

let days = Math.ceil(diff / 1000 / 60 / 60 / 24);

console.log(days);
