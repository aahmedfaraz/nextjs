// =============================================================================
// FROM OFFICIAL GRAPHQL TUTORIAL https://www.apollographql.com/tutorial
// =============================================================================
import { ApolloClient, InMemoryCache } from "@apollo/client";
const client = new ApolloClient({
    uri: `https://api.spacex.land/graphql/`,
    cache: new InMemoryCache(),
});
export default client;  

// =============================================================================
// FROM NEXT JS BOOK
// =============================================================================

// import { useMemo } from 'react';
// import {
//     ApolloClient,
//     HttpLink,
//     InMemoryCache,
// } from '@apollo/client';

// let uri = 'https://rwnjssignbook.herokuapp.com/v1/graphql';
// let apolloClient : any;

// function createApolloClient() {
//     return new ApolloClient({
//         ssrMode: typeof window === 'undefined',
//         link: new HttpLink({ uri }),
//         cache: new InMemoryCache(),
//     });
// }

// export const initApollo = (initialState : any = null) => {
//     const client = apolloClient || createApolloClient();
//     if (initialState) {
//         client.cache.restore({
//             ...client.extract(),
//             ...initialState
//         });
//     }
//     if (typeof window === "undefined") {
//         return client;
// }

// if (!apolloClient) {
//     apolloClient = client;
// }
//     return client;
// }