import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import { requestUserDetails } from '../../actions/getUserDetails';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
    };
  }
  componentDidMount() {
    this.props.requestUserDetails(this.props.token);
  }

  render() {
    if (this.props.details) {
      return (
        <form>
          <FormGroup
            controlId="formBasicText"
          >
            <ControlLabel>Email address</ControlLabel>
            <FormControl
              type="text"
              value={this.props.details.email}
              placeholder="Enter text"
            />
            <ControlLabel>Full name</ControlLabel>
            <FormControl
              type="text"
              value={this.props.details.name}
              placeholder="Enter text"
            />
            <ControlLabel>Street</ControlLabel>
            <FormControl
              type="text"
              value={this.props.details.address}
              placeholder="Enter text"
            />
            <ControlLabel>City</ControlLabel>
            <FormControl
              type="text"
              value={this.props.details.city}
              placeholder="Enter text"
            />
            <ControlLabel>Postcode</ControlLabel>
            <FormControl
              type="text"
              value={this.props.details.postcode}
              placeholder="Enter text"
            />
            <ControlLabel>Phone number</ControlLabel>
            <FormControl
              type="text"
              value={this.props.details.phone}
              placeholder="Enter text"
            />
          </FormGroup>
        </form>
      );
    }
  }
}

const mapStateToProps = state => ({
  token: state.auth.token,
  details: state.userDetails.details,
});

const mapDispatchToProps = dispatch => ({
  requestUserDetails: value => dispatch(requestUserDetails(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
