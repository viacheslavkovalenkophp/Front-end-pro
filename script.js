import {loadTodos,addTodo,deleteTodo} from "./api.js";
import {addTodosToDom,clearTodoList,removeTodoFromDom} from "./dom.js"
const todoForm = document.querySelector('#todo-form');
const addTodoInput = document.querySelector('#new-todo');
const todoList = document.querySelector('#todo-list');

const handleLoadTodos = () => {
    loadTodos().then(data => {
        clearTodoList();
        data.forEach(todo => addTodosToDom(todo));
    }).catch(err => {
        console.log(err);
    })
}

const handleAddTodo = (event)=> {
    event.preventDefault();

    const title = addTodoInput.value.trim();
    if (title) {addTodo(title).then(data => addTodosToDom(data)).catch(err => console.log(err));
    }
}
const handleDeleteTodo = (event) => {
    if (event.target.classList.contains('delete')) {
        const todoId = event.target.parentElement.dataset.id;
        deleteTodo(todoId).then(() => {removeTodoFromDom(event.target.parentElement)})
            .catch(err => {
                console.log(err);
            })
    }
}
todoForm.addEventListener('submit', handleAddTodo);
todoList.addEventListener('click',handleDeleteTodo);
handleLoadTodos ();


