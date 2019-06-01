import React from 'react';
import ReactDOM from 'react-dom';
import Root from './js/components/root';
import configureStore from './js/store/store';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});