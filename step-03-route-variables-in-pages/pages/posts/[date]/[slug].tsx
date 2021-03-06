import type { NextPage, GetServerSideProps, GetServerSidePropsContext } from 'next'
import { ParsedUrlQuery } from 'querystring'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../../../styles/Home.module.css'

interface IParams extends ParsedUrlQuery {
  date: string
  slug: string
}

export const getServerSideProps:GetServerSideProps = async (context:GetServerSidePropsContext) => {
  const { date, slug } = context.params as IParams;

  return {
    props:{
      date,
      slug
    }
  }
}

const Post:NextPage<IParams> = ({date, slug}) => {
  
    return (
        <div className={styles.container}>
            <Head>
            <title>Page Route Variables</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
    
          <main className={styles.main}>
            <h1 className={styles.title}>
              {date} <br /> {slug}
            </h1>
            <a className={styles.btn} href="/">Goto Homepage</a>
            <a className={styles.btn} href="/contact-us">Goto Contact Us Page</a>
            <a className={styles.btn} href="/posts">All Posts</a>
          </main>
    
          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
            </a>
          </footer>
        </div>
    );
}

export default Post
