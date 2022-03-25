const dom_temp = () => {
    console.log('dom temp');
}

const getClickables = () => {
    const addButton = document.querySelector('.add-button');
    addButton.addEventListener('click', () => console.log('hello'));
}

export { dom_temp, getClickables };
