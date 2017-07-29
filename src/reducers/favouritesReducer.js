import {
    MOVIES_FAVOURITE,
} from '../constants/actionTypes';
import initialState from './initialState';
// || favourites.id.includes(movieToCheckIfExistingOrNot.id)


function favouriteMovie(favourites, movieToCheckIfExistingOrNot){

    var existing = favourites.some(function (el) {
      return el.id === movieToCheckIfExistingOrNot.id;
    });
    console.log('existing', existing);

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
