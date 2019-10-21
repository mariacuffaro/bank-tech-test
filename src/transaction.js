(function(exports) {

  function Transaction(type, amount, date) {
    this._type = type
    this._amount = amount
    this._date = date
  };

  exports.Transaction = Transaction
})(this);
