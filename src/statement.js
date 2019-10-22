(function(exports) {

  function Statement(transactions) {
    header = "date || credit || debit || balance\n";
    transArray = transactions
    body = '';
  };

    Statement.prototype.render = function(){
      if (transArray.length == 0){return header}
      createStatementBody();
      return `${header}${body.slice(0, -1)}`
    };

    function createStatementBody() {
      transArray.reverse().forEach(function (transaction) {
          body += `${transaction.render()}\n`;
      });
    };

  exports.Statement = Statement
})(this);
