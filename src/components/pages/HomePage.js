import React, { Component } from 'react';
import logo from '../../img/logo.svg';
import PlayApp from '../PlayApp.js';

class HomePage extends Component {
    render() {
        return (
            <div>
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
                    <PlayApp />
                </div>
            </div>
        );
    }
}

export default HomePage;