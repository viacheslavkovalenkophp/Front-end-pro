const apiUrl = "https://jsonplaceholder.typicode.com"
const todoList = document.querySelector('#post-list');
const addPost = document.querySelector('#form-post');

const loadPostsAsync = async () => {
    try {
        const response = await fetch (apiUrl + `/posts?_limit=10`);
        if (!response.ok) {
            throw new Error (`HTTP ERROR ${response.status}`)
        }
        const data = await response.json();
        todoList.innerHTML = "";
        data.forEach(post => addPostsToDom(post));
        console.log(data);
    }
    catch (error){
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    }
    finally {
        console.log("Має бути добре");
    }
}

const addCommentsAsync = async (postId) => {
    try {
        const response = await fetch (apiUrl + `/posts/${postId}/comments?_limit=2`);
        if (!response.ok) {
            throw new Error(`HTTP ERROR ${response.status}`);
        }
        const data = await response.json();

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
    }
    catch (error){
        console.log(error.name);
        console.log(error.message);
        console.log(error.stack);
    }
    finally {
        console.log("Має бути добре");
    }
}

function addPostsToDom (post) {
    const li = document.createElement('li');
    li.innerHTML = `${post.title} <button class="addcomments" data-id="${post.id}">Add Comments</button>`;
    todoList.appendChild(li);
}

    addPost.addEventListener('submit', async function (event) {
        event.preventDefault();
        const title = document.querySelector('#title').value;
        const body = document.querySelector('#body').value;
        const newPost = {
            title: title,
            body: body,
            userId: 1,
        };

        try {
            const response = await
            fetch(apiUrl + '/posts', {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(newPost),
            })
            if (!response.ok) {
            throw new Error (`HTTP ERROR ${response.status}`);
            }
            const post = await response.json();
                addPostsToDom(post);
                    addPost.reset();
                } catch(error)  {
                    console.log(error.name);
                    console.log(error.message);
                    console.log(error.stack);
                }
        finally {
        console.log ("Має бути добре")
        }

});
todoList.addEventListener('click', function (event) {
    if (event.target.classList.contains('addcomments')) {
        const postId = event.target.getAttribute('data-id');
        addCommentsAsync(postId);
    }
})

loadPostsAsync ();

