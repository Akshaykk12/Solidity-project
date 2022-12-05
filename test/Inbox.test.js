// contract test code will go here
const assert = require('assert');           //Assert is standard module. Used to make assertion about tests
const ganache = require("ganache-cli");     //Going to serve as a local ethereum test network
const Web3 = require('web3');               //Web3 is a constructor funstion. Used to create instances of web3 library
const web3 = new Web3(ganache.provider());  //instance of Web3. If we want to change the network we have to change provider
const { interface, bytecode } = require("../compile.js");


// // Here we'll create a simple testing envirnmet
// // below are defined functions
// class Car {
//     park() {
//         return 'stopped';
//     }
//     drive() {
//         return 'vroom';
//     }
// }

// //We'll declare car here so that we can make it global
// let car;
// //We'll use before each because in both it function it is repeating
// beforeEach(() =>{
//     car = new Car();
// });
// //here the testing code will start
// describe('Describe', () => {
//     it ('can park', () => {
//         // const car = new Car();  //Here we created instance of car
//         assert.equal(car.park(),'stopped');
//     })
//     it ('can drive', () => {
//         // const car = new Car();  //Here we created instance of car
//         assert.equal(car.drive(),'vroom');
//     })
// })

let accounts;
let inbox;

beforeEach( async () => {
    //Get list of all accounts
    accounts = await web3.eth.getAccounts();
    //Get excess to one of the account to deploy a contract
    inbox = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode , arguments: ['Hi there!']})
        .send({ from: accounts[0], gas: '1000000'});
});

describe('Inbox', () => {
    it('deploys a contract', () => {
        console.log(accounts);
    });
});