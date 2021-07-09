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

import './components/UniversalNav/UniversalNav.css';
import './components/pages/other/login.css';

import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import AuthService from './services/auth.service';
import SinglePhoto from './components/Forms/Inputs/SinglePhoto';
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
            <Route
              exact
              path={['/', '/home']}
              component={Dashboard}
              currentUser={this.state.currentUser}
            />
            <Route exact path='/schedule' component={Schedule} />
            <Route exact path='/login' component={Login} />
            <Route exact path='/data-charts' component={DataVisualization} />
            <Route exact path='/users' component={Users} />
            <Route exact path='/brands' component={Brands} />
            <Route exact path='/campaigns' component={Campaign} />
            <Route exact path='/raw-data' component={RawData} />
            <Route exact path='/gallery' component={PhotoGallery} />
            <Route exact path='/regions' component={SinglePhoto} />
            <Route path='*' component={NoMatch} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
