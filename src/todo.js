import circle from './icons/empty-circle.png';
import pencil from './icons/edit.png';
import { enableHighlighting } from './highlighting.js';

const createTodo = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
};

const createTodoElement = () => {
    const newTodo = document.createElement('div');
    newTodo.classList.add('todo-item');

    for (let i = 0; i < 5; i++) {
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
            newSpan.textContent = 'Todo-item';
        } else if (i == 3) {
            newSpan.textContent = 'Date';
        } else if (i == 4) {
            newSpan.textContent = 'Priority';
        };
        newTodo.append(newSpan);
        const display = document.querySelector('.todo-display-main');
        display.append(newTodo);
    };
    enableHighlighting.todoHighlighting();
};

export { createTodo, createTodoElement };
