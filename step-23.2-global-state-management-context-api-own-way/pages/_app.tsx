import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalState from '../context/global/GlobalState'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <GlobalState>
      <Component {...pageProps} />
    </GlobalState>
  )
}

export default MyApp
