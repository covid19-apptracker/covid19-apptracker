import React, { Component } from 'react';
import NavBar from '../../components/headerComponent/NavBar.js';
import Footer from '../../components/footerComponent/Footer.js';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class AppPage extends Component {
	render() {
		return (
			<div>
				<NavBar />
				<div
					id="container"
					className="container w-full content-center items-center justify-center pt-8 pb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto"
				>
                   
                        <div className="text-sm font-medium pb-8">
                            <Link className="hover:underline hover:text-blue-400" to="/" style={{color: "#0066FF"}}>
                                Home
                            </Link>{' '}
                            / <span >App Name Here</span>
                        </div>
                    <div id="developerInfo">
                        <div className="flex items-center pb-12">
                            <div className="pr-4">
                                <img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-blue-simple-square-background-illustration-png-image_3679324.jpg" width="120" height="120" className="rounded-lg shadow-lg"></img>
                            </div>
                            <div>
                                <div className="items-baseline flex">
                                    <h1 className="text-3xl pb-2">App Name Here Super Long <i className="fa fa-share-square pl-4 fa-sm" style={{color: "#0066FF"}}></i></h1>
                                </div>
                                <div className="flex">
                                    <p className="font-bold text-sm pr-8">Developers</p><Link className="text-base text-sm hover:underline hover:text-blue-400" to="#" style={{color: "#0066FF"}}>Developer's Name</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="additionalInfo">
                        <div className="sm:flex pb-12">
                            <div className="flex-1 rounded overflow-hidden shadow-lg mb-4 sm:mb-0"> 
                                <div className="px-6 py-4">
                                    <p className="font-bold text-sm">Origin Country</p>
                                    <div className="pt-6 pb-8 text-center">
                                        <p className="text-black text-3xl">
                                        IN
                                        </p> 
                                    </div> 
                                    <p className="text-right text-xs text-gray-700">Last Updated 04-12-2020</p> 
                                </div>
                            </div>
                            <div className="flex-1 sm:mx-4 rounded overflow-hidden shadow-lg mb-4 sm:mb-0"> 
                                <div className="px-6 py-4">
                                    <p className="font-bold text-sm">Device Installs</p>
                                    <div className="pt-6 pb-8 text-center">
                                        <p className="text-black text-3xl">
                                        2.5<span className="text-gray-700 text-sm">MM</span>
                                        </p> 
                                    </div> 
                                    <p className="text-right text-xs text-gray-700">Last Updated 04-12-2020</p> 
                                </div>
                            </div>
                            <div className="flex-1 rounded overflow-hidden shadow-lg"> 
                                <div className="px-6 py-4">
                                    <p className="font-bold text-sm">Last Updated</p>
                                    <div className="pt-6 pb-8 text-center">
                                        <p className="text-black text-3xl">
                                        04-12-2020
                                        </p> 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="appPermissions" className="pb-12">
                        <p className="font-bold text-sm pb-6">App Permissions</p>
                        <div className="flex grid grid-cols-1 sm:grid-cols-2 base-text">
                            <div id="storage" className="flex align-top sm:pr-6 pb-12">
                                <div class="pr-4">
                                    <div class="rounded-full h-10 w-10 flex items-center justify-center " style={{backgroundColor: "#0066FF"}}><i className="fa fa-map-marker fa-md text-white"></i></div>
                                </div>
                                <div>
                                    <p className="pb-1 font-medium">Location</p>
                                    <ul className="list-disc pl-4 text-gray-700">
                                        <li>Precise location (gps and network-based)</li>
							        </ul>
                                    
                                </div>
                            </div>
                            <div id="storage" className="flex align-top sm:pr-6 pb-12">
                                <div class="pr-4">
                                    <div class="rounded-full h-10 w-10 flex items-center justify-center " style={{backgroundColor: "#0066FF"}}><i className="fa fa-mobile fa-lg text-white"></i></div>
                                </div>
                                <div>
                                    <p className="pb-1 font-medium">Phone</p>
                                    <ul className="list-disc pl-4 text-gray-700">
                                        <li>Read phone status and identity</li>
							        </ul>
                                    
                                </div>
                            </div>
                            <div id="storage" className="flex align-top sm:pr-6 pb-12">
                                <div class="pr-4">
                                    <div class="rounded-full h-10 w-10 flex items-center justify-center " style={{backgroundColor: "#0066FF"}}><i className="fa fa-download fa-md text-white"></i></div>
                                </div>
                                <div>
                                    <p className="pb-1 font-medium">Storage</p>
                                    <ul className="list-disc pl-4 text-gray-700">
                                        <li>Read phone status and identity</li>
							        </ul>
                                    
                                </div>
                            </div>
                            <div id="storage" className="flex align-top sm:pr-6 pb-12">
                                <div class="pr-4">
                                    <div class="rounded-full h-10 w-10 flex items-center justify-center " style={{backgroundColor: "#0066FF"}}><i className="fa fa-microphone fa-md text-white"></i></div>
                                </div>
                                <div>
                                    <p className="pb-1 font-medium">Microphone</p>
                                    <ul className="list-disc pl-4 text-gray-700">
                                        <li>Read phone status and identity</li>
							        </ul>
                                    
                                </div>
                            </div>
                            <div id="storage" className="flex align-top sm:pr-6 pb-12">
                                <div class="pr-4">
                                    <div class="rounded-full h-10 w-10 flex items-center justify-center " style={{backgroundColor: "#0066FF"}}><i className="fa fa-phone fa-md text-white"></i></div>
                                </div>
                                <div>
                                    <p className="pb-1 font-medium">Device ID & Call Info</p>
                                    <ul className="list-disc pl-4 text-gray-700">
                                        <li>Read phone status and identity</li>
							        </ul>
                                    
                                </div>
                            </div>
                            <div id="storage" className="flex align-top sm:pr-6 pb-12">
                                <div class="pr-4">
                                    <div class="rounded-full h-10 w-10 flex items-center justify-center " style={{backgroundColor: "#0066FF"}}><i className="fa fa-question fa-lg text-white"></i></div>
                                </div>
                                <div>
                                    <p className="pb-1 font-medium">Other</p>
                                    <ul className="list-disc pl-4 text-gray-700">
                                        <li>Receive data from internet</li>
                                        <li>View network connections</li>
                                        <li>Full network access</li>
                                        <li>Prevent device from sleeping</li>
							        </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="appDescription" className="pb-12">
                        <div className="bg-gray-100 rounded-md border-gray-400 border">
                            <div className="px-6 sm:px-16 py-8">
                                <p className="font-bold text-sm pb-2">App Description</p>
                                <p>
                                    Covid Locator App helps Government of Goa track home quarantined citizens within the State of Goa. The app also helps the general public with preventive guidelines and information about hospitals within the State of Goa that are authorised to treat COVID-19.\nCovid Locator App has been developed by the Government of Goa to provide the general public with preventive guidelines and helpline information. The app also provides a heat map of home quarantined citizens within the State of Goa. The app has the following main sections for citizens:\n1. India Tracker - A real-time dashboard for statistical data nationwide\n2. Tracking feature to enable tracking of home quarantined citizens within the State of Goa.\n3. Heat Map of home quarantined citizens within the State of Goa\n4. Information of hospitals enabled to treat COVID-19\n5. Government-issued information for preventive care and advisories\n6. Helpline numbers for emergency\n7. FAQ\nThe App will help you with essential information. Stay Home. Stay Safe. 
                                </p>                           
                            </div>
                        </div>
                    </div>

				</div>
				<Footer />
			</div>
		);
	}
}

export default AppPage;
