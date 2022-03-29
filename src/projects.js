const projects = (() => {
    const defaultProject = {
        todos: [],
        title: 'default',
    };
    const projectsArray = [defaultProject];
    const titles = [defaultProject.title];

    const getTitles = () => {
        return titles;
    }

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
            titles.push(newProject.title);
        };
    };
    return { add, getTitles };
})();

export { projects };
