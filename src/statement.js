(function(exports) {

  function Statement(transactions) {
    this.header = "date || credit || debit || balance\n";
    _transactions = transactions
    body = '';
  };
    Statement.prototype.render = function(){
      if (_transactions.length == 0){return this.header}
      _transactions.reverse().forEach(function (transaction) {
          body += `${transaction.render()}\n`;
      });
      return `${this.header}${body.slice(0, -1)}`
    };

  exports.Statement = Statement
})(this);
