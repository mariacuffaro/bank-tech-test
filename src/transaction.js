(function(exports) {

  function Transaction(type, amount, date, balance) {
    this._type = type
    this._amount = amount
    this._date = date
    this._balance = balance
  };

  Transaction.prototype.render = function(){
    let formattedDate = moment(this._date).format('DD/MM/YYYY');
    if (this._type == 'credit') {return `${formattedDate} || ${this._amount.toFixed(2)} || || ${this._balance.toFixed(2)}`}
    return `${formattedDate} || || ${this._amount.toFixed(2)} || ${this._balance.toFixed(2)}`
  };

  exports.Transaction = Transaction
})(this);
