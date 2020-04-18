const booksList = document.getElementById("books-list");
const addForm = document.getElementById("main-form");
const search = document.getElementById("search");
const del = document.querySelector(".delete");

function addBooksToList(e) {
  e.preventDefault();

  const newBook = document.getElementById("item").value;
  console.log(newBook);
  const books = document.createElement("li");
  books.className = "list-group-item";
  books.appendChild(document.createTextNode(newBook));
  booksList.appendChild(books);

  var deleteBtn = document.createElement("button");
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  deleteBtn.innerHTML = `<i class="far fa-trash-alt"></i>`;
  //   deleteBtn.appendChild(document.createTextNode());
  books.appendChild(deleteBtn);

  item.value = "";
}

function removeBook(e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("are you sure you want to delete this book?")) {
      var li = e.target.parentElement;
      booksList.removeChild(li);
    }
  }
}

function findBooks(e) {
  var text = e.target.value.toLowerCase();
  //   console.log(text);
  var booksListAll = booksList.getElementsByTagName("li");
  //   console.log(booksListAll);
  Array.from(booksListAll).forEach(function (item) {
    var itemName = item.firstChild.textContent;
    if (itemName.toLowerCase().indexOf(text) != -1) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

addForm.addEventListener("submit", addBooksToList);
booksList.addEventListener("click", removeBook);
search.addEventListener("keyup", findBooks);
