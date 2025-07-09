class Account {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }
  bank = "Nabil";
  deposite(amount) {
    this.balance += amount;
    console.log(`${this.balance}`);
  }
}

const mini = new Account("mini", 20);
const fizz = new Account("fizz", 200);
console.log(mini.name);
console.log(mini.bank);
console.log(fizz.bank);
fizz.deposite(50);
mini.deposite(50);
