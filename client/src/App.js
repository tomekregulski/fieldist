import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import UniversalNav from './components/UniversalNav';
import Schedule from './components/pages/events/Schedule';
import DataVisualization from './components/pages/data/DataVisualization';
import CreateUser from './components/pages/admin/CreateUser';
import LoginTest from './components/pages/other/LoginTest';
import CreateBrand from './components/pages/admin/CreateBrand';
import CreateRegion from './components/pages/admin/CreateRegion';
import CreateEvent from './components/pages/events/CreateDemo';
import CreateCampaign from './components/pages/events/CreateCampaign';
import PhotoGallery from './components/pages/data/PhotoGallery';
import NoMatch from './components/pages/other/NoMatch';
import RawData from './components/pages/data/RawData';
import './components/UniversalNav.css';
import './components/pages/other/login.css';
import NavShell from './components/NavShell';

// route for react-table test
import TableTest from './components/pages/TableTest';
import Userfront from "@userfront/react";

Userfront.init("demo1234");

function App() {
  return (
    <div>
      <Router>
        <div>
          {/* <UniversalNav /> */}
          <NavShell />
          <div className='container-fluid mt-5'>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/dashboard' component={Dashboard} />
              <Route exact path='/schedule' component={Schedule} />
              <Route exact path='/data-charts' component={DataVisualization} />
              <Route exact path='/new-user' component={CreateUser} />
              <Route exact path='/new-brand' component={CreateBrand} />
              <Route exact path='/new-event' component={CreateEvent} />
              <Route exact path='/new-campaign' component={CreateCampaign} />
              <Route exact path='/raw-data' component={RawData} />
              <Route exact path='/gallery' component={PhotoGallery} />
              <Route exact path='/login' component={LoginTest} />
              <Route exact path='/new-region' component={CreateRegion} />
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
