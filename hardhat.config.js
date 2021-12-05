require("hardhat-klaytn-patch");
require("@nomiclabs/hardhat-waffle");

// You can run task by following command.
// $ npx hardhat accounts 
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.9",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/BDrWE7j2nRiizdoKQMasNDO0f2H3AUd_",
      // TODO: Please use your private key
      accounts: ["0000000000000000000000000000000000000000000000000000000000000000"]
    },
    baobab: {
      url: "https://kaikas.baobab.klaytn.net:8651/",
      // TODO: Please use your private key
      accounts: ["0000000000000000000000000000000000000000000000000000000000000000"]
    }
  }
};
