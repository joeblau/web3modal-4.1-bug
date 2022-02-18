import { createWalletConnectClient } from '@/utils/WalletConnectUtil'
import { createOrRestoreWallet } from '@/utils/WalletUtil'
import { useCallback, useEffect, useState } from 'react'

export default function useInitialization() {
  const [initialized, setInitialized] = useState(false)

  const onInitialize = useCallback(async () => {
    try {
      createOrRestoreWallet()
      await createWalletConnectClient()
      setInitialized(true)
    } catch (err: unknown) {
      alert(err)
    }
  }, [])

  useEffect(() => {
    if (!initialized) {
      onInitialize()
    }
  }, [initialized, onInitialize])

  return initialized
}