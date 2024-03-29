import type { NextPage } from 'next'
import Head from 'next/head'
import Button from '../components/Button'
import FancyButton from '../components/FancyButton'
import Highlight from '../components/Highlight'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Styled JSX</h1>
        <Button><>Simple Button</></Button>
        &nbsp;&nbsp;&nbsp;
        <FancyButton><>Fancy Button</></FancyButton>
        <br />
        <br />
        <p>Lorem, <Highlight>ipsum dolor sit amet consectetur adipisicing</Highlight> elit. Odit, blanditiis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, <Highlight>quia maiores asperiores cupiditate et quibusdam</Highlight> in! Illo ratione totam quia?</p>
        <p>Lorem <Highlight>ipsum dolor sit amet</Highlight> consectetur adipisicing.</p>
      </main>
    </div>
  )
}

export default Home
