import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/moviesActions';
const FontAwesome = require('react-fontawesome');



class HomePage extends React.Component {
    constructor(props){
        super(props);
        this.showNewMovie = this.showNewMovie.bind(this);
        this.showNewMovie();
    }

    showNewMovie(){
      const page = Math.floor((Math.random() * 1000) + 1);
      const params = {
        sort_by: 'popularity.descs',
        page: page
      }
      this.props.actions.getMovies(params, '/3/discover/movie?');
    }

    render() {
        const { movies } = this.props;
        if(!movies.data.results ){
          return <div>Loading...</div>;
        }
        const arr = movies.data.results[0];
        return (
          <div className="row">
          <div className="col-md-offset-2 col-md-8">





            <h1 className="text-center">Why not to watch '{arr.title}'?</h1>
            {
              (movies.isLoading)?(
                <div className ='load'>
                      <FontAwesome name="spinner" size='4x'spin style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}/>
                 </div>
              ):(

                  (arr.backdrop_path) ? (
                  <img src={"http://image.tmdb.org/t/p/w342" + arr.backdrop_path} />
                ) : (
                  <img src={"https://www.omao.noaa.gov/sites/all/themes/noaa_omao/images/video-placeholder-640.jpg"} />
                )

            )}


            <h4  className="movieName text-center">{arr.title}</h4>
            <p  className="movieName text-center">{arr.overview}</p>
            <div className="text-center">
              <button className="btn btn-default" onClick={this.showNewMovie}>Suggest me something else</button>
            </div>

            </div>
          </div>
        );
    }
}

HomePage.propTypes = {
    actions: PropTypes.object.isRequired,
    movies: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { movies, isLoading, error  } = state;
    return {
        movies,
        isLoading,
        error
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
)(HomePage);
