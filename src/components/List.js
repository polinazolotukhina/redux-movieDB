import React, { Component } from 'react';
import * as actions from '../actions/moviesActions';

export default class List extends Component {


  render() {
    const { actions, movieprops } = this.props;
    return (
      <div className>
        <div className="row">
            {
              movieprops.data.results && movieprops.data.results.map((item ) =>
                <div className=" col-md-4 sm-12" key={item.id}>
                  <div className="movie">
                        {
                          item.backdrop_path ? (
                            <img className="moveImg"
                            onClick={this.showInfoOnClick}
                            src={"http://image.tmdb.org/t/p/w342" + item.backdrop_path} />
                          ) : (
                            <img className="moveImg" src="https://www.omao.noaa.gov/sites/all/themes/noaa_omao/images/video-placeholder-640.jpg" />
                          )
                        }
                      <div className="info">
                          <a href={"https://www.google.co.uk/search?q=" + item.title }>
                              <h4 className="movieName">{item.title }</h4>
                          </a>
                          <p>Release date : {item.release_date}</p>
                          <p>👍🏻{item.vote_average}</p>
                          <button className="pull-left" onClick={() => {actions.moviesAdd(item)}}>Save to Favourites </button>
                      </div>
                  </div>
                </div>
              )
            }
        </div>
      </div>
    )
  }
}
