import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'font-awesome/css/font-awesome.min.css';
import { MatomoProvider, createInstance } from '@datapunt/matomo-tracker-react'

const instance = createInstance({
    urlBase: 'https://covid19apptracker.org',
    siteId: 1,
    trackerUrl: 'https://analytics.covid19apptracker.org/matomo.php',
    srcUrl: 'https://analytics.covid19apptracker.org/matomo.js'
})

ReactDOM.render(
  <React.StrictMode>
      <MatomoProvider value={instance}>
        <App />
      </MatomoProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
