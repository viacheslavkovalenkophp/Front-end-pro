const API_URL = 'http://localhost:3000/api/todos';

async function fetchTodos() {
    const response = await fetch(API_URL);
    const todos = await response.json();
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    todos.forEach((todo) => {
        const li = document.createElement('li');
        li.textContent = `${todo.title} - ${todo.completed ? 'Completed' : 'Pending'}`;
        todoList.appendChild(li);
    });
}

async function addTodo() {
    const input = document.getElementById('new-todo');
    const title = input.value.trim();
    if (!title) return alert('Title is required');
    await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title }),
    });
    input.value = '';
    fetchTodos();
}

fetchTodos();
