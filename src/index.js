import './styles.css';
// import './dom_temp.js';
// import './todoManipulation.js';
// import { dom_temp, getClickables } from './dom_temp.js';

const createTodo = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
};

const header = document.querySelector('header');
const addButton = document.querySelector('.add-button');
const formPopup = document.querySelector('.popup-form');
const formCloseBtn = document.querySelector('.close-form');
const formSubmitBtn = document.querySelector('#form-btn');
//Form tags
const titleTag = document.querySelector('#title');
const descriptionTag = document.querySelector('#description');
const dueDateTag = document.querySelector('#due-date');
const priorityTag = document.querySelector('#priority');
const formTags = [titleTag, descriptionTag, dueDateTag, priorityTag];

const saveInfoInput = () => {
    const title = titleTag.value;
    const description = descriptionTag.value;
    const dueDate = dueDateTag.value;
    const priority = priorityTag.value;

    const newTodo = createTodo(title, description, dueDate, priority);
    return newTodo;
}

header.textContent = 'hi';

addButton.addEventListener('click', () => {
    formPopup.style.display = 'flex';
});
formSubmitBtn.addEventListener('click', () => {
    console.log(saveInfoInput());
});
formCloseBtn.addEventListener('click', () => {
    formTags.forEach(tag => tag.value = null);
    formPopup.style.display = 'none';
});
