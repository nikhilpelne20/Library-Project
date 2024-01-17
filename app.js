class Book {
  constructor(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
  getRead(){
    return this.read
  }

  setRead(status){
    this.read = status
  }

}

const Book1 = new Book(
    "A Passage to India", 
    "E.M. Forster", 
    234, 
    true
);


const Book2 = new Book(
  "Far from the Madding Crowd",
  "Thomas Hardy",
  321,
  false
);
const Book3 = new Book(
  "Far from the Madding Crowd",
  "Thomas Hardy",
  321,
  false
);

const myLibrary = [];

myLibrary.push(Book1);
myLibrary.push(Book2);
myLibrary.push(Book3);

myLibrary.forEach((Book) => {
  createBookCard(Book);
});


function createBookCard(book) {
  const bookCardSection = document.getElementById("cardContainer");
  bookCardSection.innerHTML += 
  `<div class="card-section">
    <div class="bookTitle">
        <h2>${book.title}</h2>
    </div>
    <div class="bookAuthor">
        <p>${book.author}</p>
    </div>
    <div class="totalPages">
        <p>${book.pages}</p>
    </div>
    <div class="book-btn">
        <button id="read-btn" read-btn-data>Not Read</button>
        <button id="remove-btn" remove-btn-data>Remove Book</button>
    </div>
</div>`;
addBtnEvent()
}



function addBtnEvent(){
    const readBtnEvent = document.querySelectorAll('[read-btn-data]')
    const removeBtnEvent = document.querySelectorAll('[remove-btn-data]')

    readBtnEvent.forEach((button)=> 
    button.addEventListener("click",toggleRead))
    removeBtnEvent.forEach((button)=>
    button.addEventListener("click",removeBook))

}


function toggleRead(){
    console.log("Read")
}

function removeBook(){
    console.log("Book removed")
}

function displayBook(Book) {
  var bookCard = document.createElement("div");
  bookCard.classList = "card";

  var bookTitle = document.createElement("p");
  bookTitle.classList = "title-heading";
  bookTitle.textContent = `${Book.title}`;

  var bookAuthor = document.createElement("p");
  bookAuthor.classList = "author-heading";
  bookAuthor.textContent = `- by ${Book.author}`;

  var bookPages = document.createElement("p");
  bookPages.textContent = `${Book.pages} pages`;

  var readBook = document.createElement("button");
  readBook.classList = "read-btn";
  readBook.textContent = Book.read ? "read" : "Not read";
  readBook.style.backgroundColor = Book.read ? "#4caf4f3e" : "#bf3e3e3e";

  readBook.addEventListener("click", function () {
    Book.toggleReadStatus();
    readBook.textContent = Book.read ? "read" : "Not read";
    readBook.style.backgroundColor = Book.read ? "#4caf4f3e" : "#bf3e3e3e";
  });

  var removeBook = document.createElement("button");
  removeBook.classList = "remove-btn";
  removeBook.textContent = "Remove Book";

  removeBook.addEventListener("click", function () {
    var index = myLibrary.indexOf(Book);
    if (index !== -1) {
      myLibrary.splice(index, 1); // Remove the book from the array
      bookCard.remove();
    }
  });

  var cardBody = document.getElementById("cardContainer");
  bookCard.appendChild(bookTitle);
  bookCard.appendChild(bookAuthor);
  bookCard.appendChild(bookPages);
  bookCard.appendChild(readBook);
  bookCard.appendChild(removeBook);
  cardBody.appendChild(bookCard);
}

Book.prototype.toggleReadStatus = function () {
  this.read = !this.read;
};

var popupForm = document.getElementById("popupForm");

popupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  var bookName = document.getElementById("bookName").value;
  var bookAuthor = document.getElementById("bookAuthor").value;
  var pages = document.getElementById("pages").value;
  var readStatus = document.getElementById("readStatus").checked;
  console.log(bookName, bookAuthor, pages, readStatus);
  toggle();

  var book = new Book(bookName, bookAuthor, pages, readStatus);
  myLibrary.push(book);

  document.getElementById("popupForm").reset();

  // Clear the existing card display
  var cardContainer = document.getElementById("cardContainer");
  cardContainer.innerHTML = "";

  //re populate the books
  myLibrary.forEach((Book) => {
    displayBook(Book);
  });
});

function toggle() {
  var formOpen = document.getElementById("popup");
  formOpen.style.display = popup.style.display === "block" ? "none" : "block";
}
