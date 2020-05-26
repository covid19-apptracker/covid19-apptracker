import React, { Component } from 'react';   

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faMediumM } from "@fortawesome/free-brands-svg-icons";
import { faDribbbleSquare } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGlobeAmericas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class TeamPage extends Component {
    render() {
        return (
            <div> 
                <div id="container" className="container w-full content-center items-center justify-center pt-8 pb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto">
                    <div className="text-sm font-medium pb-4">
                        <Link className="hover:underline hover:text-blue-400" to="/" style={{color: "#0066FF"}}>Home</Link>{' '} / <span>Meet the Team</span>
                    </div>
                    <h1 className="text-3xl pb-12">
                        Meet the Team
                    </h1>
                    <div className="sm:flex text-base mb-24">
                        <div className="sm:mr-12 sm:mb-0 mb-4 flex-none">
                            <img src="https://jdeblois.com/wp-content/uploads/2020/05/vDg47Pra_400x400.jpg" className="h-auto w-full sm:h-64 sm:w-64 mx-auto sm:mx-0 rounded-lg shadow-lg"></img>
                        </div>
                        <div>
                            <div className="mb-6">
                                <h2 className="mb-1 text-2xl">Megan DeBlois</h2>
                                <h3 className="font-bold text-sm" style={{color: "#949494"}}>Volunteer Product Manager</h3>
                            </div>
                            <p className="mb-6">A grad student, an infosec technologist, a beach addict, and an amateur chef. I’m passionate about privacy and security, while also creating technology that has a positive impact on the world. I enjoy making products usable and useful for communities who need them most. Currently available as an IT security consultant for small businesses.
                            </p>
                            <div className="flex-none"> 
                                <a className="mr-2 p-4 hover:bg-gray-200 rounded-lg" target="_blank" href="https://twitter.com/realMegDeBlois"><FontAwesomeIcon className="" style={{color: "#1DA1F2"}} icon={faTwitter} size="lg" /></a> 
                                <a className="mr-2 p-4 hover:bg-gray-200 rounded-lg" target="_blank" href="https://www.linkedin.com/in/megan-deblois-44340869"><FontAwesomeIcon style={{color: "#0073B1"}} icon={faLinkedin} size="lg" /></a> 
                                <a className="mr-2 p-4 hover:bg-gray-200 rounded-lg" target="_blank" href="https://medium.com/@megan.deblois"><FontAwesomeIcon icon={faMediumM} size="lg" /></a> 
                                <a className="mr-2 p-4 hover:bg-gray-200 rounded-lg" target="_blank" href="mailto:contact@socalsecurity.info"><FontAwesomeIcon style={{color: "#0066FF"}} icon={faEnvelope} size="lg" /></a>   
                                {/* <Link className="mr-8" to="https://twitter.com/realMegDeBlois"><FontAwesomeIcon icon={faDribbbleSquare} size="lg" /></Link>   
                                <Link><FontAwesomeIcon icon={faGlobeAmericas} size="lg" /></Link>    */}
                            </div>
                        </div> 
                    </div> 
                    
                    <div className="sm:flex text-base mb-24 sm:flex-row-reverse">
                        <div className="sm:ml-12 sm:mb-0 mb-4 flex-none">
                            <img src="https://jdeblois.com/wp-content/uploads/2020/05/hbovhCE8_400x400.jpg" className=" sm:float-right h-auto w-full sm:h-64 sm:w-64 mx-auto sm:mx-0 rounded-lg shadow-lg"></img>
                        </div>
                        <div>
                            <div className="mb-6">
                                <h2 className="mb-1 text-2xl">Carlos Maycas Nadal</h2>
                                <h3 className="font-bold text-sm" style={{color: "#949494"}}>Volunteer Software Engineer</h3>
                            </div>
                            <p className="mb-6">Born and raised in Spain, I have experience as a software engineer in a variety of industries from e-commerce and bioinformatics to banking and home security systems. I love to learn and have always admired how engineers are able to create, connect, and learn from so many other fields of work.
                            </p>
                            <div className="flex-none"> 
                                <a className="mr-2 p-4 hover:bg-gray-200 rounded-lg" target="_blank" href="https://twitter.com/carmayna"><FontAwesomeIcon style={{color: "#1DA1F2"}} icon={faTwitter} size="lg" /></a> 
                                <a className="mr-2 p-4 hover:bg-gray-200 rounded-lg" target="_blank" href="https://www.linkedin.com/in/carlos-maycas-nadal-37429a64"><FontAwesomeIcon style={{color: "#0073B1"}} icon={faLinkedin} size="lg" /></a>
                                <a className="mr-2 p-4 hover:bg-gray-200 rounded-lg" target="_blank" href="http://carmayna.io"><FontAwesomeIcon style={{color: "#0066FF"}} icon={faGlobeAmericas} size="lg" /></a>
                            </div>
                        </div> 
                    </div> 
                    <div className="sm:flex text-base mb-24">
                        <div className="sm:mr-12 sm:mb-0 mb-4 flex-none">
                            <img src="https://www.zachanderson.tech/wp-content/uploads/2020/05/Zach_Headshot.jpg" className="h-auto w-full sm:h-64 sm:w-64 mx-auto sm:mx-0 rounded-lg shadow-lg"></img>
                        </div>
                        <div>
                            <div className="mb-6">
                                <h2 className="mb-1 text-2xl">Zach Anderson</h2>
                                <h3 className="font-bold text-sm" style={{color: "#949494"}}>Volunteer Software Engineer</h3>
                            </div>
                            <p className="mb-6">I'm an agile-minded web developer armed with experience in program management and design. I'm incredibly passionate about interdisciplinary collaboration and love working on teams of folks with a wide array of talents. I'm currently looking for full-time front-end development work - if you're looking for a developer with a designer’s mindset, reach out!
                            </p>
                            <div className="flex-none">  
                                <a className="mr-2 p-4 hover:bg-gray-200 rounded-lg" target="_blank" href="https://www.linkedin.com/in/zach-anderson-tech/"><FontAwesomeIcon style={{color: "#0073B1"}} icon={faLinkedin} size="lg" /></a>  
                                <a className="mr-2 p-4 hover:bg-gray-200 rounded-lg" target="_blank" href="https://www.zachanderson.tech/"><FontAwesomeIcon style={{color: "#0066FF"}} icon={faGlobeAmericas} size="lg" /></a> 
                                <a className="mr-2 p-4 hover:bg-gray-200 rounded-lg" target="_blank" href="mailto:zach@zachanderson.tech"><FontAwesomeIcon style={{color: "#0066FF"}} icon={faEnvelope} size="lg" /></a>     
                            </div>
                        </div> 
                    </div> 
                    
                    <div className="sm:flex text-base mb-24 sm:flex-row-reverse">
                        <div className="sm:ml-12 sm:mb-0 mb-4 flex-none">
                            <img src="https://pbs.twimg.com/profile_images/1161819852618653699/tWi_YwG__400x400.jpg" className=" sm:float-right h-auto w-full sm:h-64 sm:w-64 mx-auto sm:mx-0 rounded-lg shadow-lg"></img>
                        </div>
                        <div>
                            <div className="mb-6">
                                <h2 className="mb-1 text-2xl">Justin DeBlois</h2>
                                <h3 className="font-bold text-sm" style={{color: "#949494"}}>Volunteer UI Designer and Front-End Developer</h3>
                            </div>
                            <p className="mb-6">I'm a UI designer and up-and-coming front-end developer who is concerned about the future of ethical design education. When I'm not panicking about the state of the world, you can find me creating and testing web pages with a marketer's mindset. If you are looking for a UI designer with coding experience, shoot me a message.
                            </p>
                            <div className="flex-none"> 
                                <a className="mr-2 p-4 hover:bg-gray-200 rounded-lg" target="_blank" href="https://twitter.com/Thisisjdeblois"><FontAwesomeIcon style={{color: "#1DA1F2"}} icon={faTwitter} size="lg" /></a> 
                                <a className="mr-2 p-4 hover:bg-gray-200 rounded-lg" target="_blank" href="https://www.linkedin.com/in/justin-deblois-07a96857/"><FontAwesomeIcon style={{color: "#0073B1"}} icon={faLinkedin} size="lg" /></a>
                                <a className="mr-2 p-4 hover:bg-gray-200 rounded-lg" target="_blank" href="https://dribbble.com/jdeblois"><FontAwesomeIcon style={{color: "#EA4C89"}} icon={faDribbbleSquare} size="lg" /></a>  
                                <a className="mr-2 p-4 hover:bg-gray-200 rounded-lg" target="_blank" href="https://jdeblois.com/"><FontAwesomeIcon style={{color: "#0066FF"}} icon={faGlobeAmericas} size="lg" /></a>  
                            </div>
                        </div> 
                    </div> 
                </div> 
            </div>
        );
    }
}

export default TeamPage;