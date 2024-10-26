const myList = document.querySelector('#myList');
const button = document.querySelector('#button');
const input = document.querySelector('#input');

button.addEventListener('click', () => {
    const newLi = document.createElement('li');
    newLi.textContent = input.value;
    myList.appendChild(newLi);
    newLi.addEventListener('click', () => {
        newLi.classList.add('pointer');
        newLi.classList.toggle("line");

    });
    input.value = "";

    const btnDelete = document.createElement('Button');
    btnDelete.textContent = 'Delete';
    newLi.appendChild(btnDelete);
    btnDelete.addEventListener('click', ()=> {
        myList.removeChild(newLi);
    })
});