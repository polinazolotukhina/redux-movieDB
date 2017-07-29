import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/moviesActions';
import List  from '../../components/List';


class Search extends React.Component {
    constructor(props){
        super(props);
    }

    componentDidMount(){
    }

    render() {
        const { movies } = this.props;
        console.log("movies", movies)
        return (
          <div>
            <form className="navbar-form navbar-right">
                <div className="form-group">
                    <input type="text" className="form-control" placeholder="search..." />
                </div>
            </form>
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
)(Search);
