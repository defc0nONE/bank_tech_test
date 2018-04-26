class Account {
  constructor() {
    this._balance = 0;
    this._transactionLog = [];
  }

  performTransaction(transactionType, amount) {
    if (transactionType === "deposit" && Number.isInteger(amount) === true) {
      this._balance += amount;
    } else if (
      transactionType === "withdraw" &&
      Number.isInteger(amount) === true
    ) {
      this._balance -= amount;
    } else {
      return "Invalid input, ensure transactionType is correct and that amount is an integer";
    }
  }
}

module.exports = Account;
