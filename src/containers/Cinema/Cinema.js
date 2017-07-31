import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../../actions/moviesActions';
import List  from '../../components/List';

class Cinema extends React.Component {
    constructor(props){
        super(props);
        this.showMovies = this.showMovies.bind(this);
        this.showMore = this.showMore.bind(this);
        this.showLess = this.showLess.bind(this);
        this.state = {
          page: 0
        }

    }

    componentDidMount(){
      this.showMovies();
    }
    showMore (){
      this.setState({ page: this.state.page + 1}, () => {
        this.showMovies();
      })
    }
    showLess (){
      this.setState({ page: this.state.page - 1}, () => {
        this.showMovies();
      })
    }

      showMovies(){
        const dateObj = new Date();
        const  month = dateObj.getUTCMonth() + 1; //months from 1-12
        const  day = dateObj.getUTCDate();
        const  year = dateObj.getUTCFullYear();
        const newdate = year + "-" + month + "-" + day;
        const params = {
          'primary_release_date.lte':newdate,
          'primary_release_date.gte': newdate,
           page: this.state.page +1
        }
        this.props.actions.getMovies(params, '/3/discover/movie?');
      }


    render() {
        const { movies, actions, movieOnHover } = this.props;
        const totalPages = movies.data.total_pages;
        return (
          <div>
            <h1>In Cinema Now</h1>
            <List movieprops={movies} actions={actions} hoverprops = {movieOnHover } />
            <div className="text-center">
              {
                this.state.page >0 &&
                <button className="btn btn-default"  onClick={this.showLess}> Previous page </button>
              }
                {
                  this.state.page < totalPages - 1 && <button className="btn btn-default" onClick={this.showMore}> Next page </button>
                }

            </div>
          </div>
        );
    }
}

Cinema.propTypes = {
    actions: PropTypes.object.isRequired,
    movies: PropTypes.object.isRequired,
    movieOnHover: PropTypes.object.isRequired,
};


function mapStateToProps(state) {
    const { movies, isLoading, error, movieOnHover } = state;
    return {
        movies,
        isLoading,
        error,
        movieOnHover
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
)(Cinema);
