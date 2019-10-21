describe('Transaction', function() {

  beforeEach(function() {
    let transDate = new Date('Sep 23 2019')
    transaction = new Transaction('credit',250,transDate, 2000);
  });

  it('has a type', function() {
    expect(transaction._type).toEqual('credit');
  });
  it('has an amount', function() {
    expect(transaction._amount).toEqual(250);
  });
  it('has an date', function() {
    expect(transaction._date).toEqual(new Date('Sep 23 2019'));
  });
  it('has a snapshot of the account balance', function() {
    expect(transaction._balance).toEqual(2000);
  });


});
