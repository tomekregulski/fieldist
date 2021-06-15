import './App.css';
// import LoginForm from './components/LoginForm';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Dashboard from './components/pages/Dashboard';
import UniversalNav from './components/UniversalNav';
import Schedule from './components/pages/events/Schedule';
import DataVisualization from './components/pages/data/DataVisualization';
import CreateRep from './components/pages/admin/CreateRep';
import CreateBrand from './components/pages/admin/CreateBrand';
import CreateEvent from './components/pages/events/CreateDemo';
import CreateCampaign from './components/pages/events/CreateCampaign';
import PhotoGallery from './components/pages/data/PhotoGallery';
import RawData from './components/pages/data/RawData';

function App() {
  return (
    <div className='container'>
      <Router>
        <div>
          <UniversalNav />
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/schedule" component={Schedule} />
          <Route exact path="/data-charts" component={DataVisualization} />
          <Route exact path="/new-rep" component={CreateRep} />
          <Route exact path="/new-brand" component={CreateBrand} />
          <Route exact path="/new-event" component={CreateEvent} />
          <Route exact path="/new-campaign" component={CreateCampaign} />
          <Route exact path="/raw-data" component={RawData} />
          <Route exact path="/gallery" component={PhotoGallery} />
        </div>
      </Router>
    </div>
  );
}

export default App;
