import React from 'react';
import HomePage from './presentational/home_page/home_page';
import { Route, Switch } from 'react-router-dom';
// import './css/App.css';
// import logo from '../images/logo.svg';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path= "/" component={HomePage} />
        {/* <Route exact path= "/BTC/:btcAddress" component = {} /> */}
      </Switch>
    </div>
  );
}

export default App;
