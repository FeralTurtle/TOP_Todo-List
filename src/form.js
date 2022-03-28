import { createTodo } from './todo.js';
import { projects } from './projects.js';

const form = (() => {
    const addButton = document.querySelector('.add-button');
    const formPopup = document.querySelector('.popup-form');
    const formCloseBtn = document.querySelector('.form-close');
    const formSubmitBtn = document.querySelector('#form-btn');
    const formResetBtn = document.querySelector('#form-reset');
    const titleTag = document.querySelector('#title');
    const descriptionTag = document.querySelector('#description');
    const dueDateTag = document.querySelector('#due-date');
    const priorityTag = document.querySelector('#priority');
    const projectTag = document.querySelector('#project');
    const formTags = [titleTag, descriptionTag, dueDateTag, priorityTag, projectTag];

    addButton.addEventListener('click', () => {
        formPopup.style.display = 'flex';
    });
    formSubmitBtn.addEventListener('click', () => {
        const projectTag = document.querySelector('#project');
        const title = titleTag.value;
        const description = descriptionTag.value;
        const dueDate = dueDateTag.value;
        const priority = priorityTag.value;
        const project = projectTag.value;

        const newTodo = createTodo(title, description, dueDate, priority, project);
        projects.add(newTodo);
        // projects.projectsArray.push(newTodo.project); // Append project title to projects array
        // console.log(projects.projectsArray);
    });
    formCloseBtn.addEventListener('click', () => {
        formTags.forEach(tag => tag.value = null);
        formPopup.style.display = 'none';
    });
    formResetBtn.addEventListener('click', () => {
        formTags.forEach(tag => tag.value = null);
        // const projectInput = document.querySelector('#project');
        // const projectSelect = document.createElement('select');
        // projectSelect.setAttribute('name', 'project');
        // projectSelect.setAttribute('id', 'project');
        // projectSelect.setAttribute('autocomplete', 'off');
        // const tempOption = document.createElement('option');
        // tempOption.setAttribute('value', 'add-project');
        // tempOption.textContent = 'Add a project';
        // projectInput.replaceWith(projectSelect);
        // projectSelect.append(tempOption);
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
