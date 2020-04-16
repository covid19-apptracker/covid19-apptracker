import React from 'react';
import logo from './img/logo.svg';
import './App.css';
import NavBar from './NavBar.js';
import Footer from './Footer.js';
import PlayApp from './PlayApp';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </div>
      <div id="container" className="container w-full content-center items-center justify-center pt-8 pb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto">
        <div className="headers flex items-center mx-auto pb-6">
          <div className="sm:w-2/12 sm:-mr-6"></div>
          <div className="font-bold w-8/12 sm:w-6/12 min-w-xs">Application Name</div>
          <div className="font-bold installs hidden sm:flex sm:w-2/12 sm:-ml-6 sm:mr-3">Downloads</div>
          <div className="font-bold flex-auto w-4/12 sm:w-2/12">Date Uploaded</div>
        </div>
        <div className="PlayApp flex sm:items-center mx-auto pb-12">
          <div className="sm:w-2/12 sm:-mr-6 hidden sm:flex">
            <img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-blue-simple-square-background-illustration-png-image_3679324.jpg" width="60" height="60" className="rounded-lg shadow-lg"></img>
          </div>
          <div className="w-8/12 sm:w-6/12">
            <div className="title text-base font-medium text-gray-900">Coronavirus Test App Name</div>
            <div className="text-base font-medium text-gray-600">Fake App Developer</div>
          </div>
          <div className="installs hidden sm:flex sm:w-2/12 sm:-ml-6 sm:mr-3">
            <div className="text-base font-medium text-gray-900">2.5MM</div>
          </div>
          <div className="date w-4/12 sm:w-2/12">
            <div className="text-base font-medium text-gray-900">04-11-2020</div>
          </div>
        </div>
        <PlayApp />
        <PlayApp />
        <PlayApp />
        <PlayApp />
        <PlayApp />
        <PlayApp />
        <PlayApp />
        <PlayApp />
        <PlayApp />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
