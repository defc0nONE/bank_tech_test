let expect = require("chai").expect;
let Account = require("../src/account.js");

describe("Account class", function() {
  beforeEach(function() {
    testAccount = new Account();
  });

  describe("Initialisation", function() {
    it("should initialise with an empty bank account", function() {
      expect(testAccount._balance).to.equal(0);
    });

    it("should initialise with an empty array", function() {
      expect(testAccount._transactionLog).to.deep.equal([]);
    });
  });

  describe("Transactions", function() {
    it("can deposit money", function() {
      testAccount.performTransaction("deposit", 100);
      expect(testAccount._balance).to.equal(100);
    });

    it("can withdraw money", function() {
      testAccount.performTransaction("deposit", 100);
      testAccount.performTransaction("withdraw", 50);
      expect(testAccount._balance).to.equal(50);
    });

    it("returns an error message for invalid transactionType argument", function() {
      let res = testAccount.performTransaction("donkposit", 150);
      expect(res).to.equal(
        "Invalid input, ensure transactionType is correct and that amount is an integer"
      );
    });

    it("returns an error message for amount not being an integer", function() {
      let res = testAccount.performTransaction("deposit", "all the dogs");
      expect(res).to.equal(
        "Invalid input, ensure transactionType is correct and that amount is an integer"
      );
    });
  });
});
