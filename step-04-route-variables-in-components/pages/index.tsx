import type { NextPage } from 'next'
import styles from "../styles/Home.module.css"

const Home: NextPage = (props) => {
  console.log(props);
  
  return (
    <>
    <h1 className={styles.title}>
      This is Homepage
    </h1>
    <a className={styles.button} href="/posts">Goto Posts</a>
    </>
  )
}

export default Home
