const orderForm = document.querySelector('#orderForm');
const userName = orderForm.querySelector('#userName');
const userComment = orderForm.querySelector('#userComment');
const userPhoneNumber = orderForm.querySelector('#userPhoneNumber');
const userEmail = orderForm.querySelector('#userEmail');


const userNameError = orderForm.querySelector('#userNameError');
const userCommentError = orderForm.querySelector('#userCommentError');
const userPhoneNumberError = orderForm.querySelector('#userPhoneNumberError');
const userEmailError = orderForm.querySelector('#userEmailError');
const userNameErrorLat = orderForm.querySelector('#userNameErrorLat');
userInfo = {};

function validateForm () {
    let isValid = true;

    if (!userInfo.userName) {
        userNameError.textContent = "Ім'я це обов'язково !";
        isValid = false;
    } else if (!/^[а-яА-ЯЁё]+$/.test(userInfo.userName)) {
        userNameErrorLat.textContent = "Введіть Ім'я ланиницею";
        isValid = false;
    }
    if (!/^\+380\d{9}$/.test(userInfo.userPhoneNumber)) {
        userPhoneNumberError.textContent = "Введіть правильний номер телефону у форматі: Код +380 та 9 цифр номеру!";
        isValid = false;
    }
    if (!/^[\w.-]+@[\w.-]+\.[a-zA-Z]{2,}$/.test(userInfo.userEmail)) {
        userEmailError.textContent = "Введіть правильну електронну пошту !";
        isValid = false;
    }
    if (userInfo.userComment.length <= 4) {
        userCommentError.textContent = "Комментар має бути бвльш 5 символів !";
        isValid = false;
    }
    return isValid;
}

function clearErr () {
    userNameError.textContent = "";
    userCommentError.textContent = "";
    userPhoneNumberError.textContent = "";
    userEmailError.textContent = "";
    userNameErrorLat.textContent = "";
}

orderForm.addEventListener('submit', (e) => {
    e.preventDefault();
    clearErr ();
    userInfo.userName = orderForm.userName.value.trim();
    userInfo.userPhoneNumber = orderForm.userPhoneNumber.value.trim();
    userInfo.userEmail = orderForm.userEmail.value.trim();
    userInfo.userComment = orderForm.userComment.value.trim();

    if (validateForm()) {
        console.log("User Data", userInfo);
    } else {
        console.log("Data is invalid")
    }
});