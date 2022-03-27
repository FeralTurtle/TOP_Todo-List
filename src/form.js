import { createTodo } from './todo.js';

const form = (() => {
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
        // WIP. New options are added by the user and should be saved somewhere else to re-append here.
        const projectInput = document.querySelector('#project');
        const projectSelect = document.createElement('select');
        projectSelect.setAttribute('name', 'project');
        projectSelect.setAttribute('id', 'project');
        projectSelect.setAttribute('autocomplete', 'off');
        const tempOption = document.createElement('option');
        tempOption.setAttribute('value', 'add-project');
        tempOption.textContent = 'Add a project';
        projectInput.replaceWith(projectSelect);
        projectSelect.append(tempOption);
    });
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
})();

export { form };
