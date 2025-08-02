require('@nomicfoundation/hardhat-toolbox');
require('@nomicfoundation/hardhat-ignition');
require('dotenv').config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: '0.8.23',
  ignition: {
    requiredConfirmations: 1,
  },
  networks: {
    polygon: {
      url: process.env.RPC_URL,
      accounts: [process.env.PRIVATE_KEY],
    },
  },
  etherscan: {
    apiKey: process.env.POLYGONSCAN_API_KEY,
  },
};