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
const formCloseBtn = document.querySelector('.form-close');
const formSubmitBtn = document.querySelector('#form-btn');
const formResetBtn = document.querySelector('#form-reset');
//Form tags
const titleTag = document.querySelector('#title');
const descriptionTag = document.querySelector('#description');
const dueDateTag = document.querySelector('#due-date');
const priorityTag = document.querySelector('#priority');
const projectTag = document.querySelector('#project');
const formTags = [titleTag, descriptionTag, dueDateTag, priorityTag, projectTag]; // Loop through input and select tags

const saveInfoInput = () => {
    const title = titleTag.value;
    const description = descriptionTag.value;
    const dueDate = dueDateTag.value;
    const priority = priorityTag.value;

    const newTodo = createTodo(title, description, dueDate, priority);
    return newTodo;
}

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
formResetBtn.addEventListener('click', () => {
    formTags.forEach(tag => tag.value = null);
})
projectTag.addEventListener('click', () => {
    if (projectTag.value == 'add-project') {
        while (projectTag.firstChild) {
            projectTag.removeChild(projectTag.firstChild);
        };
        const newInput = document.createElement('input');
        newInput.setAttribute('type', 'text');
        newInput.setAttribute('id', 'project');
        newInput.setAttribute('autocomplete', 'off');
        projectTag.replaceWith(newInput);
        document.querySelector(`label[for='project']`).textContent = 'Project name';
    };
});

const listContainer = document.querySelector('.list-container');
const listItems = Array.from(listContainer.children);
listItems.forEach(item => console.log(item));
