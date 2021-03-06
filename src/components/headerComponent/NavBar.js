import React, { Component } from 'react';
import logo from '../../img/logo.svg';

import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class NavBar extends Component{
    state = {
        showing: "text-sm sm:flex-grow antialiased hidden sm:block" 
    };

    boxClick = (e) => {
        let stateUpdate = ((this.state.showing === "text-sm sm:flex-grow antialiased sm:block") ? "text-sm sm:flex-grow antialiased hidden sm:block" : "text-sm sm:flex-grow antialiased sm:block");
        this.setState({
            showing: stateUpdate
        })
        console.log('current state is: ' + this.state.showing);
        console.log('made it into boxClick, stateUpdate is now: ' + stateUpdate);
    }


    render() {

        return (
        <div className="top-0 sticky bg-white z-10 shadow-md">
            < nav className = "container max-w-screen-md mx-auto flex items-center justify-between flex-wrap bg-white p-6 sm:py-6 lg:px-0" >
                < div className = "flex items-center flex-shrink-0 text-black mr-6" >
                    <Link to ="/">
                        <img className="fill-current h-8 w-8 mr-2 transition-all duration-300 ease-in-out transform hover:scale-125" width="54" height="54" src={logo} alt="COVID-19 App Tracker Icon" />
                    </Link>
                </ div>
                <div className="block sm:hidden"> 
                    <button onClick={this.boxClick} id="my-nav-menu" className="flex items-center px-3 py-2 border rounded text-black border-black hover:bg-black hover:text-white hover:border-black">
                        <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                    </button>
                </div>
                < div className = "w-full float-right sm:flex sm:items-center sm:w-auto sm:block" >
                    <div id="myLinks" className={this.state.showing}> 
                        < NavLink exact to = "/about" activeStyle={{color: "#000000"}}
                        className = "block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-black mr-4 transition-all duration-300 ease-in-out transform font-medium active:text-indigo-500" >
                            About
                        </NavLink>
                        < NavLink exact to = "/team" activeStyle={{color: "#000000"}}
                        className = "block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-black mr-4 transition-all duration-300 ease-in-out transform font-medium active:text-indigo-500" >
                            Team
                        </NavLink>
                        <a href = "https://medium.com/@apptracker.cvd19" activeStyle={{color: "#000000"}}
                        className = "block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-black mr-4 transition-all duration-300 ease-in-out transform font-medium active:text-indigo-500" >
                            Blog
                        </a>
                        < NavLink exact to = "/contact" activeStyle={{color: "#000000"}}
                        className = "block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-black mr-4 transition-all duration-300 ease-in-out transform font-medium active:text-indigo-500" >
                            Contact
                        </NavLink>
                        <a href = "https://medium.com/@apptracker.cvd19" activeStyle={{color: "#000000"}}
                        className = "block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-black mr-4 transition-all duration-300 ease-in-out transform font-medium active:text-indigo-500" target="_blank" href="https://github.com/covid19-apptracker">
                            <FontAwesomeIcon icon={faGithub} size="lg" />
                        </a> 
                    </div>
                </div>
            </nav>
        </div>
        );
    }
}

export default NavBar;
