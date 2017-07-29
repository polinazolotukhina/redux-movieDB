import {
    MOVIES_FAVOURITE,
} from '../constants/actionTypes';
import initialState from './initialState';

function favouriteMovie(favourites, movieToCheckIfExistingOrNot){
  console.log("I am here", favourites)
    const movieId = movieToCheckIfExistingOrNot.id;
    const results = [];
    if(favourites.id.includes(movieToCheckIfExistingOrNot.id)) {
      favourites = favourites.filter(function(a){
        return a.id != movieId;
      })
    } else {
      favourites = [...favourites,movieToCheckIfExistingOrNot];
    }

    return favourites;

}

export default function favouritesReducer(state = initialState.favourites, action) {
    switch (action.type) {
        case MOVIES_FAVOURITE:
          console.log('state', state);
          return {
            ...state,
            favourites: favouriteMovie(state.favourites, action.favourites)
          };

        default:
            return state;
    }
}
