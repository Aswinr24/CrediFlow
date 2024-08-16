import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'

import { cookieStorage, createStorage } from 'wagmi'
import {
  mainnet,
  sepolia,
  arbitrum,
  polygonZkEvmCardona,
  polygon,
  polygonMumbai,
  filecoinCalibration,
} from 'wagmi/chains'
import { http } from 'wagmi'

// Get projectId from https://cloud.walletconnect.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
if (!projectId) throw new Error('Project ID is not defined')

export const metadata = {
  name: 'AppKit',
  description: 'AppKit Example',
  url: 'https://web3modal.com', // origin must match your domain & subdomain
  icons: ['https://avatars.githubusercontent.com/u/37784886'],
}

// Create wagmiConfig
const chains = [
  mainnet,
  sepolia,
  arbitrum,
  polygonZkEvmCardona,
  polygon,
  polygonMumbai,
  filecoinCalibration,
] as const
export const config = defaultWagmiConfig({
  chains,
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage,
  }),
  auth: {
    email: true, // default to true
    socials: [
      'google',
      'x',
      'github',
      'discord',
      'apple',
      'facebook',
      'farcaster',
    ],
    showWallets: true, // default to true
    walletFeatures: true, // default to true
  },
})
