import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from '../styles/Home.module.css'

const IndexPage:NextPage = () => {
  return (
    <>
    <Head>
      <title>Welcome to the website</title>
    </Head>
    <div className={styles.container}>
      <h1>This is Home page</h1>
      <Link href={'/about'} passHref>
        <a className={styles.btn}>About us</a>
      </Link>
      <br />
      <small>See the title of the page</small>
    </div>
    </>
  )
}

export default IndexPage;