const todoList = document.querySelector('#todo-list');

export const addTodosToDom = (todo) => {
    const li = document.createElement('li');
    li.dataset.id = todo.id;
    li.innerHTML = `
    ${todo.title}
        <button class="delete">Delete</button>
    `;
    todoList.appendChild(li);
}

export const clearTodoList = () => {
    todoList.innerHTML = "" ;
}

export const removeTodoFromDom = (element) => {
    element.remove();
}