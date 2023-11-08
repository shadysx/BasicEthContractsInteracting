require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  defaultNetwork: "goerli",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/FN06a-lDk93TDklFCNfZkXUbreah0B-i",
      accounts: ["ca2404bb54ae5bc25ed53d2f562579f44eb41f45fa23600adb15cc796d7471dc"],
      chainId: 5,
      blockConfirmations: 6
    },
  },
  etherscan: {
    apiKey: "J15NUS761HE2YEB46N7DI8AAKCFH64NBC7",
  },
};
