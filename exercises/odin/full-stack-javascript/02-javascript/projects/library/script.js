function main() {
  let myLibrary = [];

  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
      return `${title} by ${author}. ${pages} pages. ${read}.`;
    };
  }

  function addBookToLibrary(title, author, pages, read) {
    myLibrary.push(new Book(title, author, pages, read));
  }

  function clearBooks() {
    let books = document.querySelectorAll('.book');
    books.forEach((book) => book.remove());
  }

  function displayBooks() {
    // displayBooks redraws all books, so need to clear bookshelf first
    clearBooks();

    let bookshelf = document.querySelector('.bookshelf');
    let libIndex = 0;

    myLibrary.forEach((libEntry) => {
      let book = document.createElement('div');
      book.classList.add('book', 'shadow');
      book.setAttribute('data-libindex', libIndex++);

      // adds delete button to book
      let delButton = document.createElement('button');
      delButton.type = 'button';
      delButton.textContent = '✖';
      delButton.classList.toggle('delete-button');
      delButton.addEventListener('click', () => {
        book.remove();
        myLibrary.splice(+book['data-libindex'], 1);
        displayBooks();
      });
      book.appendChild(delButton);

      // adds title, author, pages, and read details from libEntry to book
      ['title', 'author', 'pages'].forEach((bookDetail) => {
        let detail = document.createElement('div');
        detail.classList.toggle(bookDetail);
        detail.textContent = libEntry[bookDetail];
        if (bookDetail === 'pages') detail.textContent += ' pages';
        // console.log(libEntry[read]);
        // if (libEntry['read']) read.textContent = 'Unread';
        book.appendChild(detail);
      });

      // console.log(book);
      let read = document.createElement('div');
      // let read = book.querySelector('.read');
      read.classList.toggle('read');
      read.textContent = libEntry['read'] ? 'Read' : 'Unread';
      book.appendChild(read);
      book.addEventListener('click', (event) => {
        // console.log(event.target);

        if (event.target.className === 'read') {
          let bookIndex = event.target.parentNode.attributes[1].value;
          myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
          // myLibrary[+book['data-libindex']]['read'] = !readStatus;
          displayBooks();
        }
      });
      bookshelf.appendChild(book);
    });
  }

  // sets event listeners the 'add new book' modal
  function setModalControls() {
    let modal = document.querySelector('.add-book-modal');
    let form = document.querySelector('.add-book-form');

    let newBookButton = document.querySelector('.new-book-button');
    newBookButton.addEventListener('click', () => modal.showModal());

    document.addEventListener('submit', (event) => {
      // console.log(event.submitter.form);
      let title = document.querySelector('#title').value;
      let author = document.querySelector('#author').value;
      let pages = +document.querySelector('#pages').value;
      let read = document.querySelector('#read').checked;
      // console.log(document.querySelector('#read'));
      addBookToLibrary(title, author, pages, read);
      // [title, author, pages, read] = [null, null, null, null];
      form.reset();
      displayBooks();
    });
    modal.addEventListener('click', (event) => {
      let button = event.target;

      switch (button.className) {
        case 'close-button':
          form.reset();
          modal.close();
          break;
      }
    });
  }

  // addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
  // addBookToLibrary('The End of Eternity', 'Isaac Asimov', 250, false);
  // addBookToLibrary('Farewell My Lovely', 'Raymond Chandler', 306, true);

  displayBooks();
  setModalControls();
}
// console.log(myLibrary);
main();
