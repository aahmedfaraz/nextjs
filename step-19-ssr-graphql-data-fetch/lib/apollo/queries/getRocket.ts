import { gql } from "@apollo/client";

const GET_ROCKET = (id : string) => gql`
    query {
      rocket(id: "${id}") {
        active
        boosters
        company
        cost_per_launch
        country
        description
        id
        name
        success_rate_pct
      }
    }

`

export default GET_ROCKET;