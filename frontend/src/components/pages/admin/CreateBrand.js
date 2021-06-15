import React, { Component } from "react";
// import uuid from "uuid/v8";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CreateBrand extends Component {
  constructor(props) {
    super(props);
    this.state = { brand_name: "", first_name: "", last_name: "", email: "", password: "", };
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
    const newBrand = { ...this.state };
    console.log(newBrand);
    this.setState({
      brand_name: "",
      first_name: "",
      last_name: "",
      email: "",
      password: ""
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
          <Form.Group controlId="contact_first_name">
            <Form.Label>First Name</Form.Label>
            <Form.Control 
              type="text" 
              name="first_name" 
              value={this.state.first_name} 
              onChange={this.handleChange} 
              placeholder="First Name" 
            />
          </Form.Group>
          <Form.Group controlId="contact_last_name">
            <Form.Label>Last Name</Form.Label>
            <Form.Control 
              type="text" 
              name="last_name" 
              value={this.state.last_name} 
              onChange={this.handleChange} 
              placeholder="Last Name" 
            />
          </Form.Group>
          <Form.Group controlId="contact_email">
            <Form.Label>Email</Form.Label>
            <Form.Control 
              type="email" 
              placeholder="email"
              name="email" 
              value={this.state.email}
              onChange={this.handleChange} 
            />
          </Form.Group>
          <Form.Group controlId="contact_password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="text" 
              placeholder="Password"
              name="password" 
              value={this.state.password}
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
export default CreateBrand;