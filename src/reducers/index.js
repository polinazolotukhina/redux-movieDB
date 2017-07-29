import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import moviesReducer from './moviesReducer';
import favouritesReducer from './favouritesReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    routing: routerReducer,
    favourites: favouritesReducer
});

export default rootReducer;
