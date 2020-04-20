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
                <PlayApp />
            </div>
        );
    }
}

export default HomePage;