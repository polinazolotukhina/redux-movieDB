import React from 'react';
import PropTypes from 'prop-types';
import { Link, IndexLink } from 'react-router';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/moviesActions';

// Since this component is simple and static, there's no parent container for it.
class Navigation extends React.Component {
  render(){
    return (
        <nav className="navbar navbar-default navbar-static-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                        <span className="icon-bar" />
                    </button>
                    <IndexLink to="/" className="navbar-brand"><img src="../styles/icon.png"/></IndexLink>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link to="/popular">Popular</Link>
                        </li>
                        <li>
                            <Link to="/drama">Drama</Link>
                        </li>
                        <li>
                            <Link to="/kids">Kids Movies</Link>
                        </li>
                        <li>
                            <Link to="/in_cinema_now">In Cinema Now</Link>
                        </li>
                        <li>
                            <Link to="/search">Search</Link>
                        </li>
                        <li>
                            <Link to="/favourites">Favourites</Link>
                        </li>
                    </ul>
               </div>
            </div>
        </nav>
    );
  }
};

export default connect()(Navigation);
