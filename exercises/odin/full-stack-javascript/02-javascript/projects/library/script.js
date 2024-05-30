class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  flipReadStatus() {
    this.read != this.read;
  }
}

class Library {
  #library = [];

  addBook(title, author, pages, read) {
    this.#library.push(new Book(title, author, pages, read));
    return this.#library;
  }

  removeBook(index) {
    this.#library.splice(index, 1);
    return this.#library;
  }

  clearLibrary() {
    this.#library = [];
    return this.#library;
  }

  get books() {
    return this.#library;
  }
}

let myLibrary = new Library();

function clearBooks() {
  let books = document.querySelectorAll('.book');
  books.forEach((book) => book.remove());
}

function displayBooks() {
  // displayBooks redraws all books, so need to clear bookshelf first
  clearBooks();

  let bookshelf = document.querySelector('.bookshelf');
  let libIndex = 0;

  myLibrary['books'].forEach((libEntry) => {
    let book = document.createElement('div');
    book.classList.add('book', 'shadow');
    book.setAttribute('data-libindex', libIndex++);

    // adds delete button to book
    let delButton = document.createElement('button');
    delButton.type = 'button';
    delButton.textContent = '✖';
    delButton.classList.toggle('delete-button');
    book.appendChild(delButton);

    // adds title, author, pages, and read details from libEntry to book
    ['title', 'author', 'pages'].forEach((bookDetail) => {
      let detail = document.createElement('div');
      detail.classList.toggle(bookDetail);
      detail.textContent = libEntry[bookDetail];
      if (bookDetail === 'pages') detail.textContent += ' pages';
      book.appendChild(detail);
    });

    // adds toggle functionality to the read status
    let read = document.createElement('div');
    read.classList.toggle('read');
    read.textContent = libEntry['read'] ? 'Read' : 'Unread';
    book.appendChild(read);

    book.addEventListener('click', (event) => {
      let bookIndex = event.target.parentNode.attributes[1].value;
      if (event.target.className === 'read') {
        myLibrary['books'][bookIndex].read =
          !myLibrary['books'][bookIndex].read;
      }
      if (event.target.className === 'delete-button') {
        myLibrary['books'].splice(bookIndex, 1);
      }
      displayBooks();
    });
    bookshelf.appendChild(book);
  });
  console.log(myLibrary);
}
displayBooks();

// sets event listeners related to the 'add new book' modal
function setModalControls() {
  let modal = document.querySelector('.add-book-modal');
  let form = document.querySelector('.add-book-form');

  document.addEventListener('click', (event) => {
    let button = event.target.className;
    // if (button === 'new-book-button') modal.showModal();
    if (button === 'close-button') {
      form.reset();
      modal.close();
    }
  });

  // submit event is triggered by submit buttons when
  // the associated form method is 'dialog'
  document.addEventListener('submit', (event) => {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = +document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    // addBookToLibrary(title, author, pages, read);
    myLibrary.addBook(title, author, pages, read);
    form.reset();
    displayBooks();
  });
}
setModalControls();
// sample book:
// addBookToLibrary('The End of Eternity', 'Isaac Asimov', 250, true);

(function addMainWindowListeners() {
  let modal = document.querySelector('.add-book-modal');
  document.addEventListener('click', (event) => {
    let button = event.target.className;
    if (button === 'new-book-button') modal.showModal();
  });
})();
