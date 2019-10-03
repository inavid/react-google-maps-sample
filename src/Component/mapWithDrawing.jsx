import React from 'react';
import Map from './map';
const { withProps } = require("recompose");
const { DrawingManager } = require("react-google-maps/lib/components/drawing/DrawingManager");
const { withScriptjs } = require("react-google-maps");

const onOverlayComplete = (parameter) => {
  const { type, overlay } = parameter;

  if(type !== "circle" && type !== "rectangle") {
    for (var i = 0; i < overlay.getPath().getLength(); i++) {
      console.log(overlay.getPath().getAt(i).toUrlValue(6));
    }
  } 
  
  if(type === "circle") {
    console.log("Circulo");
    console.log(overlay.getCenter().toUrlValue());
    console.log(overlay.getRadius());
  } else {
    console.log(overlay)
  }
}

const MapWithADrawingManager = props => {
  const center = { lat: 4.6486259, lng: -74.2478964 };
  return ( 
    <Map
      center={center}
      zoom={15}
    >
      <DrawingManager
        defaultDrawingMode={window.google.maps.drawing.OverlayType.CIRCLE}
        defaultOptions={{
          drawingControl: true,
          drawingControlOptions: {
            position: window.google.maps.ControlPosition.TOP_CENTER,
            drawingModes: [
              window.google.maps.drawing.OverlayType.CIRCLE,
              window.google.maps.drawing.OverlayType.POLYGON,
              window.google.maps.drawing.OverlayType.POLYLINE,
              window.google.maps.drawing.OverlayType.RECTANGLE,
            ],
          },
          circleOptions: {
            fillColor: `#ffff00`,
            fillOpacity: 1,
            strokeWeight: 5,
            clickable: false,
            editable: true,
            zIndex: 1,
          },
        }}
        onOverlayComplete={onOverlayComplete}
      />
    </Map>
  )
}

const mapWithProps = () => {
  return {
    googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_KEY}&v=3.exp&libraries=geometry,drawing,places`,
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />, 
  }
}

export default withProps(mapWithProps)(withScriptjs(MapWithADrawingManager));