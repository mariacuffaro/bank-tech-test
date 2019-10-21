(function(exports) {

  function Account(balance=0) {
    this._balance = balance
  };

  Account.prototype.balance = function() {
    return this._balance;
  };

  Account.prototype.deposit = function(amount) {
    this._balance += amount;
  };

  Account.prototype.withdraw = function(amount) {
    this._balance -= amount;
  };

  exports.Account = Account
})(this);
