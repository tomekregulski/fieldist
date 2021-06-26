import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import AuthNav from "../../auth-nav";
class LoginForm extends Component {
  state = {
    email: '',
    password: '',
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value,
    });
  };

  handleFormSubmit = (event) => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    const loginCreds = { ...this.state };
    console.log(loginCreds);
    axios
      .post('/api/users/login', loginCreds)
      .then((response) => console.log(response.data));

    // if (!this.state.email) {
    //   alert("Please enter your email!")
    // } else if ((this.state.email) && (this.state.password.length < 6)) {
    //   alert(`Please choose a more secure password, ${this.state.email}`)
    // } else if ((this.state.email) && (this.state.password.length >= 6)) {
    // alert(`Hello ${this.state.email}`);
    // }
    this.setState({
      email: '',
      password: '',
    });
  };

  render() {
    return (
      <Card
        style={{ width: '25rem', margin: '150px auto 0', padding: '0 50px' }}
      >
        <img src='fieldist_logo.png' alt='Fieldist' id='login-logo' />
        <Card.Body>
          <Card.Title className='text-center'>Fieldist Login</Card.Title>
          <Form className='mt-3' onSubmit={this.handleFormSubmit}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                placeholder='Enter email'
                value={this.state.email}
                name='email'
                onChange={this.handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                placeholder='Password'
                value={this.state.password}
                name='password'
                onChange={this.handleInputChange}
              />
            </Form.Group>
            <Button
              // onClick={this.handleFormSubmit}
              variant='primary'
              type='submit'
              // href="/"
            >
              Log in
            </Button>
            <Form.Text className='text-muted mt-3'>
              Forgot your credentials? <br />
              Reach out to support@fieldist.com and we'll get you set up!
            </Form.Text>
          </Form>
        </Card.Body>
      </Card>
    );
  }
}

export default LoginForm;
