import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import moviesReducer from './moviesReducer';
import movieOnHoverReducer from './movieOnHoverReducer';
import favouritesReducer from './favouritesReducer';

const rootReducer = combineReducers({
    movies: moviesReducer,
    routing: routerReducer,
    favourites: favouritesReducer,
    movieOnHover: movieOnHoverReducer
});

export default rootReducer;
