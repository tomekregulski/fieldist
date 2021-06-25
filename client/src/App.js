import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './components/pages/Dashboard';
import UniversalNav from './components/UniversalNav';
import Schedule from './components/pages/events/Schedule';
import DataVisualization from './components/pages/data/DataVisualization';
import CreateUser from './components/pages/admin/CreateUser';
import LoginForm from './components/pages/other/Login';
import CreateBrand from './components/pages/admin/CreateBrand';
import CreateRegion from './components/pages/admin/CreateRegion';
import CreateEvent from './components/pages/events/CreateDemo';
import CreateCampaign from './components/pages/events/CreateCampaign';
import PhotoGallery from './components/pages/data/PhotoGallery';
import NoMatch from './components/pages/other/NoMatch';
import RawData from './components/pages/data/RawData';
import './components/UniversalNav.css';
import './components/pages/other/login.css';

function App() {
  return (
    <div>
      <Router>
        <div>
          <UniversalNav />
          <div className='container-fluid mt-5'>
            <Switch>
              <Route exact path='/' component={Dashboard} />
              <Route exact path='/schedule' component={Schedule} />
              <Route exact path='/data-charts' component={DataVisualization} />
              <Route exact path='/new-user' component={CreateUser} />
              <Route exact path='/new-brand' component={CreateBrand} />
              <Route exact path='/new-event' component={CreateEvent} />
              <Route exact path='/new-campaign' component={CreateCampaign} />
              <Route exact path='/raw-data' component={RawData} />
              <Route exact path='/gallery' component={PhotoGallery} />
              <Route exact path='/login' component={LoginForm} />
              <Route exact path='/new-region' component={CreateRegion} />
              <Route path='*' component={NoMatch} />
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
