let expect = require('chai').expect
let Account = require('../src/account.js')

describe('Account class', function() {
    it('should initialise with an empty bank account', function() {
        testAccount = new Account()
        expect(testAccount.balance).to.equal(0)
    })

    it('can deposit money', function() {
        testAccount = new Account()
        testAccount.deposit(100)
        expect(testAccount.balance).to.equal(100)
    })
})