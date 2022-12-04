pragma solidity ^0.4.17;
// linter warnings (red underline) about pragma version can igonored!

// contract code will go here
contract Inbox {                                    //defines our new contract that'll have some number of methods and variables
    string public message;                          //Declare all the Instance variables in the contract

    constructor(string initialMessage) public {     //Functions that will be members of this contract
        message = initialMessage;
    }

    function setMessage(string newMessage) public {
        message = newMessage;
    }
}