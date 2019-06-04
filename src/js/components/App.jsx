import React from 'react';
import HomePageContainer from './container/home_page/home_page_container';
import AddressPageContainer from './container/address_page/address_page_container';
import HashTxContainer from './container/hash/hash_tx_container';
import { Route, Switch } from 'react-router-dom';
// import './css/App.css';
// import logo from '../images/logo.svg';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/btc/address/:btcAddress" component={AddressPageContainer} />
        <Route exact path="/btc/tx/:hash" component={HashTxContainer} />
      </Switch>
    </div>
  );
}

export default App;
