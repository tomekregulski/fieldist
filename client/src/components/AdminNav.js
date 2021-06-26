import React from 'react';
// import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Button } from 'react-bootstrap/Button';
import { useAuth0 } from "@auth0/auth0-react";

function AdminNav() {
const { isAuthenticated } = useAuth0();

  return isAuthenticated ? 
    <Navbar bg='light' expand='lg'>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          <NavDropdown
            className='ml-md-5'
            title='Events'
            id='basic-nav-dropdown'
          >
            <NavDropdown.Item href='/schedule'>View Schedule</NavDropdown.Item>
            <NavDropdown.Item href='/new-campaign'>
              Create Campaign
            </NavDropdown.Item>
            <NavDropdown.Item href='/new-event'>Create Events</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown className='ml-md-5' title='Data' id='basic-nav-dropdown'>
            <NavDropdown.Item href='/data-charts'>Charts</NavDropdown.Item>
            <NavDropdown.Item href='/raw-data'>Raw Data</NavDropdown.Item>
            <NavDropdown.Item href='/gallery'>Photo Gallery</NavDropdown.Item>
          </NavDropdown>
          <NavDropdown
            className='ml-md-5'
            title='Admin'
            id='basic-nav-dropdown'
          >
            <NavDropdown.Item href='/new-user'>Create User</NavDropdown.Item>
            <NavDropdown.Item href='/new-brand'>Create Brand</NavDropdown.Item>
            <NavDropdown.Item href='/new-region'>
              Create Region
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    :
    <>
    </>
}

export default AdminNav;