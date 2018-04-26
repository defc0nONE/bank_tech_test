# Bank Tech Test

## Discussion
- Language used: JavaScript (written in ES6)
- TDD using Mocha/Chai for assertions/expects, Chronomancer to mock dates
- Istanbul to display test coverage

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
```
---
## Current Personal Goals (likely to change throughout commits)
 - Deliver MVP with functionality
    - Currently defined as meeting the acceptance criteria
 - Build clean code via TDD with DRY and SOLID principles
 - Tackle in a language uncomfortable with
 - Once MVP achieved, refactor where possible (as long as sensible)
## User Stories
```
As a user
So I have somewhere to keep my salary safe
I would like to deposit money into my account

As a user
So I can spend my rapidly accruing interest
I would like to withdraw money from my account

As a user
So I can ensure my money is not being siphoned off
I would like to see a history of my transactions

As a user
So I can appropriately pay my taxes for the year
I would like to see the dates of my transaction history

As a user
So I can figure out when I last did my groceries
I would like my transactions listed in reverse chronological order
```
## Initial Diagram
![Initial Diagram](/images/initial_diagram.png)