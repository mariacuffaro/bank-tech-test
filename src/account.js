(function(exports) {

  transactions = []
  accBalance = 0;

  function Account(balance=0) {
    accBalance = balance;
    transactions = [];
  };

  Account.prototype.balance = function() {
    return accBalance;
  };

  Account.prototype.deposit = function(amount) {
    accBalance += amount;
    transaction = new Transaction('credit',amount,new Date(),accBalance);
    transactions.push(transaction);
  };

  Account.prototype.withdraw = function(amount) {
    accBalance -= amount;
    transaction = new Transaction('debit',amount,new Date(),accBalance);
    transactions.push(transaction)
  };
  Account.prototype.statement = function() {
    statementBody = '';
    if (transactions.length == 0) { return `${statementHeader}` }
    transactions.forEach(function (transaction) {
        statementBody += `${transaction.render()}\n`;
    });
    return `${statementHeader}${statementBody.slice(0, -1)}`
  };

  exports.Account = Account
})(this);
