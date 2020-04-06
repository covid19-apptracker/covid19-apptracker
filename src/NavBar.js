import React, { Component } from 'react';
import logo from './logo.svg';

class NavBar extends Component{
    render() {
        return (<nav className="container max-w-screen-md mx-auto flex items-center justify-between flex-wrap bg-white p-6">
            < div className = "flex items-center flex-shrink-0 text-black mr-6" >
                <img className="fill-current h-8 w-8 mr-2" width="54" height="54" src={logo} />
            </ div>
            <div class="block sm:hidden"> 
                <button id="my-nav-menu" class="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-black">
                    <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
                </button>
            </div>
            <div class="w-full float-right sm:flex sm:items-center sm:w-auto">
                <div class="text-sm lg:flex-grow antialiased">
                   <a href="#responsive-header" class="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-gray-500 mr-4">
                        About the Project
                    </a>
                </div>
            </div>
        </nav>);
    }
}

export default NavBar;

// function navBar() extends Component {
//     return (
//         <nav class="container max-w-screen-md mx-auto flex items-center justify-between flex-wrap bg-white p-6">
//             <div class="flex items-center flex-shrink-0 text-black mr-6">
//                 <img class="fill-current h-8 w-8 mr-2" width="54" height="54" src="public/img/C19_Project_Logo_blk.svg">
//             </div>
//             <div class="block sm:hidden"> 
//                 <button id="my-nav-menu" class="flex items-center px-3 py-2 border rounded text-black border-black hover:text-white hover:border-black">
//                     <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
//                 </button>
//             </div>
//             <div class="w-full float-right sm:flex sm:items-center sm:w-auto">
//                 <div class="text-sm lg:flex-grow antialiased">
//                     <a href="#responsive-header" class="block mt-4 sm:inline-block sm:mt-0 text-black hover:text-gray-500 mr-4">
//                         About the Project
//                     </a>
//                 </div>
//             </div>
//         </nav>
//     );
// }

