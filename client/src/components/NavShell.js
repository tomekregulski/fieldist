import React from "react";
import Userfront from "@userfront/react";
import { Route } from 'react-router-dom';
import UniversalNav from "./UniversalNav";
import LoggedOutNav from "./LoggedOutNav";

Userfront.init("demo1234");

function NavShell() {
  function renderFn({ location }) {
    // If the user is not logged in, redirect to login
    if (!Userfront.accessToken()) {
      return (
        <LoggedOutNav />
      );
    }

    // If the user is logged in, show the dashboard
    return (
      <UniversalNav />
    );
  }

  return <Route render={renderFn} />;
}

export default NavShell;