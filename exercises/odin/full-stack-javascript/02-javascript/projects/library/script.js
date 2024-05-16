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
          myLibrary[bookIndex].read = !myLibrary[bookIndex].read;
        }
        if (event.target.className === 'delete-button') {
          myLibrary.splice(bookIndex, 1);
        }
        displayBooks();
      });
      bookshelf.appendChild(book);
    });
    console.log(myLibrary);
  }

  // sets event listeners related to the 'add new book' modal
  function setModalControls() {
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

    // submit event is triggered by submit buttons when
    // the associated form method is 'dialog'
    document.addEventListener('submit', (event) => {
      let title = document.querySelector('#title').value;
      let author = document.querySelector('#author').value;
      let pages = +document.querySelector('#pages').value;
      let read = document.querySelector('#read').checked;
      addBookToLibrary(title, author, pages, read);
      form.reset();
      displayBooks();
    });
  }
  // sample book:
  // addBookToLibrary('The End of Eternity', 'Isaac Asimov', 250, true);

  displayBooks();
  setModalControls();
}
main();
