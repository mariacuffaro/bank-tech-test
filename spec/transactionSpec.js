describe('Transaction', function() {

  beforeEach(function() {
    let transDate = new Date('Sep 23 2019')
    transaction = new Transaction('credit',250,transDate);
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

});
