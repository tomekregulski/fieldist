import React, { Component } from "react";
// import uuid from "uuid/v8";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from "axios";

class CreateDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { brand_id: "", campaign_id: "", venue_id: "", rep_id: "", start_time: "", duration:"" };
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
    const newDemo = { ...this.state };
    console.log(newDemo);
    axios.post('http://localhost:8081/api/demos', newDemo)
        .then(response => console.log(response.data));
    this.setState({
      brand_id: "", 
      campaign_id: "", 
      venue_id: "", 
      rep_id: "", 
      start_time: "", 
      duration: ""
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="demo_brand_name">
            <Form.Label>Brand Name</Form.Label>
            <Form.Control 
              type="text" 
              name="brand_id" 
              value={this.state.brand_id} 
              onChange={this.handleChange} 
              placeholder="Brand Name" 
            />
          </Form.Group>
          <Form.Group controlId="campaign_name">
            <Form.Label>Campaign Name</Form.Label>
            <Form.Control 
              type="text" 
              name="campaign_id" 
              value={this.state.campaign_id} 
              onChange={this.handleChange} 
              placeholder="Campaign Name" 
            />
          </Form.Group>
          <Form.Group controlId="demo_venue">
            <Form.Label>Venue Name</Form.Label>
            <Form.Control 
              type="text" 
              name="venue_id" 
              value={this.state.venue_id} 
              onChange={this.handleChange} 
              placeholder="Venue" 
            />
          </Form.Group>
          <Form.Group controlId="demo_rep_name">
            <Form.Label>Rep Name</Form.Label>
            <Form.Control 
              type="text" 
              placeholder="Rep Name"
              name="user_id" 
              value={this.state.user_id}
              onChange={this.handleChange} 
            />
          </Form.Group>
          <Form.Group controlId="demo_start_time">
            <Form.Label>Start Time</Form.Label>
            <Form.Control
              type="text" 
              placeholder="Start Time"
              name="start_time" 
              value={this.state.start_time}
              onChange={this.handleChange} 
            />
          </Form.Group>
          <Form.Group controlId="demo_duration">
            <Form.Label>Duration</Form.Label>
            <Form.Control
              type="text" 
              placeholder="Duration"
              name="duration" 
              value={this.state.duration}
              onChange={this.handleChange} 
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
export default CreateDemo;