import React, {Component} from 'react';
import logo from './img/logo_wht.svg';

class Footer extends Component {

    render() {
        return (
            <div className="w-full py-8 bg-black">">
                <footer className="container max-w-screen-md mx-auto py-8 text-sm text-white">
                    <div className="flex flex-col items-center justify-center lg:flex-row lg:justify-between">
                        <div className="flex content-center pb-4">
                            <img className="fill-current h-8 w-8 mr-2 transition-all duration-300 ease-in-out transform hover:scale-125" width="54" height="54" src={logo} />
                        </div>
                        <div className="flex content-center pb-4">
                            <div className="text-sm flex-grow antialiased">
                                <a href="#" className="mt-4 sm:inline-block transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:text-indigo-500 mr-4">Home</a>
                                <a href="#" className="mt-4 sm:inline-block transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:text-indigo-500 mr-4">About</a>
                                <a href="#" className="mt-4 sm:inline-block transition-all duration-200 ease-in-out transform hover:-translate-y-1 hover:text-indigo-500 mr-4">Sitemap</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        );
    }
}

export default Footer;