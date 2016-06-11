import React from 'react';
import { Link } from 'react-router'; // for back button?
import { updateFormField } from '../actions/index';
import { addNewListing } from '../actions/index';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';
import RaisedButton from 'material-ui/RaisedButton';
import {blueGrey500} from 'material-ui/styles/colors';
import MapComponenet from './Map.js';
import Formsy from 'formsy-react';
import {FormsyText} from 'formsy-material-ui/lib';

const errorStyle = {
    color: blueGrey500
  };

const DateTimeFormat = global.Intl.DateTimeFormat;

const NewListingComponenet = (props) => {
  const { fields, handleSubmit, resetForm, isAttemptingToAdd, mapUpdate, ui, setMapCenter, setMarkerCenter } = props;
  
  const formStyle = {
    color: blueGrey500
  };
  
  return (
    <div>
      <form className='addForm'>
      {isAttemptingToAdd ? <p>Adding new listing, please wait...</p> : null}
        <ul style={{listStyle:'none', background:'rgba(255,255,255,0.8)'}}>
          <li><TextField hintStyle={errorStyle} hintText={'Type'} {...fields.type}/>
          <TextField hintStyle={errorStyle} hintText={'Title'} {...fields.title}/></li>
          <li><TextField hintStyle={errorStyle} fullWidth={true} hintText={'Summary'} {...fields.summary}/></li>
          <li><TextField hintStyle={errorStyle} fullWidth={true} multiLine={true} rows={2} hintText={'Description'} {...fields.description}/></li>
          <li>
            <Formsy.Form>
              <FormsyText
                name="Price"
                hintText="Price"
                validations='isNumeric'
                validationError="Please enter numbers only"
                style={formStyle}
                {...fields.price}
              />
            </Formsy.Form>
          </li>
          <li><DatePicker
            autoOk={true}
            hintStyle={errorStyle}
            hintText="Available From"
            formatDate={new DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }).format}
            onChange={(x, event) => fields.availableFrom.onChange(event)}
          /><DatePicker
            autoOk={true}
            hintStyle={errorStyle}
            hintText="Available To"
            formatDate={new DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'long',
              year: 'numeric',
            }).format}
            onChange={(x, event) => fields.availableTo.onChange(event)}
          /></li>
          <li><TextField hintStyle={errorStyle} fullWidth={true} hintText={'Image Url'} {...fields.imgURL}/></li>

          <li><TextField hintStyle={errorStyle} hintText={'Address'} {...fields.locationInfo}/>
          <div id="map-container">
          <MapComponenet
            center={ui.location}
            draggable={true}
            setMapCenter={setMapCenter}
            setMarkerCenter={setMarkerCenter}
            findGeolcation={true}
            searchBox={true}
          />
          </div>
            <RaisedButton backgroundColor='cyan50' primary={true} style={{float:'right'}} label="Share" onClick={handleSubmit(props.addNewListing)} type="button"/>
          </li>
        </ul>
      </form>
    </div>
    );
};

export default NewListingComponenet;
