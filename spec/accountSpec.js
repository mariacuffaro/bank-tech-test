describe('Account', function() {

  it('has a default balance of 0', function() {
    account = new Account();
    expect(account.balance()).toEqual(0);
  });
  it('can be instantiated with a starting balance', function() {
    account = new Account(3000);
    expect(account.balance()).toEqual(3000);
  });
  it('can have money deposited to it', function(){
    account = new Account(3000);
    account.deposit(250);
    expect(account.balance()).toEqual(3250);
  });
});
