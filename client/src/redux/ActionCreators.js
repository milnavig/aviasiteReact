import * as ActionTypes from './ActionTypes';
import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
} from "@apollo/client";

const client = new ApolloClient({
    uri: process.env.REACT_APP_API_URL + 'graphql',
    cache: new InMemoryCache()
});

export const addNewsShort = (news) => ({
    type: ActionTypes.ADD_COMMENT,
    payload: news
});

/*
export const fetchNewsShort = () => (dispatch) => {

    //dispatch(dishesLoading(true));

    return fetch(process.env.REACT_APP_API_URL + 'news')
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            var errmess = new Error(error.message);
            throw errmess;
      })
    .then(response => response.json())
    .then(news => dispatch(addNewsShort(news)));
    //.catch(error => dispatch(dishesFailed(error.message)));
}
*/

export const fetchNewsShort = () => (dispatch) => {

    //dispatch(dishesLoading(true));

    return client
        .query({
        query: gql`
            query GetNewsShort {
                newsShort {
                    header
                }
            }
        `
        })
        .then(result => dispatch(addNewsShort(result.data)));
}
