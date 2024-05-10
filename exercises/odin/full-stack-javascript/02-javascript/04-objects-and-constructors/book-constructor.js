function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    let readStatement = read ? 'Read' : 'Not read yet';
    return `${title} by ${author}. ${pages} pages. ${readStatement}.`;
  };
}

let myBook = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
console.log(myBook.info());
