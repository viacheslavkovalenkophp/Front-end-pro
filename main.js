const body = document.querySelector('#body');
body.addEventListener('mouseup', (event) => {
    console.log(event.target);
    console,log
});

const btn1 = document.createElement('button');
btn1.textContent = 'button1';
btn1.id = 'btn1';
btn1.classList.add('red');
body.appendChild(btn1);

const btn2 = document.createElement('button');
btn2.textContent = 'button2';
btn2.id = 'btn2';
body.appendChild(btn2);

const btn3 = document.createElement('button');
btn3.textContent = 'button3';
btn3.id = 'btn3';
body.appendChild(btn3);