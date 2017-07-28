import {
    MOVIES_FAVOURITE_ADD,
    MOVIES_FAVOURITE_REMOVE,
} from '../constants/actionTypes';
import initialState from './initialState';

export default function favouritesReducer(state = initialState.favourites, action) {
    switch (action.type) {
        case MOVIES_FAVOURITE_ADD:
        return [...state].concat(action.favourites);
        case MOVIES_FAVOURITE_REMOVE:
        return  [...state].slice(1);





        default:
            return state;
    }
}
