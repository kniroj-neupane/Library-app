let myLibrary = [];
function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

const booksContainer = document.getElementById('booksContainer');
const formContainer = document.getElementById('formContainer');

myLibrary[0] = new Book('The Hobbit', 'JJ Tolkein', 222, 'Completed');
//function to render DOM 
function displayBooks() {
    booksContainer.innerHTML = '';
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
        booksstatus.setAttribute('index', i);
        booksdrop.setAttribute('class', 'booksdrop');
        booksdrop.setAttribute('index', i);

        bookstitle.textContent = myLibrary[i].title;
        booksauthor.textContent = myLibrary[i].author;
        bookspages.textContent = myLibrary[i].pages + ' pages';
        if (myLibrary[i].status === 'Completed')
            booksstatus.classList.add('completed');
        else
            booksstatus.classList.remove('completed');
        booksstatus.textContent = myLibrary[i].status;
        booksdrop.textContent = 'Drop';
        booksdiv.appendChild(booksdrop);
        booksdiv.appendChild(bookstitle);
        booksdiv.appendChild(booksauthor);
        booksdiv.appendChild(bookspages);
        booksdiv.appendChild(booksstatus);
        booksdiv.appendChild(booksdrop);
        booksContainer.appendChild(booksdiv);

        //event listener to drop(delete) a book
        booksdrop.addEventListener('click', () => {
            let index = booksdrop.getAttribute('index');
            myLibrary.splice(index, 1);
            displayBooks();
        })
        //event listener for changing book status
        booksstatus.addEventListener('click', () => {
            let index = booksstatus.getAttribute('index');
            if (myLibrary[index].status === 'Reading')
                myLibrary[index].status = 'Completed';
            else
                myLibrary[index].status = 'Reading';
            displayBooks();
        })
    }

}

//function to validate form
function validate(title, author, pages) {
    if (title === '' || author === '' || pages === '') {
        alert('Must fill all sections');
        return false;
    }
    return true;
}


//event listener for adding new books
const displaySwitchButtons = document.querySelectorAll('.displaySwitch');
displaySwitchButtons.forEach((btns) => {
    btns.addEventListener('click', (e) => {
        e.preventDefault();
        if (btns.getAttribute('id') == 'addNew') {
            formContainer.setAttribute('style', 'display:flex');
            booksContainer.setAttribute('style', 'display:none');
        }
        else if (btns.getAttribute('id') == 'close') {
            formContainer.setAttribute('style', 'display:none');
            booksContainer.setAttribute('style', 'display:flex');
        }
        else if (btns.getAttribute('id') == 'add') {
            const title = document.getElementById('booktitle').value;
            const author = document.getElementById('bookauthor').value;
            const pages = document.getElementById('bookpages').value;
            const status = document.getElementById('bookstatus').value;
            if (validate(title, author, pages) == true) {
                const book = new Book(title, author, pages, status);
                myLibrary.push(book);
                formContainer.setAttribute('style', 'display:none');
                booksContainer.setAttribute('style', 'display:flex');
                document.getElementById('form').reset();
                displayBooks();
            }
        }
    })
});

//event listener for resetting form
const resetbtn = document.querySelector('#resetbtn');
resetbtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('form').reset();
    displayBooks();
})


document.addEventListener('DOMContentLoaded', displayBooks);
