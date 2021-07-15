import React from "react";
import "./dashboard.css"
import {Redirect} from "react-router-dom";

  function Dashboard() {

    // if (!JSON.parse(localStorage.getItem('user'))) {
    //     return (
    //       <Redirect to={'/login'} />
    //     )
    // }

    const user = JSON.parse(localStorage.getItem('user'));

    return (
      <div className="text-center mt-5">
        <h1>Welcome, {user.first_name}!</h1>
        <h2 className="mt-4">Lots going on today - use the navigation above to get around.</h2>
        <div className="image-center-container">
          <img src="fieldist_logo.png" alt="Fieldist" className="logo-center" />
        </div>
      </div>
    );
  }

  

export default Dashboard;
