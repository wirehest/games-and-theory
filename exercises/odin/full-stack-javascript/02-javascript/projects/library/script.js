function main() {
  let myLibrary = [];

  function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read ? 'Read' : 'Unread';

    // readStatement = read ? 'Read' : 'Unread';
    this.info = function () {
      return `${title} by ${author}. ${pages} pages. ${read}.`;
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

      // adds delete button to the book
      let delButton = document.createElement('button');
      delButton.type = 'button';
      delButton.textContent = '✖';
      delButton.classList.toggle('delete-button');
      delButton.addEventListener('click', () => book.remove());
      book.appendChild(delButton);

      // adds each book detail to the book div
      ['title', 'author', 'pages', 'read'].forEach((bookDetail) => {
        let detail = document.createElement('div');
        detail.classList.toggle(bookDetail);
        detail.textContent = libEntry[bookDetail];
        if (bookDetail === 'pages') detail.textContent += ' pages';

        book.appendChild(detail);
      });

      bookshelf.appendChild(book);
    }
  }

  function controlAddBookModal() {
    let modal = document.querySelector('.add-book-modal');
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').value;

    let newBookButton = document.querySelector('.new-book-button');
    newBookButton.addEventListener('click', () => modal.showModal());

    modal.addEventListener('click', (event) => {
      let button = event.target;

      switch (button.className) {
        case 'close-button':
          modal.close();
          break;
        case 'submit-button':
          console.log(title, author, +pages, !!read);
          addBookToLibary(title, author, +pages, !!read);
          break;
      }
    });
  }

  addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
  addBookToLibrary('The Hobbit', 'J.R.R. Tolkien', 295, false);
  addBookToLibrary('Farewell My Lovely', 'Raymond Chandler', 306, true);

  displayBooks();
  controlAddBookModal();
}
// console.log(myLibrary);
main();
