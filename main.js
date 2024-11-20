class BankAccount {
    Balance = 0;
    constructor(money) {
        this.Balance = money;
    }
    deposit (coast) {
        this.Balance += coast;
        console.log (`Додано ${coast}. Баланс: ${this.Balance}`);
    }
    deposits (coast) {
        this.Balance += coast;
        console.log (`Додано ${coast} Баланс ${this.Balance}`);
    }
    withdraw (amount) {
        if (this.Balance >= amount) {
            this.Balance -= amount;
            console.log(`Знято ${amount} Залишок ${this.Balance}`);
        } else {console.log ("Баланс не може бути від'ємним");
        }
    }
    getBalance () {
        return this.Balance
    }
}
const account1 = new BankAccount(1000);
console.log(account1.getBalance());
account1.deposit(500);
console.log(account1.getBalance());
account1.withdraw(200);
account1.deposits(1200);
console.log(account1.getBalance());

const account2 = new BankAccount(1000);
console.log(account2.getBalance());
account2.deposit(500);
console.log(account2.getBalance());
account2.withdraw(200);
account2.deposits(1200);
console.log(account2.getBalance());


const accounts = [account1,account2];
console.log(accounts);

function totalBalance (account1,account2) {
    const total = account1.getBalance() + account2.getBalance();
    console.log(`Сума рахунків ${total}`);
}

totalBalance(account1,account2);

/*function totalBalance () {
    const total = accounts.reduce((acc,account) => acc + account.getBalance(), 0
    ); console.log(total);
}

totalBalance();*/