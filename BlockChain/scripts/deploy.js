// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("VRFv2Consumer");
  const requestId = 5111;
  const deployedContract = await Contract.deploy(requestId);
  // => Deployed at: 0x4D124a0B02074192CFbB79A3c558dbd537FD5F11

  await deployedContract.waitForDeployment();

  let tx = deployedContract.deploymentTransaction();

  console.log(`Transaction hash: ${tx.hash}`);
  console.log(`Deployed contract at address: ${await deployedContract.getAddress()}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
