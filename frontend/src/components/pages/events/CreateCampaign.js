import React, { Component } from "react";
// import uuid from "uuid/v8";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = { brand_name: "", report_template_name: "" };
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
    const newCampaign = { ...this.state };
    console.log(newCampaign);
    this.setState({
      brand_name: "",
      report_template_name: ""
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group controlId="brand_name">
            <Form.Label>Brand Name</Form.Label>
            <Form.Control 
              type="text" 
              name="brand_name" 
              value={this.state.brand_name} 
              onChange={this.handleChange} 
              placeholder="Brand Name" 
            />
          </Form.Group>
          <Form.Group controlId="report_template_name">
            <Form.Label>Report Template Name</Form.Label>
            <Form.Control 
              type="text" 
              name="report_template_name" 
              value={this.state.report_template_name} 
              onChange={this.handleChange} 
              placeholder="Report Template Name" 
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
export default CreateCampaign;