import {
    TOGGLE_INFO
} from '../constants/actionTypes';
import initialState from './initialState';

export default function inforeducer(state = initialState.favourites, action) {
    switch (action.type) {
        case TOGGLE_INFO:
            return {...state, hidden: !state.hidden}
        default:
            return state;
    }
}
