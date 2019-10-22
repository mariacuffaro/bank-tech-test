describe('Statement', function() {

  beforeEach(function() {
    transactions = []
    statement = new Statement(transactions)
  });

  it('has a header', function() {
    expect(statement.header).toEqual("date || credit || debit || balance")
  });
});
