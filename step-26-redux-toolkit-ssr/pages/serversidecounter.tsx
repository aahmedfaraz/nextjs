import type { GetServerSideProps, NextPage } from 'next'
import Head from 'next/head'
import { incrementByAmount } from '../store/reducers/counter/counterSlice';
import { wrapper } from '../store/store';
import Counter from '../components/Counter';

export const getServerSideProps : GetServerSideProps = wrapper.getServerSideProps(store => async () => {
    store.dispatch(incrementByAmount(1));
    return { props : {}};
})

const ServerSideCounter: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Counter />
      </main>
    </div>
  )
}

export default ServerSideCounter;
