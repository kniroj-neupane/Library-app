let myLibrary = [];
function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}
myLibrary[0] = new Book('The Hobbit', 'J.J.Tolkein', 296, 'Completed');
myLibrary[1] = new Book('The Hobbi', 'J.J.Tolkein', 296, 'Reading');
//now to add new books
function addNewBook(book) {
    myLibrary.push(book);
}
//render books


const booksContainer = document.getElementById('booksContainer');
for (let i = 0; i < myLibrary.length; i++) {

    const booksdiv = document.createElement('div');
    const bookstitle = document.createElement('div');
    const booksauthor = document.createElement('div');
    const bookspages = document.createElement('div');
    const booksstatus = document.createElement('button');
    const booksdrop = document.createElement('button');

    booksdiv.setAttribute('class', 'books');
    bookstitle.setAttribute('class', 'bookstitle');
    booksauthor.setAttribute('class', 'booksauthor');
    bookspages.setAttribute('class', 'bookspages');
    booksstatus.setAttribute('class', 'booksstatus');
    if (myLibrary[i].status === 'Completed')
        booksstatus.classList.toggle('completed');
    booksdrop.setAttribute('class', 'booksdrop');

    bookstitle.textContent = myLibrary[i].title;
    booksauthor.textContent = myLibrary[i].author;
    bookspages.textContent = myLibrary[i].pages + ' pages';
    booksstatus.textContent = myLibrary[i].status;
    booksdrop.textContent = 'Drop';

    booksdiv.appendChild(booksdrop);
    booksdiv.appendChild(bookstitle);
    booksdiv.appendChild(booksauthor);
    booksdiv.appendChild(bookspages);
    booksdiv.appendChild(booksstatus);
    booksdiv.appendChild(booksdrop);
    booksContainer.appendChild(booksdiv);
}
const bookStatusBtn = document.querySelectorAll('.booksstatus');
bookStatusBtn.forEach((statusbtn) => {
    statusbtn.addEventListener('click', () => {
        statusbtn.classList.toggle("completed");
        if (statusbtn.textContent === 'Completed')
            statusbtn.textContent = 'Reading';
        else if (statusbtn.textContent === 'Reading')
            statusbtn.textContent = 'Completed'
    })
});
