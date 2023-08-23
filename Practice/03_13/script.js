import Book from "./Book.js";

const book1 = new Book(
  "Book 1",
  100,
  "Author 1",
  "Book House",
  "26 Decmeber 2023",
  2023
);

const book2 = new Book(
  "Book 2",
  100,
  "Author 2",
  "Book House",
  "26 Decmeber 2023",
  2023
);

const book3 = new Book(
  "Book 3",
  100,
  "Author 3",
  "Book House",
  "26 Decmeber 2023",
  2023
);

const book4 = new Book(
  "Book 4",
  100,
  "Author 4",
  "Book House",
  "26 Decmeber 2023",
  "2023"
);

const book5 = new Book(
  "Book 5",
  100,
  "Author 5",
  "Book House",
  "26 Decmeber 2023",
  2023
);

console.log("this is book one", book1);
book1.changeAuthor("New Author");
console.log("Updating the author name");
console.log("this is book one", book1);

console.log("this is book two", book2);
book2.updatePageCount(105);
console.log("Updating the page count");
console.log("this is book two", book2);

console.log("this is book three", book3);
book3.changeName("New Book");
console.log("Updating the book name");
console.log("this is book three", book3);

console.log("this is book four before", book4);
//Getting the old object data by coping it to json object
console.log("this is book four before", JSON.parse(JSON.stringify(book4)));
book4.updateEdition(2025);
console.log("Updating the Edition");
console.log("this is book four after", book4);

console.log("this is book five", book5);
book5.updateEdition(2025);
console.log("Updating the published date");
console.log("this is book five", book5);
