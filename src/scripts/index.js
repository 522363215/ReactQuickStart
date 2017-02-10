import {
  AppContainer
} from 'react-hot-loader';
import 'babel-polyfill';
import React, {
  Component
} from 'react';
import {
  render
} from 'react-dom';
import {
  Provider
} from 'react-redux';
import store from './store/store';
import {
  dosomething
} from './actions/todo';
import App from './components/app';
import {
  fetchApi
} from './util/util';
import '../styles/normalize.css';

render(<AppContainer>
        <Provider store={store}>
          <App/>
        </Provider>
        </AppContainer>, document.getElementById('root'));

if (module.hot) {
  module.hot.accept('./components/app', () => {
    const NextApp = require('./components/app').default;
    render(
      <AppContainer>
            <Provider store={store}><NextApp /></Provider>
             </AppContainer>,
      document.getElementById('root')
    );
  });
}
store.dispatch(dosomething());
store.dispatch(fetchApi('http://localhost:8080/api/do', {
  method: 'get'
}, dosomething));