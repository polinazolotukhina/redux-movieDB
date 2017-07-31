import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/moviesActions';


class FavouritesButton extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
        const { movie, favourites,  actions  } = this.props;
        console.log("I am HERE")
        const labelFav = (favourites.favourites.filter(e => e.id == movie.id).length > 0) ? 'Remove from Favourites' : 'Add to Favourites';
        return (
          <div>
            <button onClick= {() => { actions.addRemoveFavourites(movie)}}>{labelFav}</button>
            <button onClick= {() => { actions.showInfoOnHover(movie)}}> Show Info </button>
          </div>
        )
    }
}


function mapStateToProps(state) {
    const { favourites } = state;
    return {
        favourites
    };
}


function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch)
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(FavouritesButton);
