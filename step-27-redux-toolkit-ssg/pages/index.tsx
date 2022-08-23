import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { useDispatch } from 'react-redux';
import { increment, decrement } from '../store/reducers/counterSlice';
import Counter from '../components/Counter';

const Home: NextPage = () => {
  const dispatch = useDispatch();

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Counter />
        <button onClick={() => dispatch(increment())}>+</button>
        &nbsp;&nbsp;
        <button onClick={() => dispatch(decrement())}>-</button>
      </main>
    </div>
  )
}

export default Home
