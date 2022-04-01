import { renderProject, renderTodo } from "./display.js";

const projects = (() => {
    const defaultProject = {
        todos: [],
        title: 'Project',
    };
    const projectsArray = [defaultProject];

    const projectTitles = () => {
        //For each projectsArray element, push to local titles array and return it
        const titles = [];
        projectsArray.forEach(project => titles.push(project.title));
        return titles; //Return a string array of title properties
    };

    const createTodo = (title, description, dueDate, priority, project) => {
        return { title, description, dueDate, priority, project };
    };

    const createProject = (newTodo, projectTitle) => {
        const todos = [newTodo];
        const title = projectTitle;

        return { todos, title };
    };

    const renameProject = (project, renameValue) => {
        const newName = (project.title = renameValue);
        return newName;
    };

    const findProjectByTitle = (title) => {
        return projectsArray.find(element => (element.title == title));
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
            existingProject.todos.push(newTodo);
        } else {
            const newProject = createProject(newTodo, newTodo.project);
            projectsArray.push(newProject);
            renderProject(newTodo);
        };

        const selectedProject = document.querySelector('.selected-project > span:nth-child(1)');
        if (newTodo.project == selectedProject.textContent) {
            renderTodo(newTodo);
        };
    };
    return { projectsArray, createTodo, add, checkExistingProject, projectTitles, renameProject, findProjectByTitle };
})();

export { projects };