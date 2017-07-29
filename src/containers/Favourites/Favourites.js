import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/moviesActions';


class Favourites extends React.Component {
    constructor(props){
        super(props);
    }
    render() {
      const { actions, favourites } = this.props;
        return (
          <div>
            <h1 className="text-center">Favourite movies</h1>
            {
              favourites.favourites && favourites.favourites.map((movie) => {
                return (
                    <div className=" col-md-4 sm-12" key={movie.id}>
                          {
                            movie.backdrop_path ? (
                              <img className="moveImg"
                              onClick={this.showInfoOnClick}
                              src={"http://image.tmdb.org/t/p/w342" + movie.backdrop_path} />
                            ) : (
                              <img className="moveImg" src="https://www.omao.noaa.gov/sites/all/themes/noaa_omao/images/video-placeholder-640.jpg" />
                            )
                          }
                            <a href={"https://www.google.co.uk/search?q=" + movie.title }>
                                <h4 className="movieName">{movie.title }</h4>
                            </a>
                            <p>Release date : {movie.release_date}</p>
                            <p>👍🏻{movie.vote_average}</p>
                            <button className="pull-left" onClick={(e) => {actions.moviesRemove(movie)}}>Remove</button>
                    </div>
                );
              })
            }
          </div>
        );
    }
}

Favourites.propTypes = {
    actions: PropTypes.object.isRequired,
    movies: PropTypes.object.isRequired,
    favourites: PropTypes.object.isRequired
};


function mapStateToProps(state) {
    const { movies, isLoading, error, favourites  } = state;
    return {
        movies,
        isLoading,
        error,
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
)(Favourites );
