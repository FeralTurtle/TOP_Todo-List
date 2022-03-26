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

//Get an array of children of a parent element of a particular class:
//Get a nodelist of all list containers
const listContainers = document.querySelectorAll('.list-container');
//Get an HTML collection of all list container children. Turn into children HTMl collections into arrays under an array.
const childrenArrays = [];
listContainers.forEach(list => childrenArrays.push(Array.from(list.children)));
//Make an array of all children. Concat the previous arrays together.
// const childrenArray = childrenArrays[0].concat(childrenArrays[1]);
const childrenArray = childrenArrays[0];
//Project highlighting
const selectionProject = document.querySelector('.selected-project');
selectionProject.style.backgroundColor = '#ffffe6';
childrenArray.forEach(child => child.addEventListener('click', () => {
    const previousSelection = document.querySelector('.selected-project');
    previousSelection.style.backgroundColor = null;
    previousSelection.classList.remove('selected-project');
    child.classList.add('selected-project');
    child.style.backgroundColor = '#ffffe6';
}));

//Todo highlighting
const selectionTodo = document.querySelector('.selected-todo');
selectionTodo.style.backgroundColor = '#f2f2f2';
const mainDisplay = document.querySelector('.todo-display-main');
const todoItems = Array.from(mainDisplay.children); // Array of whole todo divs
for (let i = 0; i < todoItems.length; i++) {
    const todoElements = Array.from(todoItems[i].children); //Array of todo div's children for each div
    // todoElements.forEach(element => console.log(element));
    for (let j = 0; j < todoElements.length; j++) {
        // Only add event listeners to todo elements from index 2
        if (j > 1) {
            todoElements[j].addEventListener('click', () => {
                const previousSelection = document.querySelector('.selected-todo');
                previousSelection.style.backgroundColor = null;
                previousSelection.classList.remove('selected-todo');
                todoElements[j].parentElement.classList.add('selected-todo');
                todoElements[j].parentElement.style.backgroundColor = '#f2f2f2';
            });
        };
    };
};
