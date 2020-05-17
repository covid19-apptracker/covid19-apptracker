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
                        Contact Us
                    </h1>
                    <div className="text-base pb-12">
                            <p>
                            We would love to hear from you! Please direct any press inquiries, corrections, or applications we may have missed to <a className="hover:underline hover:text-blue-400" to="/" style={{color: "#0066FF"}} href="mailto:info@covid19apptracker.org">info@covid19apptracker.org</a>. If you are submitting an application please include in your email the link to the Google Play Store so we may verify the application.
                            </p>
                    </div>
                    <hr className="border-black pb-12" width="32px"/> 
                    <h1 className="text-3xl pb-8">
                        Want to Collaborate?
                    </h1>
                    <div className="text-base">
                            <p className="pb-12">
                            Working together allows us to make bigger and better things! If you’re working on a project related to COVID-19 applications, we’d also love to hear from you! Please contact our team at <a className="hover:underline hover:text-blue-400" to="/" style={{color: "#0066FF"}} href="mailto:info@covid19apptracker.org">info@covid19apptracker.org</a> and include in the subject line “Collaboration Opportunity [ORG / AFFILIATION]”.
                            </p>
                    </div> 
                </div>
                {/* < Footer / > */}
            </div>
        );
    }
}

export default ContactPage;