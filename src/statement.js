(function(exports) {

  function Statement(transactions) {
    header = "date || credit || debit || balance\n";
    transArray = transactions
    body = '';
  };

  Statement.prototype.render = function(){
    createStatementBody();
    return `${header}${body.slice(0, -1)}`
  };

  function createStatementBody() {
    transArray.reverse().forEach(function (transaction) {
      body += `${transaction.outputLine()}\n`;
    });
  };

  exports.Statement = Statement
})(this);
