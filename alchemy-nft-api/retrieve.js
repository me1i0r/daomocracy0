// Github: https://github.com/alchemyplatform/alchemy-sdk-js
// Setup: npm install alchemy-sdk
import { Network, Alchemy } from "alchemy-sdk";

// Optional Config object, but defaults to demo api-key and eth-mainnet.
const settings = {
  apiKey: "yuITZSjDbwk37CNOOol0-YIWDRDww8mC", // Replace with your Alchemy API Key.
  network: Network.ETH_MAINNET, // Replace with your network.
};

const alchemy = new Alchemy(settings);

// Print total NFT count returned in the response:
alchemy.nft.getOwnersForNft("0x7EeF591A6CC0403b9652E98E88476fe1bF31dDeb", "42").then(
  console.log
);