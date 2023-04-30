// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");
import console from 'console';

const _metadataUri = 'https://gateway.pinata.cloud/ipfs/https://gateway.pinata.cloud/ipfs/QmX2ubjyypAYw75Wrpv6HLb1fhbJqxrnbhDo1RViW3oVoi';

const AzureBlockchainStorage = artifacts.require('AzureBlockchainStorage');

module.exports = (deployer) => {
    deployer.deploy(AzureBlockchainStorage);
};

async function main() {
  const [admin] = await ethers.getSigners();
  
  console.log(`Deploying a smart contract...`);

  const techtogether = (await deploy('techtogether', _metadataUri)).connect(admin);

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
