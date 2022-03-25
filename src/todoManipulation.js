const createTodo = (title, description, dueDate, priority) => {
    return { title, description, dueDate, priority };
};

const newItem = createTodo('title', 'a description', '02/02', 'high');
console.log(newItem);

export { createTodo };
