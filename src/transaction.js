(function(exports) {

  function Transaction(type, amount, date, balance) {
    this._type = type
    this._amount = amount.toFixed(2)
    this._date = date
    this._balance = balance.toFixed(2)
  };

  Transaction.prototype.render = function(){
    let formattedDate = moment(this._date).format('DD/MM/YYYY');
    if (this._type == 'credit') {return `${formattedDate} || ${this._amount} || || ${this._balance}`}
    return `${formattedDate} || || ${this._amount} || ${this._balance}`
  };

  exports.Transaction = Transaction
})(this);
