import {
    MOVIES_FAVOURITE_ADD
} from '../constants/actionTypes';
import initialState from './initialState';

export default function favouritesReducer(state = initialState.favourites, action) {
    switch (action.type) {
        case MOVIES_FAVOURITE_ADD:
        return [...state].concat(action.favourites)
          // return {
          //   ...state,
          //   favourites: [...state].concat(action.favourites)
          // }


        default:
            return state;
    }
}
