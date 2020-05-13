import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import PlayApp from '../PlayApp.js';
import NavBar from "../../components/headerComponent/NavBar.js";
import Footer from "../../components/footerComponent/Footer.js";
import PlayAppGenerator from '../../components/helperComponents/PlayAppGenerator';

class HomePage extends Component {
    render() {
        return (
          <div>
            <NavBar />
            <div className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <br></br>
              <p>Map will go here!</p>
            </div>
            <div
              id="container"
              className="container w-full content-center items-center justify-center pt-16 pb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto"
            >
              <div className="headers flex items-center mx-auto pb-6">
                <div className="sm:w-2/12 sm:-mr-6"></div>
                <div className="font-bold w-8/12 sm:w-6/12 min-w-xs mr-3">
                  Application Name
                </div>
                <div className="font-bold installs hidden sm:flex sm:w-2/12">
                  Downloads
                </div>
                <div className="font-bold flex-auto w-4/12 sm:w-2/12 float-right text-left">
                  Date Updated
                </div>
              </div>
              <PlayAppGenerator/>
              {/* <PlayApp />
              <PlayApp />
              <PlayApp />
              <PlayApp />
              <PlayApp />
              <PlayApp />
              <PlayApp /> */}
            </div>
            <Footer />
          </div>
        );
    }
}

export default HomePage;