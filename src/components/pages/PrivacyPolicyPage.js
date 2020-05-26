import React, { Component } from 'react';  

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class PrivacyPolicyPage extends Component {
    render() {
        return (
            <div> 
                <div id="container" className="container w-full content-center items-center justify-center pt-8 pb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto">
                    <div className="text-sm font-medium pb-4">
                        <Link className="hover:underline hover:text-blue-400" to="/" style={{color: "#0066FF"}}>Home</Link>{' '} / <span>Privacy Policy</span>
                    </div>
                    <h1 className="text-3xl pb-8">
                        Privacy Policy
                    </h1>  
                    <p>
                        Last updated: May 25, 2020
                    </p>	
                    
                    <p>
                    This Privacy Policy describes the information we collect from users that visit our website, how we use the information, and our legal basis for doing so. It also covers whether and how that information may be shared and your rights and choices regarding the information you provide to us. The Privacy Policy applies to the information we obtain through use of the COVID-19 App Tracker website. 
                    </p>

                <h2>Personal Data Collection and Use</h2>

                    <p>
                        In order for us to provide you the best experience on our website, as well as to prioritize future work under the project, we collect and process certain information. Depending on your use of the Services, that may include:
                    </p>

                    <li><strong>Contact us via email</strong> — for example, when you ask for support, request to collaborate, send us questions or corrections, or report a problem, we will collect your name, email address, message, etc. We use this data solely in connection with answering the queries we receive.</li>

                    <li><strong>Usage data</strong> — when you visit our site, we will store: the website from which you visited us from, the parts of our site you visit, the date and duration of your visit, your anonymised IP address, information from the device (device type, operating system, screen resolution, language, country you are located in, and web browser type) you used during your visit. We process this usage data in Matomo Analytics for statistical purposes, to improve our site and to recognize and stop any misuse.</li>

                    <li><strong>Cookies</strong> — we use cookies (small data files transferred onto computers or devices by sites) for record-keeping purposes and to enhance functionality on our site. You may deactivate or restrict the transmission of cookies by changing the settings of your web browser. Cookies that are already stored may be deleted at any time.</li>

                <h2>Your Rights</h2>

                    <p>
                        You have the right to be informed of Personal Data processed by the COVID-19 App Tracker project, a right to rectification/correction, erasure and restriction of processing. You also have the right to ask from us a structured, common and machine-readable format of Personal Data you provided to us.
                    </p>

                    <p>
                        We can only identify you via your email address and we can only adhere to your request and provide information if we have Personal Data about you through you having made contact with us directly. To exercise any of the rights mentioned in this Privacy Policy and/or in the event of questions or comments relating to the use of Personal Data you may contact Matomo’s support team: info@covid19apptracker.org
                    </p>
                    
                    <p>	
                        In addition, you have the right to lodge a complaint with the data protection authority in your jurisdiction.
                    </p>
                    



                <h2>Third Party Services We Use</h2>

                    <table>
                        
                        <tr>
                            <td>
                                <strong>Recipient</strong>
                            </td>
                            <td>
                                <strong>Purpose of processing</strong>
                            </td>
                            <td>
                                <strong>Lawful basis</strong>
                            </td>
                            <td>
                                <strong>Data location and security</strong>
                            </td>	
                            <td>
                                <strong>Personal data collected by third party</strong>
                            </td>
                            <td>
                                <strong>Privacy policy</strong>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://aws.amazon.com/" onclick="javascript:window.open('https://aws.amazon.com/'); return false;">Amazon AWS</a>
                            </td>
                            <td>
                                To host backend infrastructure and analytics
                            </td>
                            <td>
                                Legitimate interest
                            </td>
                            <td>
                                USA
                            </td>	
                            <td>
                                Anonymised IP address, Pages visited, browser and devices used, and <a href="https://matomo.org/faq/general/faq_18254/">more</a>.
                            </td>
                            <td>
                                <a href="https://aws.amazon.com/privacy/" onclick="javascript:window.open('https://aws.amazon.com/privacy/'); return false;">link</a>
                            </td>
                        </tr>
                        <tr>	
                            <td>
                                <a href="https://pages.github.com/" onclick="javascript:window.open('https://pages.github.com/'); return false;">GitHub Pages</a>
                            </td>
                            <td>
                                To host the website
                            </td>
                            <td>
                                Legitimate interest
                            </td>
                            <td>
                                USA
                            </td>	
                            <td>
                                Website hosted on their infrastructure
                            </td>
                            <td>
                                <a href="https://help.github.com/en/github/site-policy/github-privacy-statement" onclick="javascript:window.open('https://help.github.com/en/github/site-policy/github-privacy-statement'); return false;">link</a>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <a href="https://matomo.org/" onclick="javascript:window.open('https://matomo.org/'); return false;">Matomo Web Analytics</a>
                            </td>
                            <td>
                                Website analytics
                            </td>
                            <td>
                                Legitimate interest
                            </td>
                            <td>
                                USA
                            </td>	
                            <td>
                                No data is shared with Matomo.

                            </td>
                            <td>
                                <a href="https://matomo.org/privacy-policy/" onclick="javascript:window.open('https://matomo.org/privacy-policy/'); return false;">link</a>
                            </td>
                        </tr>		
                        
                    </table>


                <h2>Privacy Policy Changes</h2>

                    <p>We may update this Policy from time to time. If we do, we’ll let you know about any material changes by updating our website.</p>

                <h2>Contact Us</h2>
                    <p>If you have any questions about this Privacy Policy, please contact us at <strong>info@covid19apptracker.org</strong></p>

                </div> 
            </div>
        );
    }
}

export default PrivacyPolicyPage;