const addExercise = document.querySelector('#addExercise');
const inputValue = document.querySelector('#inputValue');
const containerExercise = document.querySelector('#containerExercise');

let todoItems =  JSON.parse(localStorage.getItem('todoItems')) || [] ;
console.log(todoItems);
renderSawedItems();

addExercise.addEventListener('click', (event) =>{
    const newExercise = document.createElement('li');
    newExercise.classList.add('todo-item');
    const deleteExercise = document.createElement('button');
    deleteExercise.textContent = "Видалити";
    deleteExercise.classList.add('todo-item__delete');
    const inCheckBox = document.createElement('input');
    const addText = document.createElement('span');
    inCheckBox.type = 'checkbox';
    newExercise.appendChild(addText);
    addText.classList.add('todo-item__description');
    addText.textContent = inputValue.value;
    newExercise.insertBefore(inCheckBox, newExercise.firstChild);
    newExercise.appendChild(deleteExercise);
    containerExercise.appendChild(newExercise);

    todoItems.push({
        text: inputValue.value,
        checked: false
    });
    saveCartToLocalStorage();

    inCheckBox.addEventListener('change', () => {
        newExercise.classList.toggle('todo-item--checked');
        const index = todoItems.findIndex(item => item.text === inputValue.value);
        if (index !== -1) {
            todoItems[index].checked = inCheckBox.checked;
            saveCartToLocalStorage();
        }
    });

    inputValue.value = " ";
    event.preventDefault();

    deleteExercise.addEventListener('click', () => {
        containerExercise.removeChild(newExercise);
        todoItems = todoItems.filter(item => item.text !== inputValue.value);
        saveCartToLocalStorage();
    });
    saveCartToLocalStorage ();
});

function saveCartToLocalStorage () {
    localStorage.setItem('todoItems', JSON.stringify(todoItems));
}

function renderSawedItems() {
    todoItems.forEach(item => {
        const newExercise = document.createElement('li');
        newExercise.classList.add('todo-item');
        const deleteExercise = document.createElement('button');
        deleteExercise.textContent = "Видалити";
        deleteExercise.classList.add('todo-item__delete');
        const inCheckBox = document.createElement('input');
        inCheckBox.type = 'checkbox';
        inCheckBox.checked = item.checked;
        const addText = document.createElement('span');
        addText.classList.add('todo-item__description');
        addText.textContent = item.text;
        newExercise.appendChild(addText);
        newExercise.insertBefore(inCheckBox, newExercise.firstChild);
        newExercise.appendChild(deleteExercise);
        containerExercise.appendChild(newExercise);
        inCheckBox.addEventListener('change', () => {
            newExercise.classList.toggle('todo-item--checked');
            item.checked = inCheckBox.checked;
            saveCartToLocalStorage();
        });
        deleteExercise.addEventListener('click', () => {
            containerExercise.removeChild(newExercise);
            todoItems = todoItems.filter(savedItem => savedItem.text !== item.text);
            saveCartToLocalStorage();
        });
    });
}
