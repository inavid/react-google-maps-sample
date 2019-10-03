import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Components
import MarkerWithLabel from './Component/mapWithMarker';
import MapWithADrawingManager from './Component/mapWithDrawing';
import MapWithCircle from './Component/mapWithCircle';
import MapWithRoutes from './Component/mapWithRoutes';
import { MapWithAnOverlayView } from './Component/mapWithOverlay';
import { PolygonMap } from './Component/polygon';
import { StyledMapWithAnInfoBox } from './Component/mapWithInfobox';
import { MapWithAKmlLayer } from './Component/mapWithLayer';
import { Home } from './Component/home';
import { NotFound } from './Component/notFound';

export const Router =  () => {
  const mapWithAnOverlayView = () => {
    return <MapWithAnOverlayView
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_BASE_URL_API}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
    />
  }

  const styledMapWithAnInfoBox = () => {
    return <StyledMapWithAnInfoBox
      googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_BASE_URL_API}&v=3.exp&libraries=geometry,drawing,places`}
      loadingElement={<div style={{ height: `100%` }} />}
      containerElement={<div style={{ height: `400px` }} />}
      mapElement={<div style={{ height: `100%` }} />}
      isOpen
    />
  }

  return(
    <main>
      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route exact path="/marker" component={MarkerWithLabel} /> 
        <Route exact path="/drawing" component={MapWithADrawingManager} />
        <Route exact path="/circle" component={MapWithCircle} />
        <Route exact path="/routes" component={MapWithRoutes} />
        <Route exact path="/overlay" component={mapWithAnOverlayView} />
        <Route exact path="/layer" component={MapWithAKmlLayer} />
        <Route exact path="/polygon" component={PolygonMap} />
        <Route exact path="/infobox" component={styledMapWithAnInfoBox} />
        <Route component={NotFound}/>
      </Switch>
    </main>
  )
}
 