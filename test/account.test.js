let expect = require("chai").expect
let Account = require("../src/account.js")

describe("Account class", function() {
  beforeEach(function() {
    testAccount = new Account();
  });

  describe("Initialisation", function() {
    it("has an empty balance of 0", function() {
      expect(testAccount.balance).to.equal(0);
    });

    it('has an empty transaction log', function () {
      expect(testAccount.transactionLog).to.deep.equal([]);
    })
  });
});
