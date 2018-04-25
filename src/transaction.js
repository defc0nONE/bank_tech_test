class Transaction {
  constructor() {}

  deposit(amount) {
    this.balance += amount;
  }
}

module.exports = Transaction;
