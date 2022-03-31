const enableHighlighting = (() => {
    const projectsHighlighting = () => {
        const listContainer = document.querySelector('.list-container');
        const listChildren = Array.from(listContainer.children);
        const selectedProject = document.querySelector('.selected-project');
        selectedProject.style.backgroundColor = '#ffffe6';
        listChildren.forEach(child => child.addEventListener('click', () => {
            const previousSelection = document.querySelector('.selected-project');
            previousSelection.style.backgroundColor = null;
            previousSelection.classList.remove('selected-project');
            child.classList.add('selected-project');
            child.style.backgroundColor = '#ffffe6';
        }));
    };
    projectsHighlighting();

    const todoHighlighting = () => {
        const selectionTodo = document.querySelector('.selected-todo');
        selectionTodo.style.backgroundColor = '#f2f2f2';
        const mainDisplay = document.querySelector('.todo-display-main');
        const todoItems = Array.from(mainDisplay.children);
        //Add click events to parts of todo div
        for (let i = 0; i < todoItems.length; i++) {
            const todoElements = Array.from(todoItems[i].children);
            for (let j = 0; j < todoElements.length; j++) {
                if (j > 2) {
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
    };
    todoHighlighting();

    return { projectsHighlighting, todoHighlighting }
})();

export { enableHighlighting };
