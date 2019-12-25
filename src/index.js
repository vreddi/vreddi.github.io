import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';

import { IntlProvider } from 'react-intl';

import * as serviceWorker from './serviceWorker';

import './index.css';

// Set your locale
const locale = 'en-US';

const resources = require(`./assets/locales/${locale}.json`)

console.log("Locale resources", resources);

ReactDOM.render(
  <IntlProvider locale={locale || 'en-US'} messages={resources} >
    <App />
  </IntlProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
