const projects = (() => {
    const defaultProject = {
        todos: [],
        title: 'default',
    };
    const projectsArray = [defaultProject];

    const createProject = (newTodo, projectTitle) => {
        const todos = [newTodo];
        const title = projectTitle;

        return { todos , title };
    };

    const add = (newTodo) => {
        if (newTodo.project == 'none') {
            defaultProject.todos.push(newTodo);
        } else {
            const newProject = createProject(newTodo, newTodo.project);
            projectsArray.push(newProject);
            console.log(projectsArray);
        };
    };
    return { add };
})();

export { projects };
