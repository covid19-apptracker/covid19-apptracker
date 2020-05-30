import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class PrivacyPolicyPage extends Component {
	render() {
		return (
			<div>
				<div
					id="container"
					className="container w-full content-center items-center justify-center pt-8 pb-8 max-w-screen-md pl-6 pr-6 lg:pl-0 lg:pr-0 mx-auto"
				>
					<div className="text-sm font-medium pb-4">
						<Link className="hover:underline hover:text-blue-400" to="/" style={{ color: '#0066FF' }}>
							Home
						</Link>{' '}
						/ <span>Privacy Policy</span>
					</div>
					<div className="mb-12">
						<div className="flex items-baseline">
							<h1 className="text-3xl pb-8">Privacy Policy</h1>
							<p className="ml-6 text-sm">Last updated: May 25, 2020</p>
						</div>

						<p>
							This Privacy Policy describes the information we collect from users that visit our website,
							how we use the information, and our legal basis for doing so. It also covers whether and how
							that information may be shared and your rights and choices regarding the information you
							provide to us. The Privacy Policy applies to the information we obtain through use of the
							COVID-19 App Tracker website.
						</p>
					</div>

					<hr className="border-black mb-12" width="32px" />

					<div className="mb-8">
						<h2 className="mb-1 text-2xl">Personal Data Collection and Use</h2>

						<p className="mb-4">
							In order for us to provide you the best experience on our website, as well as to prioritize
							future work under the project, we collect and process certain information. Depending on your
							use of the Services, that may include:
						</p>

						<ul className="list-disc pl-4">
							<li className="mb-2">
								<strong>Contact us via email</strong> — for example, when you ask for support, request
								to collaborate, send us questions or corrections, or report a problem, we will collect
								your name, email address, message, etc. We use this data solely in connection with
								answering the queries we receive.
							</li>
							<li className="mb-2">
								<strong>Usage data</strong> — when you visit our site, we will store: the website from
								which you visited us from, the parts of our site you visit, the date and duration of
								your visit, your anonymised IP address, information from the device (device type,
								operating system, screen resolution, language, country you are located in, and web
								browser type) you used during your visit. We process this usage data in Matomo Analytics
								for statistical purposes, to improve our site and to recognize and stop any misuse.
							</li>
							<li>
								<strong>Cookies</strong> — we use cookies (small data files transferred onto computers
								or devices by sites) for record-keeping purposes and to enhance functionality on our
								site. You may deactivate or restrict the transmission of cookies by changing the
								settings of your web browser. Cookies that are already stored may be deleted at any
								time.
							</li>
						</ul>
					</div>

					<hr className="border-black mb-8" width="32px" />

					<div className="mb-8">
						<h2 className="mb-1 text-2xl">Your Rights</h2>

						<p className="mb-4">
							You have the right to be informed of Personal Data processed by the COVID-19 App Tracker
							project, a right to rectification/correction, erasure and restriction of processing. You
							also have the right to ask from us a structured, common and machine-readable format of
							Personal Data you provided to us.
						</p>

						<p className="mb-4">
							We can only identify you via your email address and we can only adhere to your request and
							provide information if we have Personal Data about you through you having made contact with
							us directly. To exercise any of the rights mentioned in this Privacy Policy and/or in the
							event of questions or comments relating to the use of Personal Data you may contact Matomo’s
							support team: info@covid19apptracker.org
						</p>

						<p>
							In addition, you have the right to lodge a complaint with the data protection authority in
							your jurisdiction.
						</p>
					</div>

					<hr className="border-black mb-8" width="32px" />

					<div className="mb-8">
						<h2 className="mb-1 text-2xl">Third-Party Services We Use</h2>

						<p className="mb-4">
							The third-party services that we use are all used in accordance with their Terms of Use and
							for legitimate interests inside the United States of America. Below you can find each
							service used and for what purpose, as well as a link to each service and their Privacy
							Policies.
						</p>

						<p className="mb-4">
							<a
								href="https://aws.amazon.com/"
								className="font-bold hover:underline"
								style={{ color: '#0066FF' }}
								target="_blank"
							>
								Amazon AWS
							</a>{' '}
							— We use this service to host backend infrastructure and analytics. Personal data collected
							by Amazon AWS includes anonymised IP address, Pages visited, browser and devices used, and
							more. Link to their{' '}
							<a
								className="hover:underline"
								style={{ color: '#0066FF' }}
								target="_blank"
								href="https://aws.amazon.com/privacy/"
							>
								Privacy Policy
							</a>.
						</p>
						<p className="mb-4">
							<a
								href="https://pages.github.com/"
								className="font-bold hover:underline"
								style={{ color: '#0066FF' }}
								target="_blank"
							>
								GitHub Pages
							</a>{' '}
							— We use this service To host the website. Data collected by GitHub Pages includes website
							hosted on their infrastructure. Link to their{' '}
							<a
								className="hover:underline"
								style={{ color: '#0066FF' }}
								target="_blank"
								href="https://help.github.com/en/github/site-policy/github-privacy-statement"
							>
								Privacy Policy
							</a>.
						</p>
						<p className="mb-4">
							<a
								href="https://matomo.org/"
								className="font-bold hover:underline"
								style={{ color: '#0066FF' }}
								target="_blank"
							>
								Matomo Web Analytics
							</a>{' '}
							— We use this service for website analytics. No data is shared with Matomo. Link to their{' '}
							<a
								className="hover:underline"
								style={{ color: '#0066FF' }}
								target="_blank"
								href="https://matomo.org/privacy-policy/"
							>
								Privacy Policy
							</a>.
						</p> 
					</div>

					<hr className="border-black mb-8" width="32px" />

					<div className="mb-8">
						<h2 className="mb-1 text-2xl">Privacy Policy Changes</h2>

						<p>
							We may update this Policy from time to time. If we do, we’ll let you know about any material
							changes by updating our website.
						</p>
					</div>

					<hr className="border-black mb-8" width="32px" />

					<div className="mb-20">
						<h2 className="mb-1 text-2xl">Contact Us</h2>
						<p>
							If you have any questions about this Privacy Policy, please contact us at{' '}
							<a
								className="hover:underline"
								style={{ color: '#0066FF' }}
								href="mailto:info@covid19apptracker.org"
								target="_blank"
							>
								info@covid19apptracker.org
							</a>
						</p>
					</div>
				</div>
			</div>
		);
	}
}

export default PrivacyPolicyPage;
