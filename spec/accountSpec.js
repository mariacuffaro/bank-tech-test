describe('Account', function() {

  it('has a default balance of 0', function() {
    account = new Account();
    expect(account.balance()).toEqual(0);
  });

});
