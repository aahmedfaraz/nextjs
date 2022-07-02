import type { NextPage } from "next";
import styles from '../../styles/Home.module.css'
import Link from "next/link";

const Post:NextPage = () => {
    return (
        <>
        <div>
            <h1>This is Posts Page</h1>
            <ul className={styles.ul}>
                <li className={styles.button2}>
                    <Link href={{
                        pathname: "/posts/[message]",
                        query: {
                            message: "good-morning",
                            foo: "bar" // query parameter
                        }
                    }}>Good Morning</Link>
                </li>
                <li className={styles.button2}>
                    <Link href={{
                        pathname: "/posts/[message]",
                        query: {
                            message: "good-evening",
                            foo: "bar" // query parameter
                        }
                    }}>Good Evening</Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Post;