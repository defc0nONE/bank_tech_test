const Transaction = require('./transaction.js')

class Account {
  constructor() {
    this.balance = 0;
    this.transactionLog = [];
    this.transactions = new Transaction();
  }

  deposit(amount) {
    this.balance += amount;
  }
}

module.exports = Account;