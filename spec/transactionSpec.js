describe('Transaction', function() {

  beforeEach(function() {
    let transDate = new Date('Sep 23 2019')
    transaction = new Transaction('credit',250,new Date());
  });

  it('has a type', function() {
    expect(transaction.type).toEqual('credit');
  });
  it('has an amount', function() {
    expect(transaction.amount).toEqual(250);
  });
});
