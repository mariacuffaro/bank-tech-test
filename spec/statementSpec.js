describe('Statement', function() {

  beforeEach(function() {
    transactions = []
    statement = new Statement(transactions)
    statementHeader = "date || credit || debit || balance\n";
  });

  it('has a header', function() {
    expect(statement.header).toEqual(statementHeader)
  });
  it('renders the header only if there are no transactions', function() {
    expect(statement.render()).toEqual(statementHeader)
  });
  it('renders the statement for one transaction', function(){
    let transDate = new Date('Sep 23 2019')
    let trans = new Transaction('credit',250,transDate, 2000);
    oneTransaction = [trans]
    oneTransStatement = new Statement(oneTransaction)
    statementBody = "23/09/2019 || 500.00 || || 2000.00";
    str = `${statementHeader}${statementBody}`
    expect(oneTransStatement.render()).toEqual(str);
  })
});
