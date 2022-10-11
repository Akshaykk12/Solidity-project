const assert = require("assert");
const ganache = require("ganache-cli");
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { abi, bytecode } = require("../compile");

let accounts;
let inbox;

beforeEach(async () => {
  //get a list of all accounts
  accounts = await web3.eth.getAccounts();

  inbox = await new web3.eth.Contract(abi)
    .deploy({ data: bytecode, arguments: ["Salve!"] })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Inbox", () => {
  it("deploys a contract", () => {
    assert.ok(inbox.options.address)
  });

//   it("sets the contract message", async () => {
//     await inbox.methods
//       .setMessage("test message")
//       .send({ from: accounts[0], gas: "1000000" });
//   });
});