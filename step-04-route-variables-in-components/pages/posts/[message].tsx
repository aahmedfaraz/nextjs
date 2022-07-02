import type { NextPage, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import styles from '../../styles/Home.module.css'
import Greet from '../../components/Greet'

interface Params extends ParsedUrlQuery {
    message: string
}

export const getServerSideProps = async (context:GetServerSidePropsContext) => {
    console.log(context.params);    
    const { message } = context.params as Params;
    return {
        props: {
            message
        }
    }
}

const Message:NextPage<Params> = (props:Params) => {

    return (
        <>
        <h2>Message: <span className={styles.message}>{props.message}</span></h2>
        <h1 className={styles.title}>
          This is Message Page
        </h1>
        <Greet />
        <a className={styles.button} href="/posts">Goto Posts</a>
        </>
    )
}

export default Message;