import React from 'react';
// import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Button } from 'react-bootstrap/Button';
import axios from 'axios';
import Userfront from "@userfront/react";

Userfront.init("demo1234");

function LoggedOutNav() {

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>
        <img src='fieldist_logo.png' alt='Fieldist' id='nav-logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default LoggedOutNav;