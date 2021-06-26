import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
// import UniversalNav from './components/UniversalNav';
import Schedule from './components/pages/events/Schedule';
import DataVisualization from './components/pages/data/DataVisualization';
import CreateUser from './components/pages/admin/CreateUser';
// import LoginForm from './components/pages/other/Login';
import CreateBrand from './components/pages/admin/CreateBrand';
import CreateRegion from './components/pages/admin/CreateRegion';
import CreateEvent from './components/pages/events/CreateDemo';
import CreateCampaign from './components/pages/events/CreateCampaign';
import PhotoGallery from './components/pages/data/PhotoGallery';
import NoMatch from './components/pages/other/NoMatch';
import RawData from './components/pages/data/RawData';
import ApiTest from './components/ApiTest';
// import { useAuth0 } from "@auth0/auth0-react";
import './components/UniversalNav.css';
import './components/pages/other/login.css';
// import Loading from "./components";
import NavShell from "./components/NavShell"
// route for react-table test
import TableTest from './components/pages/TableTest';
import ProtectedRoute from "./auth/protected-route";
import UniversalNav from './components/UniversalNav';

function App() {

  // const { isLoading } = useAuth0();

  // if (isLoading) {
  //   return <Loading />;
  // }

  return (
    <div>
      <Router>
        <div>
          <NavShell />
          {/* <UniversalNav /> */}
          <div className='container-fluid mt-5'>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <ProtectedRoute exact path='/schedule' component={Schedule} />
              <ProtectedRoute exact path='/data-charts' component={DataVisualization} />
              <ProtectedRoute exact path='/new-user' component={CreateUser} />
              {/* <ProtectedRoute exact path='/new-brand' component={CreateBrand} /> */}
              <ProtectedRoute exact path='/new-brand' component={ApiTest} />
              <ProtectedRoute exact path='/new-event' component={CreateEvent} />
              <ProtectedRoute exact path='/new-campaign' component={CreateCampaign} />
              <Route exact path='/raw-data' component={RawData} />
              <Route exact path='/gallery' component={PhotoGallery} />
              {/* <Route exact path='/login' component={LoginForm} /> */}
              <ProtectedRoute exact path='/new-region' component={CreateRegion} />
              <Route exact path='/table' component={TableTest} />
              <Route path='*' component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;