import React from "react";
import API from "../../utils/API";

class Admin extends React.Component {
    state = {
      error: "",
      regions: []
    };

  componentDidMount() {
    API.getRegions()
      // .then(res => console.log(res.data.results))
      .then(res => {
        console.log( res.data );
        this.setState({ regions: res.data });
      })
      .catch(err => console.log(err)); 
  }

render() {
  return (
      <div>
        <h1>Hello Admin</h1>
        <div>
            The following are the regions are currently active in the system:
            <ul>
                {this.state.regions.map( region => (
                <li key={region.id}>
                    {region.name}
                </li>
                ))}
            </ul>
        </div>
      </div>
    );
  }
}

export default Admin;