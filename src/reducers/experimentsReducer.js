import {
    EXPERIMENTS_REQUEST,
    EXPERIMENTS_SUCCESS,
    EXPERIMENTS_FAILURE
} from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function experimentsReducer(state = initialState.experiments, action) {
    switch (action.type) {
        case EXPERIMENTS_REQUEST:
            return objectAssign({}, state, {isLoading: true, error: false});

        case EXPERIMENTS_SUCCESS:
            return objectAssign({}, state, {isLoading: false, error: false, data: action.data});

        case EXPERIMENTS_FAILURE:
            return objectAssign({}, state, {isLoading: false, error: true, data: action.data});

        default:
            return state;
    }
}
