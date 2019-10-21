describe('Account', function() {

  it('has a default balance of 0', function() {
    account = new Account();
    expect(account.balance()).toEqual(0);
  });
  it('can be instantiated with a starting balance', function() {
    account = new Account(3000);
    expect(account.balance()).toEqual(3000);
  });
  it('can have money deposited to it', function(){
    account = new Account(3000);
    account.deposit(250);
    expect(account.balance()).toEqual(3250);
  });
  it('can have money withdrawn from it', function(){
    account = new Account(3000);
    account.withdraw(250);
    expect(account.balance()).toEqual(2750);
  });
  it('can print statement for account with no transactions', function(){
    account = new Account();
    statementHeader = "date || credit || debit || balance\n";
    statement = account.statement();
    statement = statement.replace(/[^a-zA-Z]/g, "");
    expect(statement).toEqual(statementHeader.replace(/[^a-zA-Z]/g, ""));
  })
  it('can print statement for account with one transaction', function(){
    account = new Account(3000);
    account.withdraw(250);
    statementHeader = "date || credit || debit || balance\n";
    statementBody = "21/10/2019 || || 250.00 || 2750.00";
    str = `${statementHeader} ${statementBody}`
    str = str.replace(/[^a-zA-Z]/g, "");
    statement = account.statement();
    statement = statement.replace(/[^a-zA-Z]/g, "");

    console.log(str);
    console.log(statement);

    expect(statement).toEqual(str);
  })
});
