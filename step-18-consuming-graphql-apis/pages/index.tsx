import type { NextPage } from 'next'
import Head from 'next/head'
import { useState, useEffect } from 'react'
import styles from '../styles/Home.module.css'
import { useQuery, gql } from '@apollo/client'
import client from '../lib/apollo'

const missionsLimit = 10;
const GET_MISSIONS = gql`
  query {
    missions(limit: ${missionsLimit}) {
      id
      manufacturers
      name
      twitter
      website
      wikipedia
    }
  }
`;

const Home: NextPage = () => {
  let res = useQuery(GET_MISSIONS);
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>SpaceX Missions</h1>
        <ol>
          {
            !res?.data?.missions && <h1>Loading SpaceX Missions ...</h1>
          }
          {
            res?.data?.missions && res?.data?.missions.map((mission:any) => (
              <li key={mission.id}>
                <h2>Manufacturers : {mission.manufacturers.join(", ")}</h2>
                <p><span style={{color: 'tomato'}}>Name</span> : {mission.name}</p>
                <p><span style={{color: 'tomato'}}>Twitter</span> : {mission.twitter}</p>
                <p><span style={{color: 'tomato'}}>Website</span> : {mission.website}</p>
                <p><span style={{color: 'tomato'}}>Wikipedia</span> : {mission.wikipedia}</p>
              </li>
            ))
          }
        </ol>
      </main>
    </div>
  )
}

export default Home
