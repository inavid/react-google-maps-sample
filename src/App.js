import React from 'react';
import './App.css';
import { Router } from './router';
import { withRouter } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Router />
    </div>
  );
}

export default withRouter(App);
