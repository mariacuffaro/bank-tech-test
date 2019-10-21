describe('TransactionList', function() {

it('can be empty', function(){
  let list = new TransactionList();
  expect(list.transactions.length).toEqual(0)
  });
it('can contain a transaction', function(){
  let list = new TransactionList();
  let transaction = new Transaction();
  list.addTransaction(transaction);
  expect(list.transactions.length).toEqual(1)
  });

});
