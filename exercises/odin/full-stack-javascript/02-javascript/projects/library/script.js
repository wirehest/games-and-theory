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
  let title = document.querySelector('#title');
  let author = document.querySelector('#author');
  let pages = document.querySelector('#pages');
  let read = document.querySelector('#read');

  redrawLibrary();

  (function addListeners() {
    let modal = document.querySelector('.add-book-modal');
    let form = document.querySelector('.add-book-form');
    // let submitButton = document.querySelector('.submit-button')

    document.addEventListener('click', (event) => {
      let button = event.target.className;

      if (button === 'new-book-button') modal.showModal();

      if (button === 'close-button') {
        form.reset();
        modal.close();
      }

      if (button === 'submit-button') {
        console.log(title.validity.valueMissing);
        if (title.validity.valueMissing) {
          title.setCustomValidity('Please enter a title.');
        } else {
          title.setCustomValidity('');
        }

        if (author.validity.valueMissing) {
          author.setCustomValidity("Please enter the author's name.");
        } else {
          author.setCustomValidity('');
        }

        if (pages.validity.valueMissing) {
          pages.setCustomValidity('Please enter the page count.');
        } else if (pages.validity.typeMismatch) {
          pages.setCustomValidity('Page count must be numerals, 0-9.');
        } else if (pages.validity.rangeUnderflow) {
          pages.setCustomValidity('Page count cannot be zero.');
        } else {
          pages.setCustomValidity('');
        }
      }
    });

    // submit event is triggered by buttons associated with dialog forms
    document.addEventListener('submit', (event) => {
      // let title = document.querySelector('#title');
      // let author = document.querySelector('#author');
      // let pages = document.querySelector('#pages');
      // let read = document.querySelector('#read');
      // console.log('submit fired');
      //
      myLibrary.addBook(title.value, author.value, +pages.value, read.checked);
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
