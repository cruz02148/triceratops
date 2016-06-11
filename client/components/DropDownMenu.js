import React from 'react';
import { Component } from 'react';
import DropDownMenu from 'material-ui/DropDownMenu';
import MenuItem from 'material-ui/MenuItem';

export default class DropDownMenuList extends Component {

  constructor(props) {
    super(props);
    this.state = {value: 'Select'};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (event, index, value) {
    this.setState({value});
  }
  
  render() {
    return (
      <div>
        <DropDownMenu value={this.state.value} onChange={this.handleChange} >
          <MenuItem value={"Select"} primaryText="Select a Category" />
          <MenuItem value={"Electronics"} primaryText="Electronics" />
          <MenuItem value={"Furniture"} primaryText="Furniture" />
          <MenuItem value={"Home/Apartment"} primaryText="Home/Apartment" />
          <MenuItem value={"Tickets"} primaryText="Tickets" />
          <MenuItem value={"Automobiles"} primaryText="Automobiles" />
          <MenuItem value={"Sports/Equipment"} primaryText="Sports/Equipment" />
          <MenuItem value={"Clothing"} primaryText="Clothing" />
          <MenuItem value={"Other"} primaryText="Other" />
        </DropDownMenu>
      </div>
    );
  }
}