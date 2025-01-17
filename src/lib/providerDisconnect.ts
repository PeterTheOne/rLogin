import { RLOGIN_ACCESS_TOKEN, RLOGIN_REFRESH_TOKEN, WALLETCONNECT } from '..'

const disconnectProvider = async (provider: any): Promise<void> => {
  if (!provider) {
    return
  }

  // WalletConnect, Hardware Wrappers, Portis Wrapper
  if (provider.disconnect) {
    // could be a promise
    await provider.disconnect()
  }

  // LocalStorage cleanup missed with the disconnect method
  localStorage.removeItem(WALLETCONNECT)
  localStorage.removeItem('WEB3_CONNECT_CACHED_PROVIDER')
}

const disconnectFromDataVault = () => {
  localStorage.removeItem(RLOGIN_ACCESS_TOKEN)
  localStorage.removeItem(RLOGIN_REFRESH_TOKEN)
  localStorage.removeItem('x-csrf-token')
}

const disconnectFromProvider = (provider: any) => {
  disconnectProvider(provider)
  disconnectFromDataVault()
}

export default disconnectFromProvider
