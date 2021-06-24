import React, { Component } from 'react';
// import uuid from "uuid/v8";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

class CreateBrand extends Component {
  constructor(props) {
    super(props);
    this.state = { name: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(evt) {
    this.setState({
      [evt.target.name]: evt.target.value,
    });
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const newBrand = { ...this.state };
    console.log(newBrand);
    axios
      .post('/api/brands', newBrand)
      .then((response) => console.log(response.data));
    this.setState({
      name: '',
    });
  }

  render() {
    return (
      <Form className='form-container' onSubmit={this.handleSubmit}>
        <h2 className='form-title'>Create Brand</h2>
        <Form.Group controlId='brand_name'>
          <Form.Label>Brand Name</Form.Label>
          <Form.Control
            type='text'
            name='name'
            value={this.state.name}
            onChange={this.handleChange}
            placeholder='Brand Name'
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Submit
        </Button>
      </Form>
    );
  }
}
export default CreateBrand;
