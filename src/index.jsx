import React from 'react';
import ReactDOM from 'react-dom';
import Root from './js/components/root';
import configureStore from './js/store/store';
import { getBTCAddressInfo } from './js/actions/btc_actions';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();

  //Testing
  window.store = store;
  window.getBTCAddressInfo = getBTCAddressInfo;

  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});