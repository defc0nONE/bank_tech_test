let expect = require("chai").expect;
let Account = require("../src/account.js");

describe("Account class", function() {
  beforeEach(function() {
    testAccount = new Account();
  });

  describe("Initialisation", function() {
    it("should initialise with an empty bank account", function() {
      expect(testAccount.balance).to.equal(0);
    });

    it('should initialise with an empty array', function() {
      expect(testAccount.transactionLog).to.deep.equal([])
    })
  });

  describe("Transactions", function() {
    it("can deposit money", function() {
      testAccount.deposit(100);
      expect(testAccount.balance).to.equal(100);
    });

    it("can withdraw money", function() {
      testAccount.deposit(100);
      testAccount.withdraw(50);
      expect(testAccount.balance).to.equal(50);
    });
  });
});
