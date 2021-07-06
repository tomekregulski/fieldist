// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import UniversalNav from './components/UniversalNav';
import Schedule from './components/pages/events/Schedule';
import DataVisualization from './components/pages/data/DataVisualization';
import CreateUser from './components/pages/admin/CreateUser';
import CreateBrand from './components/pages/admin/CreateBrand';
import CreateRegion from './components/pages/admin/CreateRegion';
import CreateEvent from './components/pages/events/CreateDemo';
import CreateCampaign from './components/pages/events/CreateCampaign';
import PhotoGallery from './components/pages/data/PhotoGallery';
import NoMatch from './components/pages/other/NoMatch';
import RawData from './components/pages/data/RawData';
import './components/UniversalNav.css';
import './components/pages/other/login.css';

import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./components/pages/other/LoginNew";
import Register from "./login/register.component";
import Home from "./login/home.component";
import Profile from "./login/profile.component";
import BoardUser from "./login/board-user.component";
import BoardModerator from "./login/board-moderator";
import BoardAdmin from "./login/board-admin";

import './components/UniversalNav.css';
// import './components/pages/other/login.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminNav: false,
      showRepNav: false,
      showContactNav: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminNav: user.roles.includes("ROLE_ADMIN"),
        showRepNav: user.roles.includes("ROLE_REP"),
        showContactNav: user.roles.includes("ROLE_CONTACT"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const currentUser = this.state;

    return (
      <div>
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand href='/'>
            <img src='fieldist_logo.png' alt='Fieldist' id='nav-logo' />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <UniversalNav 
                showRepNav={this.state.showRepNav}
                showAdminNav={this.state.showAdminNav}
                showContactNav={this.state.showContactNav}
                // logOut={this.logOut()}
                currentUser={this.currentUser}
              />
              {currentUser ? (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a href="/login" className="nav-link" onClick={this.logOut}>
                      Log Out
                    </a>
                  </li>
                </div>
              ) : (
                <div className="navbar-nav ml-auto">
                  <li className="nav-item" />
                </div>
              )}
            </Navbar.Collapse>
          </Navbar>
        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Dashboard} />
            <Route exact path='/schedule' component={Schedule} />
            <Route exact path="/login" component={Login} />
            <Route exact path='/data-charts' component={DataVisualization} />
            <Route exact path='/new-user' component={CreateUser} />
            <Route exact path='/new-brand' component={CreateBrand} />
            <Route exact path='/new-event' component={CreateEvent} />
            <Route exact path='/new-campaign' component={CreateCampaign} />
            <Route exact path='/raw-data' component={RawData} />
            <Route exact path='/gallery' component={PhotoGallery} />
            <Route exact path='/new-region' component={CreateRegion} />
            <Route path='*' component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;