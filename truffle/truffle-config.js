const HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();
const {MNEMONIC, INFURA_API_KEY, NETWORK_ID} = process.env;

module.exports = {
  contracts_build_directory: "../client/src/contracts",
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545, // Port par défaut de Ganache
      network_id: "*", // Correspond à n'importe quel network_id
    },
    sepolia: {
      provider: () => new HDWalletProvider(MNEMONIC, INFURA_API_KEY),
      network_id: NETWORK_ID,
      gas: 4465030,
    },
  },
  compilers: {
    solc: {
      version: "0.8.18", // Version du compilateur Solidity
    }
  },


};
