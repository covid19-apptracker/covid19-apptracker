import React, { Component } from 'react'; 

class AboutPage extends Component {
    render() {
        return (
            <div>
                <div id="container" className="container w-full content-center items-center justify-center pt-8 pb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto">
                    <div className="text-sm font-medium pb-4">
                        <a className="text-black hover:underline hover:text-gray-500" href="/">Home</a> / <span className="text-blue-500">About the Project</span>
                    </div>
                    <h1 className="text-3xl pb-8">
                        Project Synopsis
                    </h1>
                    <div className="text-base">
                            <p className="pb-4">
                                With the current COVID19 crisis has emerged privacy concerns with the large number of apps being published and pushed for broad public download. This project aims to track these apps and their release for further investigation, while informing the public if there are known privacy concerns prior before installing.
                            </p>
                            <p className="pb-12">
                                The current project looks at applications on the Google Play Store or applications.
                            </p>
                    </div>
                    <hr className="border-black pb-12" width="32px"/>
                    <h1 className="text-3xl pb-8">
                        Who is this for?
                    </h1>
                    <div className="text-base">
                            <div className="pb-12">
                                <ul className="list-decimal pl-4">
                                    <li>Privacy Researchers and Advocates</li>
                                    <li>Tech Journalists</li>
                                    <li>General Public with Privacy Concerns</li>
                                </ul>
                            </div>
                    </div>
                    <hr className="border-black pb-12" width="32px"/>
                    <h1 className="text-3xl pb-8">
                        Project Components
                    </h1>
                    <div className="text-base">
                            <div className="pb-8">
                                <p className="font-medium pb-2">
                                    Phase 1
                                </p>
                                <ul className="list-disc pl-4">
                                    <li>Detect when new Coronavirus tracker apps are published on the Google Play Store</li>
                                    <li>Automatically post to Twitter</li>
                                    <li>Automatically display the compiled list on our site (filter by date, location, name...)</li>
                                </ul> 
                            </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutPage;