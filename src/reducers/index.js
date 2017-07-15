import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import experimentsReducer from './experimentsReducer';
import moviesReducer from './moviesReducer';

const rootReducer = combineReducers({
    experiments: experimentsReducer,
    movies: moviesReducer,
    routing: routerReducer
});

export default rootReducer;
