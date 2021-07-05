import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

import AuthService from "../../../services/auth.service";

const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);

    this.state = {
      email: "",
      password: "",
      loading: false,
      message: ""
    };
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }

  handleLogin(e) {
    e.preventDefault();
    console.log('hello');
    this.setState({
      message: "",
      loading: true
    });

    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      
      AuthService.login(this.state.email, this.state.password).then(
        () => {
          this.props.history.push("/");
          window.location.reload();
        },
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            loading: false,
            message: resMessage
          });
        }
      );
    } else {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    return (
      // <Card
      //   style={{ width: '25rem', margin: '150px auto 0', padding: '0 50px' }}
      // >
      //   <img src='fieldist_logo.png' alt='Fieldist' id='login-logo' />
      //   <Card.Body>
      //     <Card.Title className='text-center'>Fieldist Login</Card.Title>
      //     <Form className='mt-3' onSubmit={this.handleFormSubmit}>
      //       <Form.Group controlId='formBasicEmail'>
      //         <Form.Label>Email address</Form.Label>
      //         <Form.Control
      //           type='email'
      //           placeholder='Enter email'
      //           value={this.state.email}
      //           name='email'
      //           onChange={this.handleInputChange}
      //         />
      //       </Form.Group>

      //       <Form.Group controlId='formBasicPassword'>
      //         <Form.Label>Password</Form.Label>
      //         <Form.Control
      //           type='password'
      //           placeholder='Password'
      //           value={this.state.password}
      //           name='password'
      //           onChange={this.handleInputChange}
      //         />
      //       </Form.Group>
      //       <Button
      //         // onClick={this.handleFormSubmit}
      //         variant='primary'
      //         type='submit'
      //         // href="/"
      //       >
      //         Log in
      //       </Button>
      //       <Form.Text className='text-muted mt-3'>
      //         Forgot your credentials? <br />
      //         Reach out to support@fieldist.com and we'll get you set up!
      //       </Form.Text>
      //     </Form>
      //   </Card.Body>
      // </Card>
      <div className="col-md-12">
        <div className="card card-container">
          <img
            src="fieldist_logo.png"
            alt="Fieldist"
            className="profile-img-card"
          />

          <Form
            onSubmit={this.handleLogin}
            ref={c => {
              this.form = c;
            }}
          >
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Input
                type="text"
                className="form-control"
                name="email"
                value={this.state.email}
                onChange={this.onChangeEmail}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Input
                type="password"
                className="form-control"
                name="password"
                value={this.state.password}
                onChange={this.onChangePassword}
                validations={[required]}
              />
            </div>

            <div className="form-group">
              <button
                className="btn btn-primary btn-block"
                disabled={this.state.loading}
              >
                {this.state.loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div>

            {this.state.message && (
              <div className="form-group">
                <div className="alert alert-danger" role="alert">
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}