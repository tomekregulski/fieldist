import UniversalNav from './components/UniversalNav/UniversalNav';
import {
  Brands,
  Regions,
  Users,
  DataVisualization,
  PhotoGallery,
  RawData,
  Schedule,
  Campaign,
  NoMatch,
  Login,
  Dashboard,
} from './components/pages';
import ProtectedRoute from './ProtectedRoute';

import './components/pages/data/gallery.css';
import './components/UniversalNav/UniversalNav.css';
import './components/pages/other/login.css';

import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/pages/data/data.css';

import AuthService from './services/auth.service';
class App extends Component {
  constructor(props) {
    super(props);

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
        showAdminNav: user.roles.includes('ROLE_ADMIN'),
        showRepNav: user.roles.includes('ROLE_REP'),
        showContactNav: user.roles.includes('ROLE_CONTACT'),
      });
    }
  }

  render() {
    return (
      <div className='container-fluid px-0'>
        <UniversalNav
          showRepNav={this.state.showRepNav}
          showAdminNav={this.state.showAdminNav}
          showContactNav={this.state.showContactNav}
          currentUser={this.state.currentUser}
        />
        <div>
          <Switch>
            <ProtectedRoute exact path={['/', '/home']} component={Dashboard} />
            <ProtectedRoute exact path='/schedule' component={Schedule} />
            <Route exact path='/login' component={Login} />
            <ProtectedRoute
              exact
              path='/data-charts'
              component={DataVisualization}
            />
            <ProtectedRoute exact path='/users' component={Users} />
            <ProtectedRoute exact path='/brands' component={Brands} />
            <ProtectedRoute exact path='/campaigns' component={Campaign} />
            <ProtectedRoute exact path='/raw-data' component={RawData} />
            <ProtectedRoute exact path='/gallery' component={PhotoGallery} />
            <ProtectedRoute exact path='/regions' component={Regions} />
            <ProtectedRoute path='*' component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
