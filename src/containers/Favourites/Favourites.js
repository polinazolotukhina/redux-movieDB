import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/moviesActions';
import List  from '../../components/List';

class Favourites extends React.Component {
    constructor(props){
        super(props);

    }
    // componentDidMount(){
    //   this.showMovies();
    // }
    // showMovies(){
    //   const params = {
    //     'primary_release_date.lte':newdate,
    //     'primary_release_date.gte': newdate,
    //      page: this.state.page +1
    //   }
    //   this.props.actions.getMovies(params, '3/movie/?');
    // }


// http://api.themoviedb.org/3/movie/16535?api_key=79eb5f868743610d9bddd40d274eb15d

    render() {
      const { favourites } = this.props;
      console.log("favourites lalal", favourites)
        return (
          <div>
            <h1 className="text-center">Favourite movies</h1>

            {
              favourites && favourites.map((item, index) => <div key={index}>{item}</div>)
            }

          </div>
        );
    }
}

Favourites.propTypes = {
    actions: PropTypes.object.isRequired,
    movies: PropTypes.object.isRequired,
    favourites: PropTypes.array.isRequired
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
