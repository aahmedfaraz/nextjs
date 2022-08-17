import '../styles/globals.css'
import type { AppProps } from 'next/app'
import StopwatchContext from '../components/context/stopwatchContext'
import { useState } from 'react'
import { Timestamp } from '../components/context/types'

function MyApp({ Component, pageProps }: AppProps) {
  const [timestamp, setTimestamp] = useState<{[timestamp : string] : Timestamp}>({
    timestamp : {
      hours : 0,
      minutes: 0,
      seconds: 0,
    }
  })
  
  return (
    <StopwatchContext.Provider value={{ timestamp : timestamp.timestamp,setTimestamp}}>
      <Component {...pageProps} />
    </StopwatchContext.Provider>
  )
}

export default MyApp
