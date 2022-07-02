import type { NextPage } from "next";
import styles from '../../styles/Home.module.css'
import Link from "next/link";

const Post:NextPage = () => {
    return (
        <>
        <h1 className={styles.title}>
          This is Posts Page
        </h1>
        <Link className={styles.button} href="/">Goto Homepage</Link>
        </>
    )
}

export default Post;