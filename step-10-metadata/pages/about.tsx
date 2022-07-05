import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import styles from '../styles/Home.module.css'

const About:NextPage = () => {
    return (
        <>
        <Head>
            <title>About this website</title>
        </Head>
        <div className={styles.container}>
            <h1>This is  About page</h1>
            <Link href={'/'} passHref>
                <a className={styles.btn}>
                    Back to Home
                </a>
            </Link>
            <br />
            <small>See the title of the page</small>
        </div>
        </>
    )
}

export default About;