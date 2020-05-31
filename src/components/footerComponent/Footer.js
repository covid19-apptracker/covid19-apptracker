import React, {Component} from 'react';
import logo from '../../img/logo_wht.svg';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <footer className="w-full bg-black bottom-0"> 
                <div className="container max-w-screen-md mx-auto py-8 text-sm font-medium text-white p-6 sm:py-6 lg:px-0">
                    <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                        <div className="flex content-center pb-4 sm:pb-0">
                        <Link to="/"><img className="fill-current h-8 w-8 mr-2 transition-all duration-300 ease-in-out transform hover:scale-125" width="54" height="54" src={logo} />
                        </Link>
                        </div>
                        <div className="flex content-center pb-4">
                            <div className="text-sm flex-grow antialiased">
                                <Link to="/about" className="dark-bg-link-hover mt-4 sm:inline-block transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:text-indigo-500 mr-4">About</Link>
                                <Link to="/team" className="dark-bg-link-hover mt-4 sm:inline-block transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:text-indigo-500 mr-4">Team</Link>
                                <Link to="/contact" className="dark-bg-link-hover mt-4 sm:inline-block transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:text-indigo-500 mr-4">Contact</Link>
                                <Link to="/privacy-policy" className="dark-bg-link-hover mt-4 sm:inline-block transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:text-indigo-500">Privacy Policy</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;
