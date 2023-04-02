const HDWalletProvider = require('@truffle/hdwallet-provider');
const infuraKey = '6a216523cc074308b71a57183f4816f6';
const mnemonic = 'gap pottery cancel crumble punch estate outside exist asset exotic kick castle';

module.exports = {

  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
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
