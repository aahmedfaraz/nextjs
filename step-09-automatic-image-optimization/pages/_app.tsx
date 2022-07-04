import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Navbar />
    <br />
    <br />
    <br />
    <br />
    <Component {...pageProps} />
    </>
  )
}

export default MyApp
