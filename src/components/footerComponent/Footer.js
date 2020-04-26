import React, {Component} from 'react';
import logo from '../../img/logo_wht.svg';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Footer extends Component {

    render() {
        return (
            <footer className="w-full bg-black">
                <div className="container max-w-screen-md mx-auto py-8 text-sm font-medium text-white p-6 sm:py-6 lg:px-0">
                    <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                        <div className="flex content-center pb-4 sm:pb-0">
                            <img className="fill-current h-8 w-8 mr-2 transition-all duration-300 ease-in-out transform hover:scale-125" width="54" height="54" src={logo} />
                        </div>
                        <div className="flex content-center pb-4">
                            <div className="text-sm flex-grow antialiased">
                                <Link to="/" className="mt-4 sm:inline-block transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:text-indigo-500 mr-4">Home</Link>
                                <Link to="about" className="mt-4 sm:inline-block transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:text-indigo-500 mr-4">About</Link>
                                <Link to="#" className="mt-4 sm:inline-block transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:text-indigo-500 mr-4">Sitemap</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        );
    }
}

export default Footer;