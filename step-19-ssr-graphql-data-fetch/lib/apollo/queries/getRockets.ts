import { gql } from "@apollo/client";

const GET_ROCKETS = gql`
    query {
      rockets {
        id
        name
      }
    }

`

export default GET_ROCKETS;