import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/moviesActions';
import List  from '../../components/List';

class Search extends React.Component {
    constructor(props){
        super(props);
        this.search = this.search.bind(this)
        this.search({target: {value: ''}});
    }

    search(e){
      const query = e.target.value;
      const params = {}
      if (query != '') {
        params.query = query;
      } else {
        params.query = '';
      }
      this.props.actions.getMovies(params, '/3/search/movie?');
    }

    render() {
        const { movies, actions } = this.props;
        return (
          <div className="search">
            <h1 className="text-center">Search</h1>
            <div className="text-center">
            <input className="text-center" placeholder="Search for movies..." onChange={this.search}/>
            </div>
            <List movieprops={movies} actions={actions} />
          </div>
        );
    }
}

Search.propTypes = {
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
)(Search );
