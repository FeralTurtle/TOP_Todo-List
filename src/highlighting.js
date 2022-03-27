const enableHighlighting = (() => {
    const projectsHighlighting = () => {
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
    };
    projectsHighlighting();

    //Todo highlighting
    const todoHighlighting = () => {
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
    };
    todoHighlighting();
    
    return { projectsHighlighting, todoHighlighting}
})();

export { enableHighlighting };
