const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = '6a216523cc074308b71a57183f4816f6';
const mnemonic = 'electric display pupil super indoor sample various art impact indoor poet slot';

module.exports = {

  networks: {
    ganache: {
      host: "127.0.0.1",
      port: 7545,
      network_id: 5777 // Match any network id
    },
    infura: {
      provider: () => new HDWalletProvider(mnemonic, `https://mainnet.infura.io/v3/${infuraKey}`),
      network_id: 1,       // Mainnet's id
      gas: 5500000,        // Gas limit used for deploys
      gasPrice: 8000000000 // 8 gwei (in wei) (default: 100 gwei)
    }
  },

  compilers: {
    solc: {
      version: "0.8.7",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
};
