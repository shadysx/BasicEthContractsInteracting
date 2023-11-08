require('dotenv').config()

const { ethers } = require("hardhat");

async function main() {
  const contractAddress = '0x2E49Ca3B0f15bC243E81AC2EBD95E75bB5a610e4'; // Replace with your deployed contract address
  const contract = require("../artifacts/contracts/VRFv2Consumer.sol/VRFv2Consumer.json")

  // Provider (Alchemy)
  const provider = new ethers.AlchemyProvider(network="goerli", process.env.API_KEY)

  // Signer (me)
  const signer = new ethers.Wallet(process.env.PRIVATE_KEY, provider)

  // Connect to the contract using its address and ABI
  const contractInstance = new ethers.Contract(contractAddress, contract.abi, signer);

  try {
    const tx = await contractInstance.requestRandomWords();
    // Wait for the transaction to be mined
    await tx.wait();
    console.log("Transaction successful!");
  } catch (error) {
    console.error("Error retrieving requestId:", error);
  }
}

main().then(() => process.exit(0)).catch((error) => {
  console.error(error);
  process.exit(1);
});