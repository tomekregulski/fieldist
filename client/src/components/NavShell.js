import React from 'react';
// import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Button } from 'react-bootstrap/Button';
// import axios from 'axios';
import AuthNav from "./auth-nav";
import AdminNav from "./AdminNav"
// import { useAuth0 } from "@auth0/auth0-react";


function NavShell() {

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>
        <img src='fieldist_logo.png' alt='Fieldist' id='nav-logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <AdminNav />
          <AuthNav />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavShell;