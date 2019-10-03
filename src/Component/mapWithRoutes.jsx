import React from 'react';
import  { withProps } from 'recompose';
import { withScriptjs, DirectionsRenderer } from 'react-google-maps';
import Map from './map';

class MapWithRoutes extends React.Component {
  state = {
    directions: {},
    markers: false  
  }
  directionsService = new window.google.maps.DirectionsService();

  componentDidMount() { 
    this.directionsService.route({
      origin: new window.google.maps.LatLng(41.8507300, -87.6512600),
      destination: new window.google.maps.LatLng(41.8525800, -87.6514100),
      waypoints: [{location: 'Los Angeles', stopover: true}],
      travelMode: window.google.maps.TravelMode.DRIVING,
    }, (result, status) => {
      if (status === window.google.maps.DirectionsStatus.OK) {
        this.setState({
          directions: {...result},
          markers: true
        })
      } else {
        console.error(`error fetching directions ${result}`);
      }
    });
  }

  render() {
    return (
      <Map >
        {
          this.state.directions && <DirectionsRenderer directions={this.state.directions} suppressMarkers={this.state.markers}/>
        }
      </Map>
    )
  }
}

const mapWithProps = (props) => {
  return {
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />, 
  };
}

export default withProps(mapWithProps)(withScriptjs(MapWithRoutes))