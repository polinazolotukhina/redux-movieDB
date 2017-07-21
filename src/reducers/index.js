import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import moviesReducer from './moviesReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    routing: routerReducer
});

export default rootReducer;
