import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from '../styles/Home.module.css'
import Widget from "../components/Widget";

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
    <br />
    <Widget pageName="index" />
    </>
  )
}

export default IndexPage;