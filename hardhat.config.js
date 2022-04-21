/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
require("@nomiclabs/hardhat-etherscan");

const { RPC_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.8.4",
   defaultNetwork: "ropsten",
   networks: {
      hardhat: {},
      ropsten: {
         url: RPC_URL,
         accounts: [`0x${PRIVATE_KEY}`]
      },
   },
   etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
  },
}