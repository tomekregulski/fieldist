import React, { Component } from "react";

import UserService from "../services/user.service";

export default class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: 'hello'
        });
        // console.log(response.data);
      },
      error => {
        this.setState({
          content: error.response.data.message
            // (error.response && error.response.data) ||
            // error.message ||
            // error.toString()
        });
        console.log(error.response.data);
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
        </header>
      </div>
    );
  }
}