const button = document.querySelector('#button');
const span = document.querySelector('#mySpan');

button.addEventListener('click', function ()  {
    span.style.color = span.style.color === 'red' ? '' : 'red';
    console.log('Clicked');
});