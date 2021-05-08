var SSMToken = artifacts.require('./SSMToken.sol');
var SSMTokenSale = artifacts.require('./SSMTokenSale.sol');

contract('SSMTokenSale', function(accounts) {
    var tokenInstance;
    var admin = accounts[0]; 
    var buyer = accounts[1];
    var tokenPrice = 1000000000000000; //in wei
    var tokensAvailable = 750000;
    var numberOfTokens;
    var tokenInstance; 
    var tokensRemaining; 

  it('initializes the contract with the correct values', function() {
    return SSMTokenSale.deployed().then(function(instance) {
      tokenSaleInstance = instance;
      return tokenSaleInstance.tokenPrice(); 
    }).then(function(price) {
        assert.equal(price, tokenPrice, 'token price is correct')
    });
  })

  it('facilitates token buying', function() {
    return SSMToken.deployed().then(function(instance) {
      // Grab token instance first
      tokenInstance = instance;
      return SSMTokenSale.deployed();
    }).then(function(instance) {
      // Then grab token sale instance
      tokenSaleInstance = instance; 
      // Provision 75% of all tokens to the token sale
      return tokenInstance.transfer(tokenSaleInstance.address, tokensAvailable, { from: admin })
    }).then(function(receipt) {
      numberOfTokens = 10;
        return tokenSaleInstance.buyTokens(numberOfTokens, { from: buyer, value: numberOfTokens * tokenPrice })
    }).then(function(receipt) {
      assert.equal(receipt.logs.length, 1, 'triggers one event');
      assert.equal(receipt.logs[0].event, 'Sell', 'should be the "Sell" event');
      assert.equal(receipt.logs[0].args._buyer, buyer, 'logs the account that purchased the tokens');
      assert.equal(receipt.logs[0].args._amount, numberOfTokens, 'logs the number of tokens purchased');        
    }).then(function(receipt) {
        return tokenSaleInstance.tokensSold()
    }).then(function(amount) {
        assert.equal(amount.toNumber(), numberOfTokens, 'increments the number of tokens sold')
        return tokenInstance.balanceOf(buyer);
    }).then(function(balance) {
      assert.equal(balance.toNumber(), numberOfTokens);
      return tokenInstance.balanceOf(tokenSaleInstance.address);
    }).then(function(balance) {
      assert.equal(balance.toNumber(), tokensAvailable - numberOfTokens);
        // Try to buy tokens different from the ether value
      return tokenSaleInstance.buyTokens(numberOfTokens, { from: buyer, value: 1 });
    }).then(assert.fail).catch(function(error) {
      assert(error.message.indexOf('revert') >= 0, 'msg.value must equal number of tokens in wei');
      return tokenSaleInstance.buyTokens(800000, { from: buyer, value: numberOfTokens * tokenPrice })
    }).then(assert.fail).catch(function(error) {
      assert(error.message.indexOf('revert') >= 0, 'cannot purchase more tokens than available');
    })
  })

  it('ends token sale', function() {
    return SSMToken.deployed().then(function(instance) {
      // Grab token instance first
      tokenInstance = instance;
      return SSMTokenSale.deployed();
    }).then(function(instance) {
      // Then grab token sale instance
      tokenSaleInstance = instance;
      // Try to end sale from account other than the admin
      return tokenSaleInstance.endSale({ from: buyer });
    }).then(assert.fail).catch(function(error) {
      assert(error.message.indexOf('revert' >= 0, 'must be admin to end sale'));
      // End sale as admin
      return tokenSaleInstance.endSale({ from: admin });
    }).then(function(receipt) {
      return tokenInstance.balanceOf(admin);
    }).then(function(balance) {
        tokensRemaining = 999990;
      assert.equal(balance.toNumber(), tokensRemaining, 'returns all unsold SSM tokens to admin'); 
    });
  })
});