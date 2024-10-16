let info = +prompt("Хотите увидеть данние о субьекте введіть код 122?");

if(info === 122) {
    let onePersonObject = {
        name: "Henrih",
        surName: "Goldschtain",
        age: 39,
        placeOfBirth: "Manhattan",
        placeOfResidence: "Canada",
        phoneNumber: +9878532065,
        email: "radanienarada@gmail.com",


        showInformation :function  () {
            console.log(`Ім'я Користувача ${this.name}`);
            console.log(`Прізвище Користувача ${this.surName}`);
            console.log(`Вік Користувача ${this.age}`);
            console.log(`місце народження Користувача ${this.placeOfBirth}`);
            console.log(`місце знаходження Користувача ${this.placeOfResidence}`);
            console.log(`номер телефону Користувача ${this.phoneNumber}`);
            console.log(`електронна пошта Користувача ${this.email}`);
            alert("данние у консолі");

        }
    };

    onePersonObject.showInformation();
} else {
    console.log("Пробачте але ми не надаємо інформацію");
    alert("Для Вас доступ заборонено");

}