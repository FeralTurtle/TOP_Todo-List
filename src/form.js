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
    });
    formCloseBtn.addEventListener('click', () => {
        formTags.forEach(tag => tag.value = null);
        formPopup.style.display = 'none';
    });
    formResetBtn.addEventListener('click', () => {
        formTags.forEach(tag => tag.value = null);
        //Update selection options with project titles
        const titles = projects.getTitles();
        for (let i = -1; i < titles.length; i++) {
            if (i == -1) {
                const projectInput = document.querySelector('#project');
                const newSelect = document.createElement('select');
                newSelect.name = 'project';
                newSelect.id = 'project';
                newSelect.autocomplete = 'off';
                const defaultNone = document.createElement('option');
                defaultNone.value = 'none';
                defaultNone.textContent = 'None';
                const defaultAdd = document.createElement('option');
                defaultAdd.value = 'add-project';
                defaultAdd.textContent = 'Add a project';
                projectInput.replaceWith(newSelect);
                newSelect.append(defaultNone);
                newSelect.append(defaultAdd);
            } else {
                const input = document.querySelector('#project');
                const newOption = document.createElement('option');
                newOption.value = titles[i];
                newOption.textContent = titles[i];
                input.append(newOption);
            };
        };
    });
    projectTag.addEventListener('click', () => {
        if (projectTag.value == 'add-project') {
            while (projectTag.firstChild) {
                projectTag.removeChild(projectTag.firstChild);
            };
            const newInput = document.createElement('input');
            newInput.type = 'text';
            newInput.id = 'project';
            newInput.autocomplete = 'off';
            projectTag.replaceWith(newInput);
            document.querySelector(`label[for='project']`).textContent = 'Project name';
        };
    });
})();

export { form };
