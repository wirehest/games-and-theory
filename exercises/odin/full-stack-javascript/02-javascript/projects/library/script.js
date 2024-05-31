class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  flipRead() {
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

  getReadStatus(index) {
    return this.#library[index].read;
  }

  toggleRead(index) {
    this.#library[index].flipRead();
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
// sample book:
// myLibrary.addBook('The End of Eternity', 'Isaac Asimov', 250, true);

(function screenController() {
  redrawLibrary();

  (function addButtonListeners() {
    let modal = document.querySelector('.add-book-modal');
    let form = document.querySelector('.add-book-form');

    document.addEventListener('click', (event) => {
      let button = event.target.className;
      if (button === 'new-book-button') modal.showModal();
      if (button === 'close-button') {
        form.reset();
        modal.close();
      }
    });

    // submit event is triggered by buttons associated with dialog forms
    document.addEventListener('submit', (event) => {
      let title = document.querySelector('#title').value;
      let author = document.querySelector('#author').value;
      let pages = +document.querySelector('#pages').value;
      let read = document.querySelector('#read').checked;
      myLibrary.addBook(title, author, pages, read);
      form.reset();
      redrawLibrary();
    });
  })();

  function clearBooks() {
    let books = document.querySelectorAll('.book');
    books.forEach((book) => book.remove());
  }

  function redrawLibrary() {
    clearBooks();

    let fragment = new DocumentFragment();
    let bookshelf = document.querySelector('.bookshelf');
    let libIndex = 0;

    myLibrary['books'].forEach((book, index) => {
      let bookCover = document.createElement('div');
      bookCover.classList.add('book', 'shadow');
      bookCover.setAttribute('data-libindex', libIndex++);

      // adds delete button to book
      let delButton = document.createElement('button');
      delButton.classList.add('delete-button');
      delButton.textContent = '✖';
      delButton.type = 'button';
      bookCover.appendChild(delButton);

      // adds title, author, pages, and read status
      ['title', 'author', 'pages'].forEach((detail) => {
        let coverDetail = document.createElement('div');
        coverDetail.classList.add(detail);
        coverDetail.textContent = book[detail];
        if (detail === 'pages') coverDetail.textContent += ' pages';
        bookCover.appendChild(coverDetail);
      });

      // adds toggle functionality to the read status
      let read = document.createElement('div');
      let readStatus = myLibrary.getReadStatus(index);
      read.classList.add('read-status', readStatus ? 'read' : 'unread');
      read.textContent = book['read'] ? 'Read' : 'Unread';
      bookCover.appendChild(read);

      // adds event listeners for book buttons
      bookCover.addEventListener('click', (event) => {
        let bookButton = event.target;
        let buttonClassArray = Array.from(bookButton.classList);
        let bookIndex = event.target.parentNode.attributes[1].value;
        if (buttonClassArray.includes('read-status')) {
          myLibrary.toggleRead(bookIndex);
          if (buttonClassArray.includes('unread')) {
            bookButton.classList.remove('unread');
            bookButton.classList.add('read');
            bookButton.textContent = 'Read';
          } else {
            bookButton.classList.remove('read');
            bookButton.classList.add('unread');
            bookButton.textContent = 'Unread';
          }
        }
        if (bookButton.className === 'delete-button') {
          myLibrary.removeBook(bookIndex);
          redrawLibrary();
        }
      });
      fragment.appendChild(bookCover);
    });
    bookshelf.appendChild(fragment);
  }
})();
