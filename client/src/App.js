// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Dashboard from './components/pages/Dashboard';
// import UniversalNav from './components/UniversalNav';
import Schedule from './components/pages/events/Schedule';
// import DataVisualization from './components/pages/data/DataVisualization';
// import CreateUser from './components/pages/admin/CreateUser';
// // import LoginForm from './components/pages/other/Login';
// import LoginTwo from './components/login/login.component';
// import CreateBrand from './components/pages/admin/CreateBrand';
// import CreateRegion from './components/pages/admin/CreateRegion';
// import CreateEvent from './components/pages/events/CreateDemo';
// import CreateCampaign from './components/pages/events/CreateCampaign';
// import PhotoGallery from './components/pages/data/PhotoGallery';
// import NoMatch from './components/pages/other/NoMatch';
// import RawData from './components/pages/data/RawData';
// import './components/UniversalNav.css';
// import './components/pages/other/login.css';

// function App() {
//   return (
//     <div>
//       <Router>
//         <div>
//           <UniversalNav />
//           <div className='container-fluid mt-5'>
//             <Switch>
//               <Route exact path='/' component={Dashboard} />
//               <Route exact path='/schedule' component={Schedule} />
//               <Route exact path='/data-charts' component={DataVisualization} />
//               <Route exact path='/new-user' component={CreateUser} />
//               <Route exact path='/new-brand' component={CreateBrand} />
//               <Route exact path='/new-event' component={CreateEvent} />
//               <Route exact path='/new-campaign' component={CreateCampaign} />
//               <Route exact path='/raw-data' component={RawData} />
//               <Route exact path='/gallery' component={PhotoGallery} />
//               <Route exact path='/login' component={LoginTwo} />
//               <Route exact path='/new-region' component={CreateRegion} />
//               <Route path='*' component={NoMatch} />
//             </Switch>
//           </div>
//         </div>
//       </Router>
//     </div>
//   );
// }

// export default App;

import React, { Component } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import AuthService from "./services/auth.service";

import Login from "./login/login.component";
import Register from "./login/register.component";
import Home from "./login/home.component";
import Profile from "./login/profile.component";
import BoardUser from "./login/board-user.component";
import BoardModerator from "./login/board-moderator";
import BoardAdmin from "./login/board-admin";

class App extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showAdminBoard: false,
      showRepBoard: false,
      currentUser: undefined,
    };
  }

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        showRepBoard: user.roles.includes("ROLE_REP"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showAdminBoard, showRepBoard } = this.state;

    return (
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            bezKoder
          </Link>
          <div className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to={"/schedule"} className="nav-link">
                Events
              </Link>
            </li>
            {showRepBoard && (
            <li className="nav-item">
              <Link to={"/raw-data"} className="nav-link">
                Data
              </Link>
            </li>
            )}

            {showRepBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Rep Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/profile"} className="nav-link">
                  {currentUser.username}
                </Link>
              </li>
              <li className="nav-item">
                <a href="/login" className="nav-link" onClick={this.logOut}>
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

              <li className="nav-item">
                <Link to={"/register"} className="nav-link">
                  Sign Up
                </Link>
              </li>
            </div>
          )}
        </nav>

        <div className="container mt-3">
          <Switch>
            <Route exact path={["/", "/home"]} component={Home} />
            <Route exact path='/schedule' component={Schedule} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/profile" component={Profile} />
            <Route path="/user" component={BoardUser} />
            <Route path="/mod" component={BoardModerator} />
            <Route path="/admin" component={BoardAdmin} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;