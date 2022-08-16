import { GetServerSideProps, NextPage } from 'next';
import client from '../../lib/apollo';
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
    data : {
        rocket: Rocket
    }
}

export const getServerSideProps:GetServerSideProps = async (ctx) => {
    const { id } = ctx.query as { id : string };
    const { data } = await client.query<QueryResult>({ query : GET_ROCKET(id) })
    return {
        props:{
            data,
        }
    }
}

const Rocket : NextPage<QueryResult> = ({data : {rocket : { active, boosters,company,cost_per_launch,country, description, id, name, success_rate_pct }}}) => {
    return (
        <div id={id}>
            <h1>{name}</h1>
            <ul>
                <li><span style={{color: "tomato"}}>active</span> : {active}</li>
                <li><span style={{color: "tomato"}}>boosters</span> : {boosters}</li>
                <li><span style={{color: "tomato"}}>company</span> : {company}</li>
                <li><span style={{color: "tomato"}}>cost_per_launch</span> : {cost_per_launch}</li>
                <li><span style={{color: "tomato"}}>country</span> : {country}</li>
                <li><span style={{color: "tomato"}}>description</span> : {description}</li>
                <li><span style={{color: "tomato"}}>success_rate_pct</span> : {success_rate_pct}</li>
            </ul>
        </div>
    );
}

export default Rocket;