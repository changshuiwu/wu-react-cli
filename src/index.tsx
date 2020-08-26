import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { configure } from 'mobx';

import App from 'shared/App';
import * as store from './store';

import 'antd/dist/antd.css';
import './index.scss';

configure({
  enforceActions: 'observed',
});

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

