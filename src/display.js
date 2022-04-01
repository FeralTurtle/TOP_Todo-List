import dots from './icons/dots.png';
import circle from './icons/empty-circle.png';
import pencil from './icons/edit.png';
import trashCan from './icons/trash-can.png';
import { enableHighlighting } from './highlighting.js';
import { projects } from './projects.js';

const renderProject = (newTodo) => {
    //Make project-item div
    const newDiv = document.createElement('div');
    newDiv.classList.add('project-item');
    newDiv.addEventListener('click', () => {
        //Clear display
        const todoDisplayMain = document.querySelector('.todo-display-main');
        while (todoDisplayMain.firstChild) {
            todoDisplayMain.removeChild(todoDisplayMain.firstChild);
        };
        //Update display with selected project's todos
        const selectedProjectTag = document.querySelector('.selected-project > span:nth-child(1)');
        const selectedProject = projects.findProjectByTitle(selectedProjectTag.textContent);
        const todosArray = selectedProject.todos;
        console.log('todosArray:');
        console.log(todosArray);
        renderTodo(todosArray);
        const todoDisplayHeader = document.querySelector('.todo-display-header');
        todoDisplayHeader.textContent = selectedProjectTag.textContent;
    });
    const titleSpan = document.createElement('span');
    titleSpan.textContent = newTodo.project;
    const dotsDiv = document.createElement('div');
    const dotsImg = document.createElement('img');
    dotsDiv.classList.add('dots');
    dotsImg.src = dots;
    dotsImg.alt = 'dots';
    dotsDiv.append(dotsImg);
    newDiv.append(titleSpan);
    newDiv.append(dotsDiv);
    const optionsDiv = document.createElement('div');
    const renameDiv = document.createElement('div');
    const deleteDiv = document.createElement('div');
    optionsDiv.classList.add('popup-project-options');
    renameDiv.textContent = 'Rename';
    deleteDiv.textContent = 'Delete';
    optionsDiv.append(renameDiv);
    optionsDiv.append(deleteDiv);
    dotsDiv.append(optionsDiv);
    const projectsDisplay = document.querySelector('.list-container');
    projectsDisplay.append(newDiv);
    enableHighlighting.projectsHighlighting();
    //Options popup
    dotsDiv.addEventListener('click', () => {
        (optionsDiv.style.display == 'none') ? optionsDiv.style.display = 'block' : optionsDiv.style.display = 'none';
    });
    renameDiv.addEventListener('click', () => {
        const renameProject = document.querySelector('.rename-project');
        renameProject.style.display = 'block';
        //Submit button
        const renameSubmit = document.querySelector('.rename-submit');
        renameSubmit.addEventListener('click', () => {
            const projectTitle = document.querySelector('#project-title');
            const renameValue = projectTitle.value;
            const selectedProjectTag = document.querySelector('.selected-project > span:nth-child(1)');
            const previousValue = selectedProjectTag.textContent;
            const selectedProject = projects.findProjectByTitle(previousValue);
            const newName = projects.renameProject(selectedProject, renameValue);
            selectedProjectTag.textContent = newName;
        });
        //Close button
        const renameClose = document.querySelector('.rename-close');
        renameClose.addEventListener('click', () => {
            renameProject.style.display = 'none';
        });
    });
};

const renderTodo = (newTodo) => {
    //Convert argument to array
    let todosArray = [];
    const isArray = Array.isArray(newTodo);
    if (!isArray) {
        todosArray.push(newTodo);
    } else {
        todosArray = newTodo;
    };

    //Make todo-item divs for each todo
    for (let i = 0; i < todosArray.length; i++) {
        const todo = todosArray[i];
        const newDiv = document.createElement('div');
        newDiv.classList.add('todo-item');

        for (let j = 0; j < 6; j++) {
            const newSpan = document.createElement('span');
            if (j == 0) {
                const newImg = document.createElement('img');
                newImg.src = circle;
                newImg.alt = 'check circle';
                newSpan.append(newImg);
            } else if (j == 1) {
                const newImg = document.createElement('img');
                newImg.src = pencil;
                newImg.alt = 'edit description';
                newSpan.append(newImg);
            } else if (j == 2) {
                const newImg = document.createElement('img');
                newImg.src = trashCan;
                newImg.alt = 'trash can';
                newSpan.append(newImg);
            } else if (j == 3) {
                newSpan.textContent = todo.title;
            } else if (j == 4) {
                newSpan.textContent = todo.dueDate;
            } else if (j == 5) {
                newSpan.textContent = todo.priority;
            };
            newDiv.append(newSpan);
            const display = document.querySelector('.todo-display-main');
            display.append(newDiv);
        };
    };
    // enableHighlighting.todoHighlighting();
};

export { renderProject, renderTodo };