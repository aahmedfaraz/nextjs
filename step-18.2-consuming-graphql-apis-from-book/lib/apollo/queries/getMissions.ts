import { gql } from '@apollo/client';

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

export default GET_MISSIONS;