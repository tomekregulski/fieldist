import React from 'react';
// import { Link, useLocation } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import { Link } from "react-router-dom";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
// import { Button } from 'react-bootstrap/Button';
import axios from 'axios';

function UniversalNav(props) {
  const handleLogout = () => {
    // axios
    //   .post('/api/users/logout')
    //   .then((response) => console.log(response.data))
    //   .catch((err) => console.log(err));
    props.logOut();
  };
  
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  console.log(props);

  return (
    // <Navbar bg='light' expand='lg'>
    //   <Navbar.Brand href='/'>
    //     <img src='fieldist_logo.png' alt='Fieldist' id='nav-logo' />
    //   </Navbar.Brand>
    //   <Navbar.Toggle aria-controls='basic-navbar-nav' />
    //   <Navbar.Collapse id='basic-navbar-nav'>
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
          {/* {props.currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.handleLogout}>
                      LogOut
                    </a>
                  </li>
                </div>
              ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <Link to={"/login"} className="nav-link">
                      Login
                    </Link>
                  </li>
                </div>
              )} */}
          {/* {props.currentUser ? (
          <Nav.Link className='ml-5' 
            onClick={() => handleLogout()}
            // onClick={() => props.logOut()}
          >
            Logout
          </Nav.Link>
          ) : (
          <Nav.Link className='ml-5' 
            href="/login"
          >
            Login
          </Nav.Link>
          )} */}
        </Nav>
    //   </Navbar.Collapse>
    // </Navbar>
  );
}

export default UniversalNav;
