import * as types from '../constants/actionTypes';
const queryString = require('query-string');


function moviesRequest() {
    return {
        type: types.MOVIES_REQUEST,
        isLoading: true,
        error: null
    };
}

function moviesSuccess(json) {
    return{
        type: types.MOVIES_SUCCESS,
        data: json,
        isLoading: false,
        error: null
    };
}

function moviesFailure(json) {
    return {
        type: types.MOVIES_FAILURE,
        isLoading: false,
        error: json
    };
}

function moviesFavourite(movie) {
    return {
        type: types.MOVIES_FAVOURITE_ADD,
        favourites: movie
    };
}

export function moviesAdd(movie) {
  console.log(movie);
  return (dispatch) => {
    dispatch(moviesFavourite(movie));
  };
}

function moviesFavouriteRemove(movie) {
    return {
        type: types.MOVIES_FAVOURITE_REMOVE,
        favourites: movie
    };
}

export function moviesRemove(movie) {
  console.log(movie);
  return (dispatch) => {
    dispatch(moviesFavouriteRemove(movie));
  };
}

export function getMovies(params, partUrl) {
    const API_KEY = '79eb5f868743610d9bddd40d274eb15d';
    const parameters = {
      ...params,
      api_key: API_KEY
    }
    const query = queryString.stringify(parameters);
    const url = `http://api.themoviedb.org${partUrl}${query}`;

    return (dispatch) => {
        dispatch(moviesRequest());
        fetch(url)
        .then((response) => {
            return response;
        })
        .then((response) => response.json())
        .then((items) => dispatch(moviesSuccess(items)))
        .catch((error) => dispatch(moviesFailure(error)));
    };
}
