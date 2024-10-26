

let myPrompt = "";
const promptEnter = document.querySelector('#promptEnter');
const goToUrl = document.querySelector('#goToUrl')
promptEnter.addEventListener('click', () => {
     myPrompt = prompt ('Enter URL please');
});
myPrompt = "";

goToUrl.addEventListener('click', () => {
    location.href = `http://${myPrompt}`;
});