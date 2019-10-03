import React from 'react';
import Map from './map';
const { withProps } = require("recompose");
const { withScriptjs } = require("react-google-maps");
const { Circle } = require("react-google-maps");

const MapWithCircle = props => {
  const center = { lat: 4.6486259, lng: -74.2478964 };
  return (
    <Map
      center={center}
      zoom={2}
    >
      <Circle 
        onClick={(event) => {
          console.log("click");
        }}
        center={{ lat: 4.653588, lng: -74.247982 }}
        radius={767.7819845667905}
      />
    </Map>
  );
};

const mapWithProps = (props) => {
  return {
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />, 
  };
}

export default withProps(mapWithProps)(withScriptjs(MapWithCircle));
