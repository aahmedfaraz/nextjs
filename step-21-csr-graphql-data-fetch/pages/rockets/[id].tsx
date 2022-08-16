import { GetServerSideProps, NextPage } from 'next';
import { useQuery } from '@apollo/client';
import GET_ROCKET from '../../lib/apollo/queries/getRocket';

interface Rocket {
    active : string
    boosters : string
    company : string
    cost_per_launch : string
    country : string
    description : string
    id : string
    name : string
    success_rate_pct : string
}

interface QueryResult {
    rocket: Rocket
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
    const { id } = ctx.query as { id : string };
    return {
        props:{
            id,
        }
    }
}

const Rocket : NextPage<{id : string}> = ({id}) => {
    const { loading , data } = useQuery<QueryResult>(GET_ROCKET(id));

    if(loading) {
        loading && <h1 style={{color: 'dodgerblue'}}>Loading Rocket {id} ...</h1>
    }

    return (
        <div id={id}>
            {
                !loading && data && (
                    <>
                        <h1>{data.rocket.name}</h1>
                        <ul>
                            <li><span style={{color: "tomato"}}>active</span> : {data.rocket.active}</li>
                            <li><span style={{color: "tomato"}}>boosters</span> : {data.rocket.boosters}</li>
                            <li><span style={{color: "tomato"}}>company</span> : {data.rocket.company}</li>
                            <li><span style={{color: "tomato"}}>cost_per_launch</span> : {data.rocket.cost_per_launch}</li>
                            <li><span style={{color: "tomato"}}>country</span> : {data.rocket.country}</li>
                            <li><span style={{color: "tomato"}}>description</span> : {data.rocket.description}</li>
                            <li><span style={{color: "tomato"}}>success_rate_pct</span> : {data.rocket.success_rate_pct}</li>
                        </ul>
                    </>
                )
            }
        </div>
    );
}

export default Rocket;