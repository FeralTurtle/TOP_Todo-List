const projects = (() => {
    const defaultProject = {
        todos: [],
        title: 'Project',
    };
    const projectsArray = [defaultProject];
    const titles = [defaultProject.title];
    //Either import sideDisplay.js displayProject method here or call in form.js in a separate step right after calling add

    const getTitles = () => {
        return titles;
    }

    const createProject = (newTodo, projectTitle) => {
        const todos = [newTodo];
        const title = projectTitle;

        return { todos , title };
    };

    //If in newTodo.project matches project's title property in projectsArray, add to projectsArray matched element's todo property (holds array of todos)
    const add = (newTodo) => {
        console.log('newTodo:');
        console.log(newTodo);
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
                console.log('adding to existing project:');
                console.log('existingProject before adding newTodo');
                console.log(existingProject);
                existingProject.todos.push(newTodo);
                console.log('existingProject after adding newTodo');
                console.log(existingProject);
            } else {
                console.log('making a new project...');
                const newProject = createProject(newTodo, newTodo.project);
                console.log('new project is:');
                console.log(newProject);
                projectsArray.push(newProject);
                titles.push(newProject.title);
            };
        };
        console.log('projectsArray');
        console.log(projectsArray);
        console.log('titles');
        console.log(titles);
    };
    return { add, getTitles };
})();

export { projects };
