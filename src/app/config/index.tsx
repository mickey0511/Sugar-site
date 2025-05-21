import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { mainnet, arbitrum, bsc, base, polygon } from '@reown/appkit/networks'
import type { AppKitNetwork } from '@reown/appkit/networks'

// Get projectId from https://cloud.reown.com
export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID || "ef9fe1d69d8c784f7c9a62e45068e9bb" // this is a public projectId only to use on localhost
//here

if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [mainnet, bsc , base, polygon , arbitrum] as [AppKitNetwork, ...AppKitNetwork[]]

export const ethersAdapter = new EthersAdapter();