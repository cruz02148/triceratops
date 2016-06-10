import React from 'react';
import { Component } from 'react';
import Paper from 'material-ui/Paper';
import {connect} from 'react-redux';
import RentDateComponenet from '../containers/RentDateContainer';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import MapComponenet from './Map.js';
import CommentList from './CommentList';
import {FacebookButton, TwitterButton, PinterestButton} from 'react-social';

class ItemDetailComponent extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount(){
    if(!this.props.auth.isAuthenticated) {
      return this.props.redirectToLogin();
    } else {
      this.props.fetchUpdatedProducts(this.props.params.itemId);
    }
  }

  render(){
    const { item, user, ui, popupClose, setMapCenter, postComment }  = this.props;
    return (
      <div>
        <div className="productBanner">
          <div className='productBody col-md-7'>
            <Paper zDepth={3}  className='productImage'>
                <span></span>
                <img src={item.imgURL} />
            </Paper>
          </div>
          <div className='productBody col-md-5'>
            <h3>{item.title}</h3>
            <p><b>Details: </b>{item.description}</p>
            <h3>${item.price}.00</h3>
            <FacebookButton
              url= {window.location.href}
              className="fb-button"
              message= {`CHeck out this ${item.description} for rent on Share Anything`}
            >
              {"Share on Facebook"}
            </FacebookButton>
            <TwitterButton
              url={window.location.href}
              message={`Check out this ${item.description} for rent on Share Anything`}
              className="tw-button"
            >
              {"Share on Twitter"}
            </TwitterButton>
            <PinterestButton
              message={`Check out this ${item.description}`}
              media={item.imgURL}
              className="pi-button"
            >
            {"Share on Pintrest"}
            </PinterestButton>
            {item.author && item.author.username !== user.username &&
              <RentDateComponenet />
            }
            
            <Dialog
              actions={
                <FlatButton
                  label="Ok"
                  primary={true}
                  onClick={popupClose}
                />
              }
              modal={false}
              open={ui.popup.open}
              onRequestClose={popupClose}
            >
              {ui.popup.content}
            </Dialog>
          </div>
          <div className='productBody col-md-5 map-wrapper'>
            <div id="map-container">
            {item.locationInfo ?
              <MapComponenet
                center={item.locationInfo.marker}
                draggable={false}
                setMapCenter={setMapCenter}
                setMarkerCenter={() => {}}
                findGeolcation={false}
                searchBox={false}
              /> : null
            }
            </div>
          </div>
        </div>
        <CommentList item={item} user={user} postComment={postComment} productId={this.props.params.itemId}/>
      </div>
    );
  }
}

export default ItemDetailComponent;
