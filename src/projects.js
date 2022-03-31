import { renderProject, renderTodo } from "./display.js";

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

    const checkExistingProject = (newTodo) => {
        const isExistingProject = (element) => ((newTodo.project == element.title) && (element.title != 'default'));
        return projectsArray.some(isExistingProject);
    };

    const findExistingProject = (newTodo) => {
        const foundProject = projectsArray.find(element => ((newTodo.project == element.title) && (element.title != 'default')));
        return foundProject;
    };

    //Adds newTodo to a project corresponding to its project property.
    const add = (newTodo) => {
        const isExistingProject = checkExistingProject(newTodo);
        const existingProject = findExistingProject(newTodo);

        if (isExistingProject) {
            console.log('pushing newTodo to existing project');
            existingProject.todos.push(newTodo);
        } else {
            console.log('making new project...');
            const newProject = createProject(newTodo, newTodo.project);
            projectsArray.push(newProject);
            titles.push(newProject.title);
            renderProject(newTodo);
        };
        // console.log(newTodo);
        // console.log(projectsArray);
        // console.log(titles);
    };
    return { createTodo, add, getTitles, checkExistingProject };
})();

export { projects };