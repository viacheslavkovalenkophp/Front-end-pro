const myFirstTable = document.querySelector('#myFirstTable');

const myTable = document.createElement('myTable');
myTable.style.borderSpacing = '10px';
for(let tr = 0 ; tr <= 9 ; tr ++) {
    const row = document.createElement('tr');
    for(let td = 0 ; td <= 9 ; td ++) {
        const cage = document.createElement('td');
        cage.style.backgroundColor = 'yellow'
        cage.style.gap = '20px';
        cage.style.border = '5px solid red';
        cage.style.width = '40px';
        cage.style.height = '40px';
        row.appendChild(cage);
    }
    myTable.appendChild(row);
}
myFirstTable.appendChild(myTable);