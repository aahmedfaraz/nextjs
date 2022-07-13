import App from 'next/app'
import { useState } from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
// import { AppContext } from 'next/app'
import Navbar from '../components/Navbar'
import ThemeContext from '../components/themeContext'

const themes : any = {
  dark: {
    background: 'black',
    color: 'white',
  },
  light: {
    background: 'white',
    color: 'black',
  }
}

const MyApp = ({ Component, pageProps }: AppProps) => {

  const [ theme, setTheme ] = useState('dark');

  const toggleTheme : any = () => setTheme(theme === 'dark' ? 'light' : 'dark');

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      <div 
        style={{
          width: '100%',
          minHeight: '100vh',
          ...themes[theme]
        }}
      >
        <Navbar />
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  )
}

// // If, for some reason, you absolutely need to fetch data on the server side every time you
// // want to render a page, you can still use the built-in 'getInitialProps' function, but it
// // has a cost. You'll lose automatic static optimization in dynamic pages, as Next.js will need
// // to perform server-side rendering for every single page.
// // If that cost is acceptable for your web app, you can easily use that built-in method as
// // follows:

// MyApp.getInitialProps = async (appContext : AppContext) => {
//   const appProps = await App.getInitialProps(appContext);
//   const additionalProps = await fetch('...');
//   return {
//     ...appProps,
//     ...additionalProps,
//   }
// };

export default MyApp
