import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { configure } from 'mobx';
const FastClick =  require('fastclick');

import App from 'shared/App';
import * as store from './store';

import './index.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

configure({
  enforceActions: 'observed',
});


if ('addEventListener' in  document) {
  document.addEventListener('DOMContentLoaded', () => {
    FastClick.attach(document.body);
  }, false);
}

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

