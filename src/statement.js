(function(exports) {

  function Statement(transactions) {
    header = "date || credit || debit || balance\n";
    _transactions = transactions
    body = '';
  };
    Statement.prototype.render = function(){
      if (_transactions.length == 0){return header}
      _transactions.reverse().forEach(function (transaction) {
          body += `${transaction.render()}\n`;
      });
      return `${header}${body.slice(0, -1)}`
    };

  exports.Statement = Statement
})(this);
