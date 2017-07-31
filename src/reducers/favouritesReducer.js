import {
    MOVIES_FAVOURITE
} from '../constants/actionTypes';
import initialState from './initialState';



function favouriteMovie(favourites, movieToCheckIfExistingOrNot){

    const existing = favourites.some(function (el) {
      return el.id === movieToCheckIfExistingOrNot.id;
    });

    if (!existing) {
       favourites = [...favourites, movieToCheckIfExistingOrNot];
    } else{
      favourites = favourites.filter(function(a){
        return a.id != movieToCheckIfExistingOrNot.id;
      })
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
