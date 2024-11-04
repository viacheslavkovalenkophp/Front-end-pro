const slideContainerContent = document.querySelector('#slide_container_content-id');
const buttonNavOne = document.querySelector('#button_nav-one');
const buttonNavTwo = document.querySelector('#button_nav-two');
const buttonNavThree = document.querySelector('#button_nav-three');
const buttonNavFour = document.querySelector('#button_nav-four');

let currentSlideIndex = 0;
const myButtonFwd = document.querySelector('#slide_container-fwd-btn');
const myButtonPrv = document.querySelector('#slide_container-prev-btn');

function updateSlideNavigation () {
    buttonNavOne.classList.remove("button_nav-color");
    buttonNavTwo.classList.remove("button_nav-color");
    buttonNavThree.classList.remove("button_nav-color");
    buttonNavFour.classList.remove("button_nav-color");
}

function mySlideNavigation () {
    if (currentSlideIndex === 0) {
        document.querySelector('#button_nav-one').classList.add("button_nav-color");
    } else if (currentSlideIndex === 1) {
        document.querySelector('#button_nav-two').classList.add("button_nav-color");
    } else if (currentSlideIndex === 2) {
        document.querySelector('#button_nav-three').classList.add("button_nav-color");
    } else if (currentSlideIndex === 3) {
        document.querySelector('#button_nav-four').classList.add("button_nav-color");
    }
}


function mySlidesFwd() {
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;
    slideContainerContent.innerHTML = " ";
    slideContainerContent.appendChild(slides[currentSlideIndex]);
    myButtonPrv.style.display = "block";
    if (currentSlideIndex === slides.length - 1) {
        myButtonFwd.style.display = "none";
    } else {
        myButtonFwd.style.display = "block";
    }
    updateSlideNavigation ();
    mySlideNavigation ();
}

function mySlidesPrv() {
    currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
    slideContainerContent.innerHTML = " ";
    slideContainerContent.appendChild(slides[currentSlideIndex]);
    myButtonFwd.style.display = "block";
    if (currentSlideIndex === 0) {
        myButtonPrv.style.display = "none";
    } else {
        myButtonPrv.style.display = "block";
    }
    updateSlideNavigation ();
    mySlideNavigation ();
}



const slide1 = document.createElement('div');
slide1.innerHTML = `<div class="img">
<img class="imgSlide" src="./img/2e32ba13991.jpg" alt="yourPhoto1">
<div class="img_description">
<h2>Це Заголовок 1</h2>
<p>Це Параграф 1</p>
<span>Це Спан 1</span>
</div>
</div>`;

const slide2 = document.createElement('div');
slide2.innerHTML = `<div class="img">
<img class="imgSlide" src="./img/77ec82ff9319.jpg" alt="yourPhoto2">
<div class="img_description">
<h2>Це Заголовок 2</h2>
<p>Це Параграф 2</p>
<span>Це Спан 2</span>
</div>
</div>`;

const slide3 = document.createElement('div');
slide3.innerHTML = `<div class="img">
<img class="imgSlide" src="./img/8002fe15f3f6.jpg" alt="yourPhoto3">
<div class="img_description">
<h2>Це Заголовок 3</h2>
<p>Це Параграф 3</p>
<span>Це Спан 3</span>
</div>
</div>`;

const slide4 = document.createElement('div');
slide4.innerHTML = `<div class="img">
<img class="imgSlide" src="./img/80876014ee70.jpg" alt="yourPhoto4">
<div class="img_description">
<h2>Це Заголовок 4</h2>
<p>Це Параграф 4</p>
<span>Це Спан 4</span>
</div>
</div>`;

let slides = [slide1, slide2, slide3, slide4];
const slideContainerContentItem =document.querySelector('#slide_container_content-item-id')
    .appendChild(slide1);
buttonNavOne.classList.add("button_nav-color");

myButtonFwd.addEventListener('click', mySlidesFwd);
myButtonPrv.addEventListener('click', mySlidesPrv);


buttonNavOne.addEventListener('click', () => {
    slideContainerContent.innerHTML = " ";
    slideContainerContent.appendChild(slide1);
    myButtonPrv.style.display = "none";
    updateSlideNavigation ();
    buttonNavOne.classList.add("button_nav-color");
});
buttonNavTwo.addEventListener('click', () => {
    slideContainerContent.innerHTML = " ";
    slideContainerContent.appendChild(slide2);
    myButtonPrv.style.display = "block";
    myButtonFwd.style.display = "block";
    updateSlideNavigation ();
    buttonNavTwo.classList.add("button_nav-color");
});
buttonNavThree.addEventListener('click', () => {
    slideContainerContent.innerHTML = " ";
    slideContainerContent.appendChild(slide3);
    myButtonPrv.style.display = "block";
    myButtonFwd.style.display = "block";
    updateSlideNavigation ();
    buttonNavThree.classList.add("button_nav-color");
});

buttonNavFour.addEventListener('click', () => {
    slideContainerContent.innerHTML = " ";
    slideContainerContent.appendChild(slide4);
    myButtonFwd.style.display = "none";
    updateSlideNavigation ();
    buttonNavFour.classList.add("button_nav-color");

});
