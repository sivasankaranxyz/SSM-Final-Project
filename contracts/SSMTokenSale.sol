// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

import "./SSMToken.sol";

contract SSMTokenSale {
    address admin; 
    SSMToken public tokenContract;
    uint256 public tokenPrice; 
    uint256 public tokensSold; 

    event Sell(address _buyer, uint256 _amount);

    constructor(SSMToken _tokenContract, uint256 _tokenPrice) public { 
        admin = msg.sender; 
        tokenContract = _tokenContract;
        tokenPrice = _tokenPrice;
    }

    //multiply function
    function multiply(uint x, uint y) internal pure returns (uint z) {
        require(y==0 || (z = x * y)/ y == x); 
    }


  //Buying the tokens
    function buyTokens(uint256 _numberOfTokens) public payable{
        //require that value is equal to tokens
        require(msg.value == multiply(_numberOfTokens, tokenPrice));
        //require contract has enough tokens
        require(tokenContract.balanceOf(address(this)) >= _numberOfTokens);
        //require transfer is successful 
        require(tokenContract.transfer(msg.sender, _numberOfTokens));
        //keep track of tokensSold
        tokensSold += _numberOfTokens; 
        //trigger sell event
        emit Sell(msg.sender, _numberOfTokens);
    }



//Ending the sale 
    // function endSale() public {
    //     //Require admin 
    //     require(msg.sender == admin);
    //     require(tokenContract.transfer(admin, tokenContract.balanceOf(address(this))));

    //     //transfer tokens in sale back to admin
    //     selfdestruct(msg.sender);
    // }


}