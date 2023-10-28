const myLibrary = [];

function Book(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const Book1 = new Book("A Passage to India", "E.M. Forster", 234, true);
const Book2 = new Book("Far from the Madding Crowd","Thomas Hardy", 321, false)
const Book3 = new Book("The Merchant of Venice","Shakespeare", 411, true)
const Book4 = new Book("The Merchant of Venice","Shakespeare", 411, true)
myLibrary.push(Book1);
myLibrary.push(Book2);
myLibrary.push(Book3);
myLibrary.push(Book4)


function displayBook(Book){
    var bookCard = document.createElement('div')
    bookCard.classList = 'card'

    var bookTitle = document.createElement('p')
    bookTitle.classList='title-heading'
    bookTitle.textContent=`${Book.title}`

    var bookAuthor = document.createElement('p')
    bookAuthor.classList='author-heading'
    bookAuthor.textContent=`- by ${Book.author}`

    var bookPages = document.createElement('p')
    bookPages.textContent = `${Book.pages} pages`

    var cardBody = document.getElementById("cardContainer")
    bookCard.appendChild(bookTitle)
    bookCard.appendChild(bookAuthor)
    bookCard.appendChild(bookPages)
    cardBody.appendChild(bookCard)
}

function addBookToLibrary() {

}

myLibrary.forEach(Book => {
    displayBook(Book)
});

// displayBook()