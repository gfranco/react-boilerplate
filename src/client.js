require("react-hot-loader/patch");

import React from 'react';
import ReactDOM from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import App from './app';

const render = (Component) => {
  ReactDOM.render(
    <AppContainer>
      <Component/>
    </AppContainer>,
    document.querySelector('.app')
  );
};

render(App);

module.hot && module.hot.accept('./app', () => {
  console.log('Bang');
  render(require('./app'));
});
