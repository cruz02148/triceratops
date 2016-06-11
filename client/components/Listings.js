import React from 'react';
import {Component} from 'react';
import SingleListingItemSimple from '../components/SingleListingItemSimple';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import Carousel from 'nuka-carousel';

class ListingsComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.fetchUpdatedProducts();
  }

  render() {
    const { products, resetSearch } = this.props;
    return (
      <div>
        <div className="slider">
          <Carousel autoplay={true} wrapAround={true}>
            <div className="featured__image featured__image--0">
              <div className="img__overlay">
                <div className="featured__txt">
                  Share Anything...
                </div>
              </div>
            </div>
            <div className="featured__image featured__image--1">
              <div className="img__overlay">
                <div className="featured__txt">
                  Electronics
                </div>
              </div>
            </div>
            <div className="featured__image featured__image--2">
              <div className="img__overlay">
                <div className="featured__txt">
                  Food
                </div>
              </div>
            </div>
            <div className="featured__image featured__image--3">
              <div className="img__overlay">
                <div className="featured__txt">
                  Pets
                </div>
              </div>
            </div>
            <div className="featured__image featured__image--4">
              <div className="img__overlay">
                <div className="featured__txt">
                  Books
                </div>
              </div>
            </div>
            <div className="featured__image featured__image--5">
              <div className="img__overlay">
                <div className="featured__txt">
                  Equipment
                </div>
              </div>
            </div>
            <div className="featured__image featured__image--6">
              <div className="img__overlay">
                <div className="featured__txt">
                  Tickets
                </div>
              </div>
            </div>
          </Carousel>
        </div>
        <div className="shares">
          {products.filter !== '' ?
            <AppBar
              className="filterBar"
              title={<span>Filter by : {products.filter}</span>}
              iconElementLeft={<IconButton onClick={resetSearch}><NavigationClose /></IconButton>}
            />
            : null }
          {products.items.filter((item) => {
            if (item.title.concat(item.summary, item.description).toLowerCase().indexOf(products.filter.toLowerCase()) !== -1) {
              return true;
            }
            return false;
          }).map((item)=> {
            return <SingleListingItemSimple key={item._id} item={item}/>
          })}
        </div>
      </div>
    )
  }
}


export default ListingsComponent;
