import './style.css';
import { renderHome } from './home';
import { renderMenu } from './sketch';
import { renderAbout } from './ticTacToe';
import meteor from './img/meteor.svg';
import { renderLibrary } from './library';
import { homeMainContent } from './home';
import { renderToDoList } from './toDoList';

const homeSection = document.querySelector('#home');
const menuSection = document.querySelector('#menu');
const aboutSection = document.querySelector('#about');
const librarySection = document.querySelector('#library');
const todoSection = document.querySelector('#todo');
const mainContent = document.querySelector('.mainContent');
const sketch = document.querySelector('.sketch');
const homePage = document.querySelector('.homePage');
const ticTacToe = document.querySelector('.ticTacToe');
const libra = document.querySelector('.libra');
const todoL = document.querySelector('.todoL');

document.querySelector('.icon').src = meteor;


function checkReset () {
  if (homeSection.getAttribute('class') == 'active') {
    homeSection.classList.remove('active');
    homeSection.classList.add('section');
  }
  else if (menuSection.getAttribute('class') == 'active') {
    menuSection.classList.remove('active');
    menuSection.classList.add('section');
  }
  else if (aboutSection.getAttribute('class') == 'active') {
    aboutSection.classList.remove('active');
    aboutSection.classList.add('section');
  }
  else if (librarySection.getAttribute('class') == 'active') {
    librarySection.classList.remove('active');
    librarySection.classList.add('section');
  }
  else if (todoSection.getAttribute('class') == 'active') {
    todoSection.classList.remove('active');
    todoSection.classList.add('section');
  }
  else {return;}
} 

function home () {
  checkReset();
  homeSection.classList.remove('section');
  homeSection.classList.add('active');
  renderHome();

  const ons = document.querySelectorAll('.on');
  ons.forEach(on => {
    on.classList.remove('on');
    on.classList.add('disabled');
  })
  homePage.classList.add('on');
}

function menu () {
  checkReset();
  menuSection.classList.remove('section');
  menuSection.classList.add('active');
  renderMenu();

  const ons = document.querySelectorAll('.on');
  ons.forEach(on => {
    on.classList.remove('on');
    on.classList.add('disabled');
  })
  sketch.classList.add('on');
}

function about () {
  checkReset();
  aboutSection.classList.remove('section');
  aboutSection.classList.add('active');
  renderAbout();

  const ons = document.querySelectorAll('.on');
  ons.forEach(on => {
    on.classList.remove('on');
    on.classList.add('disabled');
  })
  ticTacToe.classList.add('on');
}

function library () {
  checkReset();
  librarySection.classList.remove('section');
  librarySection.classList.add('active');
  renderLibrary();

  const ons = document.querySelectorAll('.on');
  ons.forEach(on => {
    on.classList.remove('on');
    on.classList.add('disabled');
  })
  libra.classList.add('on');
}

function todo () {
  checkReset();
  todoSection.classList.remove('section');
  todoSection.classList.add('active');
  renderToDoList();

  const ons = document.querySelectorAll('.on');
  ons.forEach(on => {
    on.classList.remove('on');
    on.classList.add('disabled');
  })
  todoL.classList.add('on');
}

home();

document.addEventListener('click', (e) => {
  let target = e.target.getAttribute('id');
  switch (target) {
    case "home":
      home();
      break;
    case "menu": 
      menu();
      break;
    case "sketchSect":
      menu();
      break;
    case "tictactoeSect":
      about();
      break;
    case "about": 
      about();
      break;
    case "library":
      library();
      break;
    case "booksSect":
      library();
      break;
    case "todo":
      todo();
      break;
    case "todoSect":
      todo();
      break;
  }
})
export { mainContent };