import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

const containerStyle = {
  // position: 'relative',
  width: '50%',
  height: '100%',
};

export class GoogleMap extends Component {
  render() {
    return (
      <div>
        <Map
          containerStyle={containerStyle}
          google={this.props.google}
          zoom={14}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng,
          }}
        >
          <Marker onClick={this.onMarkerClick} name={'Current location'} />

          <InfoWindow onClose={this.onInfoWindowClose}>
            {/* <div>
              <h1>{this.state.selectedPlace.name}</h1>
            </div> */}
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDlXBmR1YPuedZSvjL1Jxbk6OuSmuILHsE',
})(GoogleMap);
