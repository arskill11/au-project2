
import { mainContent } from '.';

function render () {
  let bookList = document.querySelector('#table');
  let titleInput = document.querySelector('#titleB');
  let authorInput = document.querySelector('#author');
  let pageInput = document.querySelector('#pages');
  let stateInput = document.querySelector('#status');
  let addBookBtn = document.querySelector('#submitBook');
  let errorMsg = document.querySelector('.error');
  const form = document.querySelector('#form');
    
  let bookItem;
  let bookTitle;
  let bookAuthor;
  let bookPages;
  let bookState;
  let btnCol;
  let delBtn, editBtn;

  function getLocalStorageArray () {
    return JSON.parse(localStorage.getItem('myLibrary'));
  }
    
  function setLocalStorageArray (arr) {
    localStorage.setItem('myLibrary', JSON.stringify(arr));
  }
    
  const myLibrary = [];
  if (!localStorage.getItem('myLibrary')){
    setLocalStorageArray(myLibrary);
  }
    
  class Book {
    constructor (title, name, pages, state) {
      this.title = title;
      this.author = name;
      this.pages = pages;
      this.state = state;
    }
  }

  function addToLibrary (title, name, pages, status){
    const arr = getLocalStorageArray();
    let book = new Book(title, name, pages, status);
    arr.push(book);
    
    setLocalStorageArray(arr);
    clearBookList();
    demonstrate();
  }
    
  function demonstrate () {
    const arr = getLocalStorageArray();

    for (let i = 0; i < arr.length; i++) {
      bookItem = document.createElement('tr');
    
      bookTitle = document.createElement('td');
      bookTitle.textContent = arr[i].title;
    
      bookAuthor = document.createElement('td');
      bookAuthor.textContent = arr[i].author;
    
      bookPages = document.createElement('td');
      bookPages.textContent = arr[i].pages;
    
      bookState = document.createElement('td');
      bookState.textContent = arr[i].state;
    
      btnCol = document.createElement('td');
    
      delBtn = document.createElement('button');
      delBtn.textContent = 'Удалить';
      delBtn.setAttribute('data-del-ind', i);
      delBtn.addEventListener('click', deleteBook);
      btnCol.appendChild(delBtn);
    
      bookList.appendChild(bookItem);
      bookItem.appendChild(bookTitle);
      bookItem.appendChild(bookAuthor);
      bookItem.appendChild(bookPages);
      bookItem.appendChild(bookState);
      bookItem.appendChild(btnCol);
    }
  }
    
  function clearBookList () {
    while (bookList.childElementCount > 1) {
      bookList.removeChild(bookList.lastChild);
    }
  }
    
  function deleteBook (e) {
    const arr = getLocalStorageArray();
    let index = e.target.getAttribute('data-del-ind');
    for (let i = 0; i < arr.length; i++){
      if (i == index) {
        arr.splice(i, 1);
      }
    }
        
    setLocalStorageArray(arr);
    clearBookList();
    demonstrate();
  }
    
  function checkValidity () {
    const inputs = document.querySelectorAll('.inputt');
    inputs.forEach(inpt => {
      if (!inpt.validity.valid) {
        inpt.classList.add('invalid');
      }
      else if (inpt.validity.valid && inpt.classList.contains('invalid')){
        inpt.classList.remove('invalid');
      }
    })
    if (titleInput.validity.valueMissing || authorInput.validity.valueMissing || pageInput.validity.valueMissing) {        
      errorMsg.textContent = 'Введите данные';
    }
    else if (titleInput.validity.typeMissmatch || authorInput.validity.typeMissmatch || pageInput.validity.typeMissmatch){
      errorMsg.textContent = 'Тип данных не соответствует';
    }
    else if (titleInput.validity.valid && authorInput.validity.valid && pageInput.validity.valid) {
      errorMsg.textContent = ' ';
    }
  }
    
  form.addEventListener('submit', (e) => {
    if (!titleInput.validity.valid || !authorInput.validity.valid || !pageInput.validity.valid) {
      checkValidity();
      e.preventDefault();
    }
    else {
      e.preventDefault();
      let title = titleInput.value;
      let author = authorInput.value;
      let pages = pageInput.value;
      let state = stateInput.value;
        
      addToLibrary(title, author, pages, state);
        
      form.reset();  
    }
  })

  clearBookList();
  demonstrate();
}

export { render as renderLibrary };