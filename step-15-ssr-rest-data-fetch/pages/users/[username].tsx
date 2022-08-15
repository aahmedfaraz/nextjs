import axios from 'axios';
import { GetServerSideProps, NextPage } from 'next';


export const getServerSideProps:GetServerSideProps = async (ctx) => {
    const { username } = ctx.query;
    const user = await axios.get(`https://jsonplaceholder.typicode.com/users?username=${username}`);
    if(user.status === 404){
        return {
            notFound: true
        }
    }
    return {
        props:{
            user : user.data[0],
        }
    }
}

const Username:NextPage<{user: any}> = ({user}) => {
    return (
        <div>
            <h1 style={{color: 'dodgerblue'}}>{user.username}</h1>
            <p><strong style={{color: 'tomato'}}>Email:</strong> {user.email}</p>
            <p><strong style={{color: 'tomato'}}>Phone:</strong> {user.phone}</p>
            <p><strong style={{color: 'tomato'}}>website:</strong> {user.website}</p>
        </div>
    );
}

export default Username;