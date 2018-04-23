# Bank Tech Test

## Discussion
- Language used: JavaScript (written in ES6)
- TDD using Mocha/Chai

## Requirements
- Used within a console
- User able to deposit/withdraw
- Printing out statements (in the following format: date / amount / balance)
- Data does *not* need to persist upon console close.

## Acceptance Criteria
- User deposits **1000** on **10/1/2012**
- User deposits **2000** on **13/1/2012**
- User withdraws **500** on **14/1/2012**
- Statement output should appear like:
```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
