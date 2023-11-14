import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';
require('dotenv').config();


const config: HardhatUserConfig = {
  solidity: '0.8.18',
  networks: {
    buildbear: {
    "url" : "https://rpc.dev.buildbear.io/arjun",
}
  },
  etherscan: {
    apiKey: {
      buildbear: "verifyContract",
    },
    customChains: [
      {
        network: "buildbear",
        chainId: 1,
        urls: {
          apiURL: "https://rpc.dev.buildbear.io/verify/etherscan/arjun",
          browserURL: "https://explorer.dev.buildbear.io/arjun",
        },
      },
    ],
  }
};

export default config;
