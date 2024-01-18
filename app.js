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


const storedLibrary = localStorage.getItem('MyLibrary');
const myLibrary = storedLibrary ? JSON.parse(storedLibrary) : [];


myLibrary.forEach((bookData, index) => {
    myLibrary[index] = new Book(bookData.title, bookData.author, bookData.pages, bookData.read);
});

function updateLocalStorage(){
    localStorage.setItem('MyLibrary',JSON.stringify(myLibrary))
}


myLibrary.forEach((Book) => {
  createBookCard(Book);
});


function createBookCard(book) {
  const bookCardSection = document.getElementById("cardContainer");
  const readButtonText = book.getRead() ? "Read" : "Not Read";
  const bgColor = book.getRead() ? '#4caf4f3e' : '#bf3e3e3e';
  
  bookCardSection.innerHTML += 
  `<div class="card-section">
  <div class="book-info">
    <div class="bookTitle">
        <h2>${book.title}</h2>
    </div>
    <div class="bookAuthor">
        <p>- ${book.author}</p>
    </div>
    <div class="totalPages">
        <p>${book.pages}</p>
    </div>
    </div>
    <div class="book-btn">
        <button id="read-btn" read-btn-data  style="background-color: ${bgColor}">${readButtonText}</button>
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


function toggleRead(e){
    const cardDiv = e.target.closest('.card-section');
    const index = Array.from(cardDiv.parentNode.children).indexOf(cardDiv);

    myLibrary[index].setRead(!myLibrary[index].getRead());
    updateLocalStorage()

    const readBtn = cardDiv.querySelector('#read-btn');
    readBtn.textContent = myLibrary[index].getRead() ? 'Read' : 'Not Read';
    readBtn.style.backgroundColor = myLibrary[index].getRead() ? '#4caf4f3e' : '#bf3e3e3e';
    
}

function removeBook(e){
    const cardDiv = e.target.closest('.card-section');
    const index = Array.from(cardDiv.parentNode.children).indexOf(cardDiv)

    myLibrary.splice(index,1)
    updateLocalStorage()
    clearAllBooks();
}

function clearAllBooks(){
    const bookCardSection = document.getElementById("cardContainer");
    bookCardSection.innerHTML =''
    getAllBooks()
}

function getAllBooks(){
    myLibrary.forEach((Book) => {
        createBookCard(Book);
    });
}


const popupForm = document.getElementById("popupForm");

popupForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const bookName = document.getElementById("bookName").value;
  const bookAuthor = document.getElementById("bookAuthor").value;
  const pages = document.getElementById("pages").value;
  const readStatus = document.getElementById("readStatus").checked;
  toggle();

  let book = new Book(bookName, bookAuthor, pages, readStatus);
  myLibrary.push(book)
  updateLocalStorage()



  document.getElementById("popupForm").reset();
  clearAllBooks()
});

function toggle() {
    var formOpen = document.getElementById("popup");
    formOpen.style.display = formOpen.style.display === "block" ? "none" : "block";
}