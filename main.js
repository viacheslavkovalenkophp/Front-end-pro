function Student (firstName, lastName, dateOfBirth) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dateOfBirth = dateOfBirth;
    this.yearOfBirth = +prompt("Enter Your year of birth!");
    const addSAndG = document.querySelector('#addSubjectsAndGrades');

    this.grades = [];
    this.attendance = [];
    console.log();
    this.averageGrade = function () {
        const total = this.grades.reduce((acc, grade) => acc + grade.grade, 0);
        return total / this.grades.length;
    }

    this.getAge = function () {
        dateOfBirth = 2024 - this.yearOfBirth;
        console.log(dateOfBirth);
    }

    const positive = document.querySelector('#addPresent');
    this.present = function () {
        if (this.attendance.length >= 25) {
            console.log('Лимит посещаемости достигнут');
            return;
        }
        this.attendance.push(true);
        console.log(this.attendance);
    }

    const negative = document.querySelector('#addAbsent');
    this.absent = function () {

        if (this.attendance.length >= 25) {
            console.log('Лимит посещаемости достигнут');
            return;
        }
        this.attendance.push(false);
        console.log(this.attendance);
    }
    if (positive) {
        positive.addEventListener('click', this.present.bind(this));
    }
    if (negative) {
        negative.addEventListener('click', this.absent.bind(this));
    }

    this.calcAttendance = function () {
        return this.attendance.reduce((acc, present) => acc + (present ? 0 : 1), 0);
    }


    addSAndG.addEventListener('click', () => {
        const subject = document.querySelector('#subject').value;
        const grade = document.querySelector('#grade').value;
        this.addGrade(subject,grade);
    });
    this.addGrade = function (subject,grade) {
       this.grades.push({subject,grade: +(grade)});
       console.log(`Добавка ${subject} - ${grade}`)
    }




    this.summary = function () {
        const absentCount = this.calcAttendance();
        const attendanceCount = this.attendance.length - absentCount;
        const attendancePercentage = attendanceCount / this.attendance.length;

        if (this.averageGrade() > 90 && attendancePercentage > 0.9) {
            console.log('Молодець');
        } else if (this.averageGrade() > 90 || attendancePercentage > 0.9) {
            console.log('Молодець, но можно и лучше');
        } else {
            console.log('Редиска');
        }
    }
    document.querySelector('#schoose').addEventListener('click', this.summary.bind(this));


}

const Lui = new Student('Lui', 'Malkov', 1985);
Lui.getAge();
/*const Alex = new Student('Alex', 'Smith', 2000);
Alex.getAge(1985);
Alex.calcAttendance();
Alex.addGrade();
Alex.summary();

const Alice = new Student('Alice', 'Smith', 2000);
Alice.getAge(1985);
Alice.calcAttendance();
Alice.addGrade();
Alice.summary();

const Bob = new Student('Bob', 'Smith', 2000);
Bob.getAge(1985);
Bob.calcAttendance();
Bob.addGrade();
Bob.summary();*/



