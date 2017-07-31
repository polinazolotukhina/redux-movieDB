import {
    MOVIE_ACTIVE
} from '../constants/actionTypes';
import initialState from './initialState';

function showInfoOnHover(movieThatWasHover){
    return movieThatWasHover;
}

export default function  movieOnHoverReducer(state = initialState.favourites, action) {
    switch (action.type) {
        case  MOVIE_ACTIVE:
          console.log('state', state);
          return {
            ...state,
            movieOnHover: showInfoOnHover( action.movieOnHover)
          };

        default:
            return state;
    }
}
