import React from 'react';
import { 
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Polygon,
  Marker
} from "react-google-maps";

const { compose, withProps } = require("recompose");

const coords = [
  {lat: 25.774, lng: -80.190},
  {lat: 18.466, lng: -66.118},
  {lat: 32.321, lng: -64.757},
  {lat: 25.774, lng: -80.190}
];

export const PolygonMap = compose(
  withProps({
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement : <div style={{height: window.innerHeight - 80}}/>,
    containerElement : <div style={{height: window.innerHeight - 80, width: window.innerWidth}}/>,
    mapElement : <div style={{height: window.innerHeight - 80}}/>
  }),
  withScriptjs,
  withGoogleMap)((props) =>
  <GoogleMap
    defaultZoom={5}
    defaultCenter={{lat: 25.0014163, lng: -72.1208432}}
  >
    {props.isMarkerShown && <Marker position={{lat: 25.0014163, lng: -72.1208432}}/>}
    <Polygon
      path={coords}
      key={1}
      options={{
        fillColor: "#000",
        fillOpacity: 0.4,
        strokeColor: "#000",
        strokeOpacity: 1,
        strokeWeight: 1
      }}
      onClick={() => {
        console.log("ahmet")
      }}
    />
  </GoogleMap>
);