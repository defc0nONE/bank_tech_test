let expect = require("chai").expect;
let Transaction = require("../src/transaction.js");
let Account = require("../src/account.js");

describe("Transaction class", function() {
  beforeEach(function() {
    testAccount = new Account();
  });

  it("Adds 100 pounds to an account", function() {
    testAccount.deposit(100);
    expect(testAccount.balance).to.equal(100);
  });
});
