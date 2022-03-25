import './styles.css';
// import './dom_temp.js';
// import './todoManipulation.js';
// import { dom_temp, getClickables } from './dom_temp.js';

const createTodo = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
};

const header = document.querySelector('header');
const addButton = document.querySelector('.add-button');
const popupForm = document.querySelector('.popup-form');
const closeFormBtn = document.querySelector('.close-form');

header.textContent = 'hi';

addButton.addEventListener('click', () => {
    popupForm.style.display = "flex";
});
closeFormBtn.addEventListener('click', () => popupForm.style.display = "none");
