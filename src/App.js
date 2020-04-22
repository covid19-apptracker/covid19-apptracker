import React from 'react';
import './App.css';

import ScrollToTop from './components/helperComponents/ScrollToTop';

import HomePage from './components/pages/HomePage.js';
import AboutPage from './components/pages/AboutPage.js';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <div>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/about" component={AboutPage} />
        </div>
      </div>
    </Router>
  );
}

export default App;
