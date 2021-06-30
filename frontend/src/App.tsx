import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.scss';
import ROUTES from './constants/routes';
import logo from './images/logo.svg';
import ManageLocations from './pages/ManageLocations';

function App() {
  return (
    <div className="App">
      <header className="container d-flex py-3">
        <img src={logo} className="mx-auto ml-md-0" alt="logo" height={25} />
      </header>
      <main>
        <Router>
          <Route
            exact={true}
            path={ROUTES.MANAGE_DETAILS}
            component={ManageLocations} />
        </Router>
      </main>
    </div>
  );
}

export default App;
