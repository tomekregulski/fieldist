import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import AuthService from "../services/auth.service";

function UniversalNav(props) {
  const handleLogout = () => {
    AuthService.logout();
  };

  console.log('universal nav');
  console.log(props.currentUser);
  
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  console.log(props);

  return (
    <Navbar bg='light' expand='lg'>
      <Navbar.Brand href='/'>
        <img src='fieldist_logo.png' alt='Fieldist' id='nav-logo' />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='mr-auto'>
          {props.showAdminNav && (
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
          )}

          {props.showContactNav && (
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
          )}

          {props.showRepNav && (
          <Nav.Link className='ml-5' href='/schedule'>
            Schedule
          </Nav.Link>
          )}

          {props.showRepNav && (
          <Nav.Link className='ml-5' href='/'>
            Reports Due
          </Nav.Link>
          )}

          {props.showAdminNav && (
          <NavDropdown className='ml-md-5' title='Data' id='basic-nav-dropdown'>
            <NavDropdown.Item href='/data-charts'>Charts</NavDropdown.Item>
            <NavDropdown.Item href='/raw-data'>Raw Data</NavDropdown.Item>
            <NavDropdown.Item href='/gallery'>Photo Gallery</NavDropdown.Item>
          </NavDropdown>
          )}

          {props.showContactNav && (
          <NavDropdown className='ml-md-5' title='Data' id='basic-nav-dropdown'>
            <NavDropdown.Item href='/data-charts'>Charts</NavDropdown.Item>
            <NavDropdown.Item href='/raw-data'>Raw Data</NavDropdown.Item>
            <NavDropdown.Item href='/gallery'>Photo Gallery</NavDropdown.Item>
          </NavDropdown>
          )}
          
          {props.showAdminNav && (
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
          )}
          {props.currentUser ? (
            <Nav.Link className='ml-5 nav-link' href="/login" onClick={() => handleLogout()} >
                Log Out
            </Nav.Link>
              ) : (
                <>
                </>
              )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default UniversalNav;
