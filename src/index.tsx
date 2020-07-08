import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import { configure } from 'mobx';

// import Conuter from 'views/Counter'
import App from 'shared/App';
import * as store from './store';

import 'antd/dist/antd.css';
import './index.scss';

//
configure({
  enforceActions: 'observed',
});

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);

// 参考https://juejin.im/post/5bac8963e51d450e8f5fab16#heading-5，来配置的
