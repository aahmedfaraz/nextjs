import type { NextPage } from 'next'
import styles from "../styles/Home.module.css"
import Link from 'next/link';

const Home: NextPage = (props) => {
  console.log(props);
  
  return (
    <>
    <h1 className={styles.title}>
      This is Homepage
    </h1>
    <Link className={styles.button} href="/posts">Goto Posts</Link>
    </>
  )
}

export default Home
