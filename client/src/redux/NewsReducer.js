import * as ActionTypes from './ActionTypes';

export const NewsReducer = (state = { errMess: null, newsShort: []}, action) => {
  switch (action.type) {
    case ActionTypes.ADD_NEWS_SHORT:
      return {...state, errMess: null, comments: action.payload};

    default:
      return state;
  }
};