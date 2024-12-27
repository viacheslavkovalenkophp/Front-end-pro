const apiUrl = "https://jsonplaceholder.typicode.com";

export const loadTodos = () => {
   return fetch(apiUrl+'/todos?_limit=15').then((response) => {
        return response.json();
    })
}

export const addTodo = (title)=> {

       return fetch(apiUrl + "/todos", {
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
            return response.json();
        })

}

export const deleteTodo = (todoId) => {
       return fetch(apiUrl + `/todos/${todoId}`, {
            method: "DELETE"
        })
}