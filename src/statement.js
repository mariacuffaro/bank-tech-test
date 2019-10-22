(function(exports) {

  function Statement(transactions) {
    this.header = "date || credit || debit || balance\n";
    _transactions = transactions
    body = "23/09/2019 || 500.00 || || 2000.00";
  };
    Statement.prototype.render = function(){
      if (_transactions.length == 0){return this.header}
      return `${this.header}${body}`;

    };
  exports.Statement = Statement
})(this);
