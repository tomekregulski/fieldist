import React, {Component} from "react";
import "../App.css";

class LoginForm extends Component {
  state = {
    username: "",
    password: "",
  };
  
  handleInputChange = event => {

    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    if (!this.state.username) {
      alert("Please enter your username!")
    } else if ((this.state.username) && (this.state.password.length < 6)) {
      alert(`Please choose a more secure password, ${this.state.username}`)
    } else if ((this.state.username) && (this.state.password.length >= 6)) {
    alert(`Hello ${this.state.username}`);
    }
    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <p className="center-text">
          Hello {this.state.username}, this form is still being developed, but we hope you come back soon and try registering in again!
        </p>
        <form className="form">
          <label for="username">Username</label>
          <input
            value={this.state.username}
            name="username"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Username"
          />
          <label for="password">Password</label>
          <input
            value={this.state.password}
            name="password"
            onChange={this.handleInputChange}
            type="password"
            placeholder="Password"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}

export default LoginForm;
