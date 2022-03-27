//Site entry point
import './styles.css';
import { createTodo, createTodoElement } from './todo.js';
//IIFEs
import { form } from './form.js';
import { enableHighlighting } from './highlighting.js';
import { projects } from './projects.js';

createTodoElement();
console.log(projects.projectsArray);
projects.projectsArray.push('hello');
console.log(projects.projectsArray);