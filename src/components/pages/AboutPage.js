import React, { Component } from 'react';  

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Matomo from "../analytics/Matomo";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faGoogleDrive } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class AboutPage extends Component {
    render() {
        return (
            <div>
                <Matomo title={'About'} customUrl={'/' + window.location.hash.substr(1)} />
                <div id="container" className="container w-full content-center items-center justify-center pt-8 pb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto">
                    <div className="text-sm font-medium pb-4">
                        <Link className="hover:underline hover:text-blue-400" to="/" style={{color: "#0066FF"}}>Home</Link>{' '} / <span>About the Project</span>
                    </div>
                    <h1 className="text-3xl pb-8">
                        About the Project
                    </h1>
                    <div className="text-base pb-12">
                            <p className="pb-4">
                                Privacy concerns have emerged with a large number of COVID-19 applications being published and promoted around the globe. From symptom tracking to contact tracing, the <strong>COVID-19 App Tracker Project</strong> aims to identify and track applications published on the Google Play Store.
                            </p>
                            <p className="pb-4">
                                At this time, the <strong>COVID-19 App Tracker Project</strong> only looks for applications on the Google Play Store that fall within at least one of the following categories:
                            </p>
                            <div>
                                <ul className="list-disc pl-4 pb-4">
                                    <li>Contact Tracing</li>
                                    <li>Symptom Tracking</li>
                                    <li>COVID-19 Information</li>
                                </ul> 
                            </div>
                            <p className="pb-10">
                                This project is currently a proof of concept and because of that we’ve made it open source so we encourage feedback! If you see apps missing or corrections that should be made, please contact us at <a className="hover:underline hover:text-blue-400" to="/" style={{color: "#0066FF"}} href="mailto:info@covid19apptracker.org">info@covid19apptracker.org</a>. We hope this encourages greater transparency and leads to further privacy research around the globe.
                            </p>
                            <div className="text-base pb-6">
                                <p className="pb-2">
                                    Download the data we've collected from our public Google Sheets document.
                                </p>
                                <a href="https://docs.google.com/spreadsheets/d/1gutqRjHrwRmQCJQJ5f0t5NOhxYIYztkjMTVLJcXSx8k/edit#gid=0"  target="_blank">
                                    <button className="bg-gray-300 text-white py-3 px-5 rounded inline-flex items-center" style={{backgroundColor: "#0066FF"}}>
                                        <span><FontAwesomeIcon icon={faGoogleDrive} size="md" />  View the Data</span>
                                    </button>
                                </a>
                            </div>
                            <div className="text-base">
                                <p className="pb-2">
                                    To have a closer look at the project please visit our GitHub repository.
                                </p>
                                <a href="https://github.com/covid19-apptracker"  target="_blank">
                                    <button className="bg-gray-300 text-white py-3 px-5 rounded inline-flex items-center" style={{backgroundColor: "#0066FF"}}>
                                        <span><FontAwesomeIcon icon={faGithub} size="md" />  Visit the Repo</span>
                                    </button>
                                </a>
                            </div>
                    </div>
                    <hr className="border-black pb-12" width="32px"/>
                    <h1 className="text-3xl pb-8">
                        Our Intended Audience
                    </h1>
                    <div className="text-base pb-12">
                        <p className="pb-4">
                            We created this project for the following groups so that they may be better equipped to conduct further research or advocate for specific changes they see fit for their communities. 
                        </p>
                        <div className="pb-4">
                            <ul className="list-disc pl-4">
                                <li>Researchers</li>
                                <li>Privacy Advocates</li>
                                <li>Journalists</li>
                                <li>General Public</li>
                            </ul> 
                        </div>
                        <p className="pb-4">
                            We hope this project leads to greater transparency for these new applications’ privacy and security implications around the globe. Many apps are being created quickly, resulting in poor security and/or are not clearly articulating how they are using the data they are collecting. 
                        </p>
                    </div>
                    <hr className="border-black pb-12" width="32px"/>
                    <h1 className="text-3xl pb-8">
                        Our Roadmap
                    </h1>
                    <div className="text-base pb-12"> 
                        <p className="pb-4">
                            <strong>Proof of Concept Launch | May 2020</strong><br/> 
                            The following tasks have been completed for the proof of concept launch: 
                        </p>
                        <div className="pb-8">
                            <ul className="list-disc pl-4">
                                <li>COVID-19 App Tracker engine is fully functional</li>
                                <li>Implement automatic updates to the dashboard</li>
                                <li>Update website content</li> 
                            </ul> 
                        </div>
                        <p className="pb-4">
                            <strong>Version 1.0 | July 2020</strong><br/> 
                            The following tasks have been completed under version 1: 
                        </p>
                        <div className="pb-8">
                            <ul className="list-disc pl-4">
                                <li>Optimize the dashboard and website for mobile and desktop browsers</li>
                                <li>Build app search functionality (by country)</li>
                                <li>Share data on google sheets</li>
                            </ul> 
                        </div>
                        <p>
                            <strong>Version 2.0 | Ongoing</strong><br/>  
                        </p>
                        <div>
                            <ul className="list-disc pl-4">
                                <li>Automate Twitter updates (New App, Update, or Take Down from Google Play)</li>
                                <li>Refine and add app search functionality</li>
                                <li>Identify more concerning permissions granted by apps based on existing methodologies and frameworks</li>
                                <li>Identify additional data sources to pull into the database of apps</li>
                            </ul> 
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}

export default AboutPage;
