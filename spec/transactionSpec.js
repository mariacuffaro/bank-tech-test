describe('Transaction', function() {

  it('has a type', function() {
    let transDate = new Date('Sep 23 2019')
    transaction = new Transaction('credit',250,new Date());
    expect(transaction.type).toEqual('credit');
  });

});
