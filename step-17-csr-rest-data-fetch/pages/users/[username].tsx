import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';

export const getServerSideProps:GetServerSideProps = async (context) => {
    const { username } = context.query;
    return {
        props: {
            username,
        }
    }
};

const Username:NextPage<{username: string}> = ({username}) => {
    const [user, setUser] = useState<any|null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    const getUser = async () => {
        const userResponse = await axios.get(`/api/singleUser?username=${username}`);
        setUser(userResponse.data)
    }

    useEffect(() => {
        getUser();
        setLoading(false);
    }, [])

    return (
        <div>
            <Head>
              <title>User : {username}</title>
            </Head>
            <main>
                {
                    loading && !user && <p>Loading User ...</p>
                }
                {
                    !loading && user && (
                        <>
                            <h1>Name : {user.name}</h1>
                            <p><b>Username</b> : {user.username}</p>
                            <p><b>Email</b> : {user.email}</p>
                            <p><b>Phone</b> : {user.phone}</p>
                            <p><b>City</b> : {user.address?.city}</p>
                        </>
                    )
                }
            </main>
        </div>
    );
};

export default Username;