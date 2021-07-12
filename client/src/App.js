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

import './components/UniversalNav/UniversalNav.css';
import './components/pages/other/login.css';

import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

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
      <div>
        <UniversalNav
          showRepNav={this.state.showRepNav}
          showAdminNav={this.state.showAdminNav}
          showContactNav={this.state.showContactNav}
          currentUser={this.state.currentUser}
        />
        <div className='container mt-3'>
          <Switch>
            {/* <ProtectedRoute
              exact
              path={['/', '/home']}
              component={Dashboard}
              currentUser={this.state.currentUser}
            >
              <Dashboard />
            </ProtectedRoute> */}
            {/* <ProtectedRoute path="/dashboard">
              <Dashboard />
            </ProtectedRoute>
            <Route exact path="/">
              <Redirect exact from="/" to="dashboard" />
            </Route> */}
            <Route exact path={['/', '/home']} component={Dashboard} />
            <Route exact path='/schedule' component={Schedule} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/data-charts' component={DataVisualization} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/brands' component={Brands} />
            <Route exact path='/campaigns' component={Campaign} />
            <Route exact path='/raw-data' component={RawData} />
            <Route exact path='/gallery' component={PhotoGallery} />
            <Route exact path='/regions' component={Regions} />
            <Route path='*' component={NoMatch} />
            {/* <ProtectedRoute exact path="/" render={() => <Dashboard exact path="/" />} />
            <ProtectedRoute exact path="/schedule" render={() => <Schedule exact path='/schedule' />} />
            <Route exact path='/login' component={Login} />
            <ProtectedRoute exact path="/data-charts" render={() => <DataVisualization exact path='/data-charts' />} />
            <ProtectedRoute exact path="/schedule" render={() => <Schedule exact path='/schedule' />} />
            <ProtectedRoute exact path="/users" render={() => <Users exact path='/users' />} />
            <ProtectedRoute exact path="/brands" render={() => <Brands exact path='/brands' />} />
            <ProtectedRoute exact path="/campaigns" render={() => <Campaign exact path='/campaigns' />} />
            <ProtectedRoute exact path="/raw-data" render={() => <RawData exact path='/raw-data' />} />
            <ProtectedRoute exact path="/gallery" render={() => <PhotoGallery exact path='/gallery' />} />
            <ProtectedRoute exact path="/regions" render={() => <Regions exact path='/regions' />} />
            <ProtectedRoute exact path="/*" render={() => <NoMatch exact path='/*' />} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
