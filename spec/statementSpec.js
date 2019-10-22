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
    statementBody = "23/09/2019 || 250.00 || || 2000.00";
    str = `${statementHeader}${statementBody}`
    expect(oneTransStatement.render()).toEqual(str);
  })
  it('renders the statement in desc date order', function(){
    let date1 = new Date('Jan 10 2012')
    let t1 = new Transaction('credit',1000,date1, 1000);
    let date2 = new Date('Jan 13 2012')
    let t2 = new Transaction('credit',2000,date2, 3000);
    let date3 = new Date('Jan 14 2012')
    let t3 = new Transaction('debit',500,date3, 2500);
    multipleTrans = [t1, t2, t3]
    multipleTransStatement = new Statement(multipleTrans)
    statementBody = "14/01/2012 || || 500.00 || 2500.00\n"
                    + "13/01/2012 || 2000.00 || || 3000.00\n"
                    + "10/01/2012 || 1000.00 || || 1000.00"
    str = `${statementHeader}${statementBody}`
    expect(multipleTransStatement.render()).toEqual(str);
  })
});
