class BankAccount {

    Balance = 0;

    constructor(money) {
        this.Balance = money;
    }

    deposit (coast) {
        this.Balance += coast;
    }
    withdraw (amount) {
        this.Balance -=amount;
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

console.log(account1.getBalance());