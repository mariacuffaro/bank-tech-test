describe('Transaction', function() {

  beforeEach(function() {
    transDate = new Date('Sep 23 2019')
    transaction = new Transaction('credit',250,transDate, 2000);
  });

  it('has a type', function() {
    expect(transaction._type).toEqual('credit');
  });
  it('has an amount', function() {
    expect(transaction._amount).toEqual('250.00');
  });
  it('has an date', function() {
    expect(transaction._date).toEqual(new Date('Sep 23 2019'));
  });
  it('has a snapshot of the account balance', function() {
    expect(transaction._balance).toEqual('2000.00');
  });
  it('calculates a transaction string for a deposit', function(){
    transOutput = transaction.outputLine();
    expect(transOutput).toEqual('23/09/2019 || 250.00 || || 2000.00')
  });
  it('calculates a transaction string for a withdrawal', function(){
    let transDate = new Date('Sep 23 2019')
    anotherTrans = new Transaction('debit',500,transDate, 500);
    transOutput = anotherTrans.outputLine();
    expect(transOutput).toEqual('23/09/2019 || || 500.00 || 500.00')
  })

});
