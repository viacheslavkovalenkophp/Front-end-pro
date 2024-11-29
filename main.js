/*fetch('http://jsonplaceholder.typicode.com/todos').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});


setInterval(() => {
    fetch('http://jsonplaceholder.typicode.com/todos').then((response) => {
    return response.json();
}).then((data) => {
    console.log(data);
}).catch((err) => {
    console.log(err);
});},20000);*/


/*const xhr = new XMLHttpRequest();
xhr.open('GET','http://jsonplaceholder.typicode.com/todos', true);
xhr.onreadystatechange = function () {
    if (xhr.status === 200) {
        const response = JSON.parse(xhr.responseText);
        console.log (response);
       // console.log (xhr.responseText);
    }
}
xhr.send();*/

/*let number = 2 ;
let button = document.querySelector('#click');
function multiplay () {
    number *= 2 ;
    console.log (number);
    return number;
}
setInterval(multiplay, 1000);
let numbers = 2 ;
let buttons = document.querySelector('#click');
function multiplays () {
    numbers += 2 ;
    console.log (numbers);
    return numbers;
}
setInterval(multiplays, 1000);*/

const apiUrl = "http://jsonplaceholder.typicode.com";
const todoList = document.querySelector('#todo-list');
const todoForm = document.querySelector('#todo-form');
const addTodoInput = document.querySelector('#new-todo');

const loadTodos = () => {
    fetch(apiUrl+'/todos?_limit=15').then((response) => {
        return response.json();
    }).then((data) => {
        console.log (data);
        addTodosToDom (data);
    }).catch((err) => {
        console.log(err);
    })
}
const addTodosToDom = (todos) => {
    todoList.innerHTML = '';
    todos.forEach((todo) => {
    const li = document.createElement('li');
    li.innerHTML = `
    ${todo.title}
        <button class="delete">Delete</button>
    `;
    todoList.appendChild(li);
    });
}

todoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const title = addTodoInput.value.trim();
    if (title) {
        fetch(apiUrl + "/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                    title: title,
                    completed: false
                })
        }).then((response) => {
            console.log (response);
        }).catch((err) => {
            console.log(err);
        })
    }
});


loadTodos ();



