import React, { Component } from "react";
// import uuid from "uuid/v8";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateDemo extends Component {
  constructor(props) {
    super(props);
    this.state = { brand_name: "", campaign_name: "", venue_name: "", rep_name: "", start_time: "", duration:"" };
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
    const newWEvent = { ...this.state };
    console.log(newWEvent);
    this.setState({
      brand_name: "", 
      campaign_name: "", 
      enue_name: "", 
      rep_name: "", 
      start_time: "", 
      duration:""
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
              name="brand_name" 
              value={this.state.brand_name} 
              onChange={this.handleChange} 
              placeholder="Brand Name" 
            />
          </Form.Group>
          <Form.Group controlId="campaign_name">
            <Form.Label>Campaign Name</Form.Label>
            <Form.Control 
              type="text" 
              name="campaign_name" 
              value={this.state.campaign_name} 
              onChange={this.handleChange} 
              placeholder="Campaign Name" 
            />
          </Form.Group>
          <Form.Group controlId="demo_venue">
            <Form.Label>Venue Name</Form.Label>
            <Form.Control 
              type="text" 
              name="venue_name" 
              value={this.state.venue_name} 
              onChange={this.handleChange} 
              placeholder="Venue" 
            />
          </Form.Group>
          <Form.Group controlId="demo_rep_name">
            <Form.Label>Rep Name</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="Rep Name"
              name="rep_name" 
              value={this.state.rep_name}
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