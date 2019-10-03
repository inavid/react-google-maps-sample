import React from 'react';

const { withProps } = require("recompose");
const {
  withScriptjs,
  withGoogleMap,
  GoogleMap
} = require("react-google-maps");

const Map = props => {
  return (
    <GoogleMap
      defaultZoom={props.zoom}
      defaultCenter={props.center}
    >
      {props.children}
    </GoogleMap>
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

export default withProps(mapWithProps)(withScriptjs(withGoogleMap(Map)))
