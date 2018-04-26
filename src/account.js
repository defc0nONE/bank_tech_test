class Account {
  constructor() {
    this.balance = 0;
    this.transactionLog = [];
  }

  deposit(amount) {
    this.balance += amount;
  }

  withdraw(amount) {
    this.balance -= amount;
  }
}

module.exports = Account;
