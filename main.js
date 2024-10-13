let company = {
    sles: [{name: `John`, salary: 1000}, {name: `Alice`, salary: 600}],
    development: {
        web: [{name: `Peter`, salary: 2000}, {name: `Alex`, salary: 1800}],
        internals: [{name: `Jack`, salary: 1300}]
    }
};

function collectSalary (company) {
    let salary = [];

    if (Array.isArray(company)) {
        company.forEach(person => {
            salary.push(person.salary);
        });
    } else {
        Object.keys(company).forEach(department => {
            salary = salary.concat(collectSalary(company[department]));
        });
    }

    return salary;
}
let salary = collectSalary(company);
let allSalaries = salary.reduce((a,b) => a + b, 0);
console.log(allSalaries);
