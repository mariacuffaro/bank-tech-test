(function(exports) {

  function TransactionList() {
    this.transactions = [];
  };

  TransactionList.prototype.addTransaction = function(transaction) {
    this.transactions.push(transaction);
  };

  exports.TransactionList = TransactionList
})(this);
