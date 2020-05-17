import React, { Component } from 'react'; 
import NavBar from '../../components/headerComponent/NavBar.js';
import Footer from '../../components/footerComponent/Footer.js';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class ContactPage extends Component {
    render() {
        return (
            <div>
                {/* < NavBar / > */}
                <div id="container" className="container w-full content-center items-center justify-center pt-8 pb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto">
                    <div className="text-sm font-medium pb-4">
                        <Link className="hover:underline hover:text-blue-400" to="/" style={{color: "#0066FF"}}>Home</Link>{' '} / <span>Contact Us</span>
                    </div>
                    <h1 className="text-3xl pb-8">
                        Get A Hold Of Us
                    </h1>
                    <div className="text-base">
                            <p className="pb-12">
                            For any additional information on the data sets, how we are scraping data, or if you'd like to chat, please visit our <a className="hover:underline hover:text-blue-400" to="/" style={{color: "#0066FF"}} href="https://github.com/family-hackathon/covid19-apptracker" target="_blank">GitHub repository</a> or drop us a line at <a className="hover:underline hover:text-blue-400" to="/" style={{color: "#0066FF"}} href="mailto:info@covid19apptracker.org">info@covid19apptracker.org</a>.
                            </p>
                    </div>
                    <hr className="border-black pb-12" width="32px"/> 
                </div>
                {/* < Footer / > */}
            </div>
        );
    }
}

export default ContactPage;