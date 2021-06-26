import React, { Component } from "react";
import "./dashboard.css"
import Userfront from "@userfront/react";
import { Route, Redirect } from 'react-router-dom';

Userfront.init("demo1234");

function Dashboard() {
  function renderFn({ location }) {
    // If the user is not logged in, redirect to login
    if (!Userfront.accessToken()) {
      return (
        <Redirect
          to={{
            pathname: "/login",
            state: { from: location },
          }}
        />
      );
    }

    async function getInfo() {
      const res = await window.fetch("http://localhost:8081/api/demos", {
      method: "GET",
        headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${Userfront.accessToken()}`,
      },
    });

    console.log(res);
  }

  getInfo();

    // If the user is logged in, show the dashboard
    const userData = JSON.stringify(Userfront.user, null, 2);
    return (
      <div className="text-center">
         <h1>Welcome to fieldist!</h1>
         <h2>Use the navigation above to get around.</h2>
         <div className="image-center-container">
           <img src="fieldist_logo.png" alt="Fieldist" className="logo-center" />
         </div>
         <pre>{userData}</pre>
       </div>
    );
  }

  return <Route render={renderFn} />;
}

export default Dashboard;