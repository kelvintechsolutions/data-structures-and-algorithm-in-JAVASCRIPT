function Checking(amount) {
    this.balance = amount;
    this.deposit = deposit;
    this.withdraw = withdraw;
    this.toString = toString;
}

function deposit(amount) {
    this.balance += amount;
}

function withdraw(amount) {
    if (amount <= this.balance) {
        this.balance -= amount;
    } else {
        console.log("Insufficient funds");
    }
}

function toString() {
    return "Balance: " + this.balance;
}

// Replace var with let or const
const account = new Checking(500);  // Use const because account is not reassigned
account.deposit(1000);
console.log(account.toString());  // Balance: 1500
account.withdraw(950);
console.log(account.toString());  // Balance: 750
account.withdraw(800);  // displays "Insufficient funds"
console.log(account.toString());  // Balance: 750
