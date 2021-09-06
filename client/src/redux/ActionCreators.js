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
    type: ActionTypes.ADD_NEWS_SHORT,
    payload: news
});

export const addNewsFull = (news) => ({
    type: ActionTypes.ADD_NEWS_FULL,
    payload: news
});

export const addPage = (page) => ({
    type: ActionTypes.ADD_PAGE,
    payload: page
});

export const addImage = (images) => ({
    type: ActionTypes.ADD_IMAGE,
    payload: images
});

export const newsLoading = () => ({
    type: ActionTypes.NEWS_LOADING
});

export const newsFailed = (errmess) => ({
    type: ActionTypes.NEWS_FAILED,
    payload: errmess
});

export const fetchNewsShort = () => (dispatch) => {

    dispatch(newsLoading(true));

    return client
        .query({
        query: gql`
            query GetNewsShort {
                getNewsList {
                    id
                    headline
                    description
                    img
                }
            }
        `
        })
        .then(result => dispatch(addNewsShort([...result.data.getNewsList].reverse())))
        .catch(error => dispatch(newsFailed(error.message)));
}

export const fetchSingleNews = (id) => (dispatch) => {

    dispatch(newsLoading(true));
    return client
        .query({
        query: gql`
            query GetSingleNews {
                getNews(id: ${id}) {
                    id
                    headline
                    description
                    timestamp
                    body
                    img
                }
            }
        `
        })
        .then(result => dispatch(addNewsFull(result.data.getNews)))
        .catch(error => dispatch(newsFailed(error.message)));
}

export const fetchNewsSet = (page, limit) => (dispatch) => {

    dispatch(newsLoading(true));
    return client
        .query({
        query: gql`
            query GetNewsSet {
                getNewsSet(page: ${page}, limit: ${limit}) {
                    count
                    rows {
                        id
                        headline
                        description
                        timestamp
                        body
                        img
                    }
                }
            }
        `
        })
        .then(result => dispatch(addPage({[page]: result.data.getNewsSet})))
        .catch(error => dispatch(newsFailed(error.message)));
}

export const fetchImages = () => (dispatch) => {

    dispatch(newsLoading(true));
    return client
        .query({
        query: gql`
            query GetImages {
                getNewsList {
                    img
                }
            }
        `
        })
        .then(result => dispatch(addImage(result.data.getNewsList)))
        .catch(error => dispatch(newsFailed(error.message)));
}
