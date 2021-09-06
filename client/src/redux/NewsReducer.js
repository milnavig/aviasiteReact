import * as ActionTypes from './ActionTypes';

export const NewsReducer = (state = { isLoading: false, errMess: null, newsShort: [], newsFull: [], pages: {}, images: []}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_NEWS_SHORT:
      return {...state, isLoading: false, errMess: null, newsShort: action.payload};
    
    case ActionTypes.ADD_NEWS_FULL:
      return {...state, isLoading: false, errMess: null, newsFull: [...state.newsFull, action.payload]};

    case ActionTypes.ADD_PAGE:
      return {...state, isLoading: false, errMess: null, pages: {...state.pages, ...action.payload}};

    case ActionTypes.ADD_IMAGE:
      return {...state, isLoading: false, errMess: null, images: [...state.images, ...action.payload]};

    case ActionTypes.NEWS_LOADING:
      return {...state, isLoading: true, errMess: null}

    case ActionTypes.NEWS_FAILED:
      return {...state, isLoading: false, errMess: action.payload};

    default:
      return state;
  }
};