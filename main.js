const imgToChange = document.querySelector('#imgToChange');
const one = 1;
const two = 10;
myNumberRandom = Math.floor(Math.random() * (two - one + 1) + one);

const imgButton = document.querySelector('#buttonImg');

imgButton.addEventListener('click', function ()  {
    myNumberRandom = Math.floor(Math.random() * (two - one + 1) + one);
    imgToChange.src =`./image/${myNumberRandom}.webp`
    console.log('Clicked');
});