class Book {
  constructor(name, pages, author, publication, datePublished, bookEdition) {
    this.name = name;
    this.pages = pages;
    this.author = author;
    this.publication = publication;
    this.datePublished = datePublished;
    this.bookEdition = bookEdition;
  }
  changeAuthor(authorName) {
    this.author = authorName;
  }
  changeName(bookName) {
    this.name = bookName;
  }
  updatePageCount(pages) {
    this.pages = pages;
  }
  updateEdition(newEdition) {
    this.bookEdition = newEdition;
  }
  changeDatePublished(date) {
    this.datePublished = date;
  }
}

export default Book;
