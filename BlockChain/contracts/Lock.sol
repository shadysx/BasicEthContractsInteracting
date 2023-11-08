pragma solidity ^0.8.9;

// Author: @ShadySx
contract Lock {
    uint256 public myVariable;

    constructor() payable {
        myVariable = 42;
    }

    function setVariable(uint256 newValue) public {
        myVariable = newValue;
    }

    function retrieve() public view returns (uint256){
        return myVariable;
    }

    // Fallback function to receive Ether
    receive() external payable {
        // Optionally, you can do something with the deposited Ether here
    }
}