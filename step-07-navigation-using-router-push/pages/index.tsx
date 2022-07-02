import type { NextPage } from 'next'
import styles from "../styles/Home.module.css"
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

const Home: NextPage = (props) => {
  console.log(props);

  const [value, setValue] = useState(0);
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(value + 20)
      if(value === 80){
        // router.push('/posts')
        router.push({
          pathname: '/posts',
          query: {
            foo: 'bar'
          }
        })
        clearTimeout(timeout)
      }
    }, 1000);
    //eslint-disable-next-line
  }, [value])
  
  return (
    <>
    <h1 className={styles.title}>
      This is Homepage
    </h1>
    <h3>Automatically Navigate to /posts in <span className={styles.num}>{value/20}</span> seconds</h3>
    <meter id="fuel"
       min={0} max={100}
       low={33} high={66} optimum={80}
       value={value}>
        at 50/100
    </meter>
    {/* <span className={styles.button}><Link href="/posts">Goto Posts</Link></span> */}
    </>
  )
}

export default Home
