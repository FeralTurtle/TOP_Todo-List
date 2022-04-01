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

    const changeToTextInput = () => {
        const projectTag = document.querySelector('#project');
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
    };

    const addProjectOptions = (titles) => {
        for (let i = -1; i < titles.length; i++) {
            if (i == -1) {
                const projectInput = document.querySelector('#project');
                const newSelect = document.createElement('select');
                newSelect.name = 'project';
                newSelect.id = 'project';
                newSelect.autocomplete = 'off';
                const newAddOption = document.createElement('option');
                newAddOption.value = 'add-project';
                newAddOption.textContent = 'Add a project';
                newAddOption.addEventListener('click', () => {
                    changeToTextInput();
                });
                projectInput.replaceWith(newSelect);
                newSelect.append(newAddOption);
            } else {
                const input = document.querySelector('#project');
                const newOption = document.createElement('option');
                newOption.value = titles[i];
                newOption.textContent = titles[i];
                input.append(newOption);
            };
        };
    };

    addButton.addEventListener('click', () => {
        formPopup.style.display = 'flex';
    });
    formSubmitBtn.addEventListener('click', () => {
        const projectTag = document.querySelector('#project');
        const newTodo = projects.createTodo(titleTag.value, descriptionTag.value, dueDateTag.value, priorityTag.value, projectTag.value);
        projects.add(newTodo);
        // renderTodo(newTodo);
    });
    formCloseBtn.addEventListener('click', () => {
        formTags.forEach(tag => tag.value = null);
        formPopup.style.display = 'none';
    });
    formResetBtn.addEventListener('click', () => {
        formTags.forEach(tag => tag.value = null);
        const titles = projects.projectTitles();
        addProjectOptions(titles);
    });
    projectTag.addEventListener('click', () => {
        changeToTextInput();
    });
})();

export { form };