var net = require('net');
var Web3 = require('web3');
var provider = new Web3.providers.IpcProvider('/Users/timon/.parity/jsonrpc.ipc', net);
var web3 = new Web3(provider);

console.log('requesting block');
web3.eth.getBlockNumber(function(error, result) {
  console.log(result);
  provider.connection.end();
  provider.connection.destroy();
});
