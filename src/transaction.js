(function(exports) {

  function Transaction(type, amount, date, balance) {
    this._type = type
    this._amount = amount
    this._date = date
    this._balance = balance
  };

  exports.Transaction = Transaction
})(this);
