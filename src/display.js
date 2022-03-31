import dots from './icons/dots.png';
import circle from './icons/empty-circle.png';
import pencil from './icons/edit.png';
import trashCan from './icons/trash-can.png';
import { enableHighlighting } from './highlighting.js';
import { projects } from './projects.js';

const renderProject = (newTodo) => {
    // const isExistingProject = projects.checkExistingProject(newTodo);
    // if (!isExistingProject) { //&& !(newTodo.project == '')
    //     console.log('not existing project.. rendering project...');
        const newDiv = document.createElement('div');
        newDiv.classList.add('project-item');
        const titleSpan = document.createElement('span');
        titleSpan.textContent = newTodo.project;
        const dotsDiv = document.createElement('div');
        const dotsImg = document.createElement('img');
        dotsImg.classList.add('dots');
        dotsImg.src = dots;
        dotsImg.alt = 'dots';
        dotsDiv.append(dotsImg);
        newDiv.append(titleSpan);
        newDiv.append(dotsDiv);
        const projectsDisplay = document.querySelector('.list-container');
        projectsDisplay.append(newDiv);
    // } else {
    //     console.log('is existing project.. not rendering project...');
    // };
};

const renderTodo = (newTodo) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('todo-item');

    for (let i = 0; i < 6; i++) {
        const newSpan = document.createElement('span');
        //Add event listeners for each individual span
        //include mark as complete functionality.
        if (i == 0) {
            const newImg = document.createElement('img');
            newImg.src = circle;
            newImg.alt = 'check circle';
            newSpan.append(newImg);
        } else if (i == 1) {
            const newImg = document.createElement('img');
            newImg.src = pencil;
            newImg.alt = 'edit description';
            newSpan.append(newImg);
        } else if (i == 2) {
            const newImg = document.createElement('img');
            newImg.src = trashCan;
            newImg.alt = 'trash can';
            newSpan.append(newImg);
        } else if (i == 3) {
            newSpan.textContent = newTodo.title;
        } else if (i == 4) {
            newSpan.textContent = newTodo.dueDate;
        } else if (i == 5) {
            newSpan.textContent = newTodo.priority;
        };
        newDiv.append(newSpan);
        const display = document.querySelector('.todo-display-main');
        display.append(newDiv);
    };
    renderProject(newTodo);
    enableHighlighting.todoHighlighting();
    enableHighlighting.projectsHighlighting();
};

export { renderProject, renderTodo };
