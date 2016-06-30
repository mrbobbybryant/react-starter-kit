import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../shared/Counter';

ReactDOM.render(
  React.createElement(Counter),
  document.getElementById('mount')
);

if (module.hot) {
  module.hot.accept();
}
