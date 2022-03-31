const projects = (() => {
    const defaultProject = {
        todos: [],
        title: 'Project',
    };
    const projectsArray = [defaultProject];
    const titles = [defaultProject.title];

    const getTitles = () => {
        return titles;
    };

    const createTodo = (title, description, dueDate, priority, project) => {
        return { title, description, dueDate, priority, project };
    };

    const createProject = (newTodo, projectTitle) => {
        const todos = [newTodo];
        const title = projectTitle;

        return { todos, title };
    };

    //Adds newTodo to a project corresponding to its project property.
    const add = (newTodo) => {
        const isExistingProject = projectsArray.some(element => {
            return ((newTodo.project == element.title) && (element.title != 'default'));
        });
        const existingProject = projectsArray.find(element => {
            return ((newTodo.project == element.title) && (element.title != 'default'));
        });

        if (newTodo.project == 'none') {
            defaultProject.todos.push(newTodo);
        } else {
            if (isExistingProject) {
                existingProject.todos.push(newTodo);
            } else {
                const newProject = createProject(newTodo, newTodo.project);
                projectsArray.push(newProject);
                titles.push(newProject.title);
            };
        };
        console.log(newTodo);
        console.log(projectsArray);
        console.log(titles);
    };
    return { createTodo, add, getTitles };
})();

export { projects };