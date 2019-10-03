import React from 'react';
import Map from './map';
const { withProps } = require("recompose");
const { withScriptjs } = require("react-google-maps");
const { MarkerWithLabel } = require("react-google-maps/lib/components/addons/MarkerWithLabel");

const MapWithAMarkerWithLabel = (props) => {
  const center = { lat: 4.6486259, lng: -74.2478964 };
  return (
    <Map
      center={center}
      zoom={11}
    >
      <MarkerWithLabel
        position={center}
        labelAnchor={new window.google.maps.Point(70, 0)}
        labelStyle={{backgroundColor: "black", color: "white", fontSize: "24px", padding: "10px"}}
      >
        <div>Here we go!</div>
      </MarkerWithLabel>
    </Map>
  )
}

const mapWithProps = (props) => {
  return {
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />, 
  };
}

export default withProps(mapWithProps)(withScriptjs(MapWithAMarkerWithLabel));
