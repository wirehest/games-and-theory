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
  let bookshelf = document.querySelector('.bookshelf');

  while (myLibrary.length > 0) {
    let libEntry = myLibrary.pop();
    let book = document.createElement('div');
    book.classList.add('book', 'shadow');

    ['title', 'author'].forEach((x) => {
      let detail = document.createElement('div');
      detail.classList.toggle(x);
      detail.textContent = libEntry[x];
      book.appendChild(detail);
    });

    bookshelf.appendChild(book);
  }
}

addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
addBookToLibrary('Farewell My Lovely', 'Raymond Chandler', 306, true);
// console.log(myLibrary);
displayBooks();
