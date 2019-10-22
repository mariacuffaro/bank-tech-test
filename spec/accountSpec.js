describe('Account', function() {
  beforeEach(() => {
    account = new Account(3000);
    formattedDate = moment().format('DD/MM/YYYY');
  });
  it('has a default balance of 0', function() {
    emptyAcc = new Account();
    expect(emptyAcc.balance()).toEqual(0);
  });
  it('can be instantiated with a starting balance', function() {
    expect(account.balance()).toEqual(3000);
  });
  it('can have money deposited to it', function(){
    account.deposit(250);
    expect(account.balance()).toEqual(3250);
  });
  it('can have money withdrawn from it', function(){
    account.withdraw(250);
    expect(account.balance()).toEqual(2750);
  });
  it('can print statement for account with no transactions', function(){
    emptyAcc = new Account();
    statementHeader = "date || credit || debit || balance\n";
    statement = emptyAcc.statement();
    expect(emptyAcc.statement()).toEqual(statementHeader);
  })
  it('can print statement for account with one transaction', function(){
    account.withdraw(250);
    statementHeader = "date || credit || debit || balance\n";
    statementBody = `${formattedDate} || || 250.00 || 2750.00`;
    str = `${statementHeader}${statementBody}`
    statement = account.statement();
    expect(statement).toEqual(str);
  })
  it('can print statement for account with two transactions', function(){
    account.withdraw(250);
    account.deposit(500);
    statementHeader = "date || credit || debit || balance\n";
    statementBody = `${formattedDate} || 500.00 || || 3250.00\n${formattedDate} || || 250.00 || 2750.00`;
    str = `${statementHeader}${statementBody}`
    statement = account.statement();
    expect(statement).toEqual(str);
  })
});
