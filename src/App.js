import React from 'react';
import './App.css';
import NavBar from './components/headerComponent/NavBar.js';
import Footer from './components/footerComponent/Footer.js';
import HomePage from './components/pages/HomePage.js';
import AboutPage from './components/pages/AboutPage.js';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <HomePage />
      
      <Footer />
    </div>
  );
}

export default App;
