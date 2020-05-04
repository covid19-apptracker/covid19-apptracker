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
                            <Link className="text-black hover:underline hover:text-gray-500" to="/">
                                Home
                            </Link>{' '}
                            / <span className="text-blue-500">App Name Here</span>
                        </div>
                    <div id="developerInfo">
                        <div className="flex items-center pb-12">
                            <div className="pr-4">
                                <img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-blue-simple-square-background-illustration-png-image_3679324.jpg" width="120" height="120" className="rounded-lg shadow-lg"></img>
                            </div>
                            <div>
                                <h1 className="text-3xl pb-2">App Name Here Super Long <i className="fas fa-share-square text-blue-500"></i></h1>
                                <div className="flex">
                                    <p className="font-bold pr-8">Developers</p><Link className="text-base text-blue-500 hover:underline hover:text-blue-400" to="#">Developer's Name</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="additionalInfo">
                        <div className="sm:flex pb-12">
                            <div className="flex-1 rounded overflow-hidden shadow-lg mb-4 sm:mb-0"> 
                                <div className="px-6 py-4">
                                    <p className="font-bold">Device Installs</p>
                                    <div className="pt-6 pb-8 text-center">
                                        <p className="text-black text-3xl">
                                        2.5<span className="text-gray-700 text-sm">MM</span>
                                        </p> 
                                    </div>
                                    <p className="text-right text-sm text-gray-700">04-12-2020</p>
                                </div>
                            </div>
                            <div className="flex-1 sm:ml-4 rounded overflow-hidden shadow-lg"> 
                                <div className="px-6 py-4">
                                    <p className="font-bold">Last Updated</p>
                                    <div className="pt-6 pb-8 text-center">
                                        <p className="text-black text-3xl">
                                        04-12-2020
                                        </p> 
                                    </div>
                                    <p className="text-right text-sm text-gray-700">04-12-2020</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="appPermissions" className="pb-12">
                        <p className="font-bold pb-6">App Permissions</p>
                        <div className="flex grid grid-cols-1 sm:grid-cols-2 base-text">
                            <div id="storage" className="flex align-top sm:pr-6 pb-8">
                                <div className="pr-4">
                                    <img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-blue-simple-square-background-illustration-png-image_3679324.jpg" width="32" height="32" className="rounded-lg shadow-lg"></img>
                                </div>
                                <div>
                                    <p className="pb-1 font-medium">Storage</p>
                                    <ul className="list-disc pl-4">
                                        <li>Read the contents of your USB storage</li>
                                        <li>Modify or delete the contents of your USB storage</li>
							        </ul>
                                    
                                </div>
                            </div>
                            <div id="storage" className="flex align-top sm:pr-6 pb-8">
                                <div className="pr-4">
                                    <img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-blue-simple-square-background-illustration-png-image_3679324.jpg" width="32" height="32" className="rounded-lg shadow-lg"></img>
                                </div>
                                <div>
                                    <p className="pb-1 font-medium">Microphone</p>
                                    <ul className="list-disc pl-4">
                                        <li>Record audio</li>
							        </ul>
                                    
                                </div>
                            </div>
                            <div id="storage" className="flex align-top sm:pr-6 pb-8">
                                <div className="pr-4">
                                    <img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-blue-simple-square-background-illustration-png-image_3679324.jpg" width="32" height="32" className="rounded-lg shadow-lg"></img>
                                </div>
                                <div>
                                    <p className="pb-1 font-medium">Storage</p>
                                    <ul className="list-disc pl-4">
                                        <li>Read the contents of your USB storage</li>
                                        <li>Modify or delete the contents of your USB storage</li>
							        </ul>
                                    
                                </div>
                            </div>
                            <div id="storage" className="flex align-top sm:pr-6 pb-8">
                                <div className="pr-4">
                                    <img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-blue-simple-square-background-illustration-png-image_3679324.jpg" width="32" height="32" className="rounded-lg shadow-lg"></img>
                                </div>
                                <div>
                                    <p className="pb-1 font-medium">Microphone</p>
                                    <ul className="list-disc pl-4">
                                        <li>Record audio</li>
							        </ul>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                    <div id="appDescription" className="pb-12">
                        <div className="bg-gray-100 rounded-md border-gray-400 border">
                            <div className="px-6 sm:px-16 py-8">
                                <p className="font-bold pb-2">App Description</p>
                                <p>With over 80 million members, happn is the dating app that lets you find everyone you have crossed paths with; the people destiny has decided you should meet. Like the profiles that catch your eye, get a Crush and most importantly, get together!</p>
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
