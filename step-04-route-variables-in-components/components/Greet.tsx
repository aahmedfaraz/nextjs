import type { NextComponentType } from "next";
import { useRouter } from "next/router";
import styles from '../styles/Home.module.css'

const Greet:NextComponentType = () => {
    const { query } = useRouter();
    const { message } = query;
    
    return (
        <div className={styles.comp}>
            <h1>This is Greet Component</h1>
            <h2>Message Received: <span className={styles.message}>{message}</span></h2>
        </div>
    )
}

export default Greet;