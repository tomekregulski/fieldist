import React, { Component } from "react";
// import uuid from "uuid/v8";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

class CreateRegion extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newRegion = { ...this.state };
    console.log(newRegion);
    axios.post('/api/regions', newRegion)
        .then(response => console.log(response.data.id));
    this.setState({
      region_name: "",
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="region_name">
            <Form.Label>Brand Name</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              value={this.state.name} 
              onChange={this.handleChange} 
              placeholder="Region Name" 
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  }
}
export default CreateRegion;