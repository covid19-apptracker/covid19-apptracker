import React, { Component } from 'react';
import logo from './logo.svg';

class NavBar extends Component{
    state = { showing:true };

    render() {
        function toggle() {
            var x = document.getElementById("myLinks");
                if (x.style.display === "block") {
                    x.style.display = "none";
                } else {
                    x.style.display = "block";
                }
            }
        return (
        < nav className = "container max-w-screen-md mx-auto flex items-center justify-between flex-wrap bg-white p-6" >
            < div className = "flex items-center flex-shrink-0 text-black mr-6" >
                <img className="fill-current h-8 w-8 mr-2" width="54" height="54" src={logo} />
            </ div>
            <div className="block sm:hidden"> 
                <button onClick={toggle} id="my-nav-menu" className="flex items-center px-3 py-2 border rounded text-black border-black hover:bg-black hover:text-white hover:border-black">
                    <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            < div className = "w-full float-right sm:flex sm:items-center sm:w-auto hidden md:block">
                <div id="myLinks" className="text-sm lg:flex-grow antialiased">
                   <a href="#responsive-header" class="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-gray-500 mr-4">
                        About the Project
                    </a>
                </div>
            </div>
        </nav>
        );
    }
}

export default NavBar;
