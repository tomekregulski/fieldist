import React, { Component } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';

const containerStyle = {
  position: 'relative',
  width: '100%',
  height: '10rem',
};

const mapStyles = {
  width: '100%',
  height: '100%',
};

export class GoogleMap extends Component {
  render() {
    // console.log(
    //   'lat:',
    //   this.props.venue.geometry.lat,
    //   'lng:',
    //   this.props.venue.geometry.lng
    // );
    // console.log('lat:', this.props.lat, 'lng:', this.props.lng);
    return (
      <div>
        <Map
          containerStyle={containerStyle}
          style={mapStyles}
          onReady={this.props.hello}
          google={this.props.google}
          zoom={9}
          initialCenter={{
            lat: this.props.lat,
            lng: this.props.lng,
          }}
        >
          <Marker
            name={'Current location'}
            position={{ lat: this.props.lat, lng: this.props.lng }}
          />
          <Marker
            name={this.props.venue.name}
            title={this.props.venue.name}
            position={{
              lat: this.props.venue.geometry.lat,
              lng: this.props.venue.geometry.lng,
            }}
          />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyDlXBmR1YPuedZSvjL1Jxbk6OuSmuILHsE',
})(GoogleMap);
