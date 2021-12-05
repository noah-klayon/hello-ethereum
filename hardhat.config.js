require("@nomiclabs/hardhat-waffle");

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/BDrWE7j2nRiizdoKQMasNDO0f2H3AUd_",
      accounts: ["YOUR_ROPSTEN_PRIVATE_KEY"]
    }
  }
};
