import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/moviesActions';
import List  from '../../components/List';

class Drama extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
      const params = {
        with_genres: 18,
        sort_by:'vote_average.desc',
        'vote_count.gte':10
      }
      this.props.actions.getMovies(params, '/3/discover/movie?');
    }

    render() {
        const { actions, movies } = this.props;
        console.log(actions);
        return (
          <div>
            <h1>Drama movies</h1>
            <List movieprops={movies} actions={actions} />
          </div>
        );
    }
}

Drama.propTypes = {
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
)(Drama) ;
