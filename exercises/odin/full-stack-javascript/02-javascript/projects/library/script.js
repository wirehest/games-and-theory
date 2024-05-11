let myLibrary = [];

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

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read)); 
}

function displayBooks() {
  let bookshelf = document.querySelector('');
}



// let myBook = new Book('The Hobbit', 'J.R.R. Tolkien', 295, false);
// console.log(myBook.info());
// 
// console.log(myLibrary);
// addBookToLibrary('Farewell My Lovely', 'Raymond Chandler', 306, true);
// console.log(myLibrary);
