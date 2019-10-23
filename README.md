## Specification

### Requirements

* You should be able to interact with your code via a REPL like IRB or the JavaScript console.  (You don't need to implement a command line interface that takes input from STDIN.)
* Deposits, withdrawal.
* Account statement (date, amount, balance) printing.
* Data can be kept in memory (it doesn't need to be stored to a database or anything).

### Acceptance criteria

**Given** a client makes a deposit of 1000 on 10-01-2012  
**And** a deposit of 2000 on 13-01-2012  
**And** a withdrawal of 500 on 14-01-2012  
**When** she prints her bank statement  
**Then** she would see

```
date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00
```

## Approach
```
I chose to create a Javascript application and used the Jasmine framework to test my code.

I started by creating a domain model I then used test driving in the console and TDD to create my code.

Some example console interactions...

acc = new Account(3000) - balance is 3000
acc.deposit(500)
acc.balance() - balance is 3500
acc.withdraw(250)
acc.balance() - balance is 3250
acc.statement() - gets transactions from the account and prints to the console in reverse date order.

"date || credit || debit || balance
23/10/2019 || || 4000.00 || -750.00
23/10/2019 || || 250.00 || 3250.00
23/10/2019 || 500.00 || || 3500.00"

let date1 = new Date('Jan 10 2012')
let t1 = new Transaction('credit',1000,date1, 1000);
let date2 = new Date('Jan 13 2012')
let t2 = new Transaction('credit',2000,date2, 3000);
let date3 = new Date('Jan 14 2012')
let t3 = new Transaction('debit',500,date3, 2500);
multipleTrans = [t1, t2, t3]
statement = new Statement(multipleTrans)
statement.render()

"date || credit || debit || balance
14/01/2012 || || 500.00 || 2500.00
13/01/2012 || 2000.00 || || 3000.00
10/01/2012 || 1000.00 || || 1000.00"

```
## Domain model

****
```sequence {theme="hand"}
Account->Transactions: has array of
Statement->Transactions: prints list of
```

## Terminal instructions for downloading and running the app

* git clone git@github.com:mariacuffaro/bank-tech-test.git
* cd to project folder
* npm install
* open index.html to run the app
* open SpecRunner.html to run the tests
