import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { StoreProvider } from '../utils/Store'
import { SnackbarProvider } from 'notistack'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <SnackbarProvider>
      <StoreProvider>
        <Component {...pageProps} />
      </StoreProvider>
    </SnackbarProvider>
  )
}

export default MyApp
