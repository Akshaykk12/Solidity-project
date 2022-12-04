// compile code will go here
//require('./contracts/Inbox.sol'); is a bad idea as node will consider inbox.js as a js file
const path = require('path');
const fs =require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");       //We'll pass in 3 portions of the path.__dirname is a constant defined by node and always get set to the cwd.
//Next two arguments are contract and inbox.sol. It'll directly generate a path pointing at Inbox.sol
const source= fs.readFileSync(inboxPath, 'utf8'); //Another temporary variable. To read content of file we'll use file system module.

module.exports = solc.compile(source, 1).contracts[":Inbox"]; //Arguments are source code and no. of solidity file to be compiled

