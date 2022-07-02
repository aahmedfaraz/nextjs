import type { NextPage } from "next";
import styles from '../../styles/Home.module.css'

const Post:NextPage = () => {
    return (
        <>
        <div>
            <h1>This is Posts Page</h1>
            <ul className={styles.ul}>
                <li className={styles.button2}><a href="/posts/good-morning">Good Morning</a></li>
                <li className={styles.button2}><a href="/posts/good-evening">Good Evening</a></li>
            </ul>
        </div>
        </>
    )
}

export default Post;