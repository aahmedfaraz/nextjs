import type { NextPage, GetServerSidePropsContext } from "next";
import { ParsedUrlQuery } from "querystring";
import styles from '../../styles/Home.module.css'
import Greet from '../../components/Greet'
import Link from 'next/link';

interface Params extends ParsedUrlQuery {
    message: string
}
interface Query extends ParsedUrlQuery {
    foo: string
}

export const getServerSideProps = async (context:GetServerSidePropsContext) => {
    const { message } = context.params as Params;
    const { foo } = context.query as Params;
    return {
        props: {
            message,
            foo
        }
    }
}

const Message:NextPage<Params> = (props:Params) => {

    console.log("Message Page: ", props);
    

    return (
        <>
        <h2>Message: <span className={styles.message}>{props.message}</span></h2>
        <h1 className={styles.title}>
          This is Message Page
        </h1>
        <Greet />
        <Link className={styles.button} href="/posts">Goto Posts</Link>
        </>
    )
}

export default Message;