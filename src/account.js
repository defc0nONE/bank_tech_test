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

  dateFormatter() {
    let unformattedDate = new Date();
    let day = unformattedDate.getDate();
    let month = unformattedDate.getMonth() + 1;
    let year = unformattedDate.getFullYear();
    return [
      addZeroIfLessThanTen(day),
      addZeroIfLessThanTen(month),
      extractedYear
    ].join("/");
  }

  addZeroIfLessThanTen(number) {
    return (number < 10 ? "0" : "") + number;
  }
}

module.exports = Account;
