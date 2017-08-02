import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators} from 'redux';
import * as actions from '../actions/moviesActions';

import { Button, Popover, Tooltip, Modal, OverlayTrigger  } from 'react-bootstrap';


class FavouritesButton extends React.Component {
  constructor(props){
    super(props);
    this.close = this.close.bind(this);
    this.open = this.open.bind(this);
     this.state = {showModal: false}
  }

  close() {
    this.setState({ showModal: false });
  }

  open() {
    this.props.actions.showInfoOnHover(this.props.movie);
    this.setState({ showModal: true });

}


  render() {
        const { movie, favourites,  actions, hoverprops  } = this.props;
        const data = hoverprops.movieOnHover;
        const labelFav = (favourites.favourites.filter(e => e.id == movie.id).length > 0) ? 'Remove from Favourites' : 'Add to Favourites';

        const popover = (
          <Popover id="modal-popover" title="popover">
            very popover. such engagement
          </Popover>
        );
        const tooltip = (
          <Tooltip id="modal-tooltip">
            wow.
          </Tooltip>
        );

        return (
          <div>
          <div>
       <Modal show={this.state.showModal} onHide={this.close}>
         <Modal.Header closeButton>
           <Modal.Title><h2>{data&&data.title}</h2></Modal.Title>
         </Modal.Header>
         <Modal.Body>
           <h4>Release day </h4>
           <p>{data&&data.release_date}</p>

           <h4>Original Language </h4>
           <p>{data&&data.original_language}</p>

           <h4>Rating</h4>
           <p>👍🏻{data&&data.vote_average}</p>

           <hr />

           {
             data &&
             <div>
              <h4>Overview</h4>
               <p>{data.overview}</p>
             </div>
           }

           <hr />


           <img src={ data&&"http://image.tmdb.org/t/p/w342" + data.backdrop_path} />
           <Button onClick= {() => { actions.addRemoveFavourites(movie)}}>{labelFav}</Button>

         </Modal.Body>
         <Modal.Footer>
           <Button onClick={this.close}>Close</Button>
         </Modal.Footer>
       </Modal>
     </div>

            <button onClick= {() => { actions.addRemoveFavourites(movie)}}>{labelFav}</button>

        < button onClick={this.open}> Show Info < /button>

          </div>
        )
    }
}


function mapStateToProps(state) {
    const { favourites } = state;
    return {
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
)(FavouritesButton);
