function Account(balance=0) {
  this._balance = balance
};

Account.prototype.balance = function() {
  return this._balance;
};
