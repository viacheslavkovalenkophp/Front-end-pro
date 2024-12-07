const apiUrl = "https://jsonplaceholder.typicode.com"
const todoList = document.querySelector('#post-list');
const addPost = document.querySelector('#form-post');

function loadPosts () {
    fetch (apiUrl + `/posts?_limit=10`)
        .then(response => response.json ()
        ).then((data) => {
        todoList.innerHTML = "";
        data.forEach(post => addPostsToDom(post));
    }).catch(err => {
        console.log (err);
    })
}

function addComments (postId) {
    fetch (apiUrl + `/posts/${postId}/comments?_limit=2`)
        .then((response) => response.json ()
        ).then((data) => {
        const postItem = document.querySelector(`[data-id='${postId}']`).parentElement;
        const commentsDiv = document.createElement('div');
        commentsDiv.classList.add('comments');

        data.forEach(comment => {
            const commentText = document.createElement('p');
            commentText.innerHTML = `<strong>${comment.name}:</strong> ${comment.body}`;
            commentsDiv.appendChild(commentText);
        });

        postItem.appendChild(commentsDiv);
        const button = postItem.querySelector('.addcomments');
        button.disabled = true;
    }).catch(err => {
        console.log (err);
    });
}

function addPostsToDom (post) {
    const li = document.createElement('li');
    li.innerHTML = `${post.title} <button class="addcomments" data-id="${post.id}">Add Comments</button>`;
    todoList.appendChild(li);
}
addPost.addEventListener('submit', function (event) {
    event.preventDefault();

    const title = document.querySelector('#title').value;
    const body = document.querySelector('#body').value;

    const newPost = {
        title: title,
        body: body,
        userId: 1,
    };

    fetch(apiUrl + '/posts', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify(newPost),
    })
        .then(response => response.json())
        .then(post => {
            addPostsToDom(post);
            addPost.reset();
        }).catch(err => {
            console.log(err);
    });



});
todoList.addEventListener('click', function (event) {
    if (event.target.classList.contains('addcomments')) {
        const postId = event.target.getAttribute('data-id');
        addComments(postId);
    }
})

loadPosts ();


