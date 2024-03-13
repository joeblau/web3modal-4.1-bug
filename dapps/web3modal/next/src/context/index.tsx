'use client'

import { wagmiConfig, projectId } from "@/config";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createWeb3Modal } from '@web3modal/wagmi/react'
import React, { ReactNode } from 'react'
import { State, WagmiProvider } from 'wagmi'
import { siweConfig } from '@/config/siwe'


const queryClient = new QueryClient()

if (!projectId) throw new Error('Project ID is not defined')

createWeb3Modal({
  siweConfig,
  wagmiConfig,
  projectId
})

function ContextProvider({
  children,
  initialState
}: {
  children: ReactNode
  initialState: State | undefined
}) {
  return (
    <WagmiProvider config={wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  );
}

export default ContextProvider
