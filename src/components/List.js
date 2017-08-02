import React, { Component } from 'react';
import FavouritesButton from './FavouritesButton';

export default class List extends Component {

  render() {
    const {  movieprops, hoverprops } = this.props;

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
                    <div >
                      <div className="info">
                          <a href={"https://www.google.co.uk/search?q=" + item.title }>
                              <h4 className="movieName">{item.title }</h4>
                          </a>
                          <FavouritesButton movie={item} hoverprops={hoverprops}   />
                      </div>
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
