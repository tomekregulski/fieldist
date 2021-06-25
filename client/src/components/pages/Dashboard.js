import React, { Component } from "react";
import "./dashboard.css"

class Dashboard extends Component {
  // state = {
  //   userrole: "",
  // };

  render() {
    return (
      <div className="text-center">
        <h1>Welcome to fieldist!</h1>
        <h2>Use the navigation above to get around.</h2>
        <div className="image-center-container">
          <img src="fieldist_logo.png" alt="Fieldist" className="logo-center" />
        </div>
      </div>
    );
  }
}

export default Dashboard;