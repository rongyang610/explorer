import React from 'react';
import HomePageContainer from './container/home_page/home_page_container';
import { Route, Switch } from 'react-router-dom';
// import './css/App.css';
// import logo from '../images/logo.svg';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path= "/" component={HomePageContainer} />
        {/* <Route exact path= "/BTC/:btcAddress" component = {} /> */}
      </Switch>
    </div>
  );
}

export default App;
