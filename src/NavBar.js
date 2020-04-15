import React, { Component } from 'react';
import logo from './img/logo.svg';

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
        function toggle() {
                if (this.state.showing === "sm:block") {
                    this.state.showing = "sm:none";
                } else {
                    this.state.showing = "sm:block";
                }
            }



        return (
        < nav className = "container max-w-screen-md mx-auto flex items-center justify-between flex-wrap bg-white p-6" >
            < div className = "flex items-center flex-shrink-0 text-black mr-6" >
                <img className="fill-current h-8 w-8 mr-2 transition-all duration-300 ease-in-out transform hover:scale-125" width="54" height="54" src={logo} />
            </ div>
            <div className="block sm:hidden"> 
                <button onClick={this.boxClick} id="my-nav-menu" className="flex items-center px-3 py-2 border rounded text-black border-black hover:bg-black hover:text-white hover:border-black">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            < div className = "w-full float-right sm:flex sm:items-center sm:w-auto sm:block" >
                <div id="myLinks" className={this.state.showing}>
                   < a href = "#responsive-header"
                   class = "block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-black mr-4 transition-all duration-300 ease-in-out transform hover:-translate-y-1 font-medium" >
                        Home
                    </a>
                    < a className = "block mt-4 sm:inline-block sm:mt-0 text-gray-600 hover:text-black transition-all duration-300 ease-in-out transform font-medium" >
                        About
                    </a>
                </div>
            </div>
        </nav>
        );
    }
}

export default NavBar;
