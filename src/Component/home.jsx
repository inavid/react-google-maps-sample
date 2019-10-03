import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {

  return (
    <div className="container">
      <h1>React Sample Google Maps</h1>
      <p>
        Esta página funciona como index del pequeño proyecto muestra, en las siguientes url se podran observar componentes
        realizados con ayuda del paquete 
      </p>
      <p className="link-container">
        <a className="link" href="https://www.npmjs.com/package/react-google-maps">
          react-google-maps
        </a>
      </p>
      <div className="index-container">
        <p>
          Estos componentes exponen algunas de las funcionalidades que nos da el componente/paquete para trabajar con la API de google maps.
        </p>
        <p>
          A continuación un listado a forma de indice del proyecto y de los ejemplos disponibles dentro de el:
        </p>
        <div className="list-of-links">
          <Link to="/marker">Marker</Link>
          <Link to="/drawing">Drawer</Link>
          <Link to="/circle">Circle</Link>
          <Link to="/routes">Routes</Link>
          <Link to="/overlay">Overlay</Link>
          <Link to="/layer">Layer</Link>
          <Link to="/polygon">Polygon</Link>
          <Link to="/infobox">Info Box</Link>
        </div>
      </div>
    </div>
  )
  
}
