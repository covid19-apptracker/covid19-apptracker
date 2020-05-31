import React, { Component } from 'react';
import './App.css';

import ScrollToTop from './components/helperComponents/ScrollToTop';

import HomePage from './components/pages/HomePage.js';
import AboutPage from './components/pages/AboutPage.js';
import AppPage from './components/pages/AppPage.js';
import ContactPage from './components/pages/ContactPage.js'

import NavBar from "./components/headerComponent/NavBar.js";
import Footer from "./components/footerComponent/Footer.js";

import PlayApp from './components/PlayApp.js';

import { HashRouter as Router, Route} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playAppArray: [],
      hasRequestedData: false,
      processedData: [],
      playAppRoutes: [],
      totalNumberOfApps: 0
    };
  }

  shareTotalAppsNumber = (newNumberOfApps) => {
    this.setState(
      { totalNumberOfApps: newNumberOfApps }
    )
  }

  sortByCountry = (country) => {
    this.setState()
  }

  shareRoutesWithApp = (data) => {
    // console.log("made it into shareRoutes")
    // console.log(data)
    this.setState({
      playAppRoutes: data
    })
  }

  getAppInfo = () => {
    let playApps = [];

    async function asyncForEach(array, callback) {
      for (let index = 0; index < array.length; index++) {
        await callback(array[index], index, array);
      }
    }

    const request = async () => {
      if (!this.state.hasRequestedData) {
        this.setState({
          hasRequestedData: true,
        });
        const response = await fetch(
          process.env.PUBLIC_URL + "/apps_data/apps.json"
        );
        const json = await response.json();
        await asyncForEach(json, async (appName) => {
          const data = await fetch(
            process.env.PUBLIC_URL +
              "/apps_data/apps_details/" +
              appName.id +
              ".json"
          );
          const appDetails = await data.json();
          playApps.push(appDetails);
          // console.log(appDetails.id)
          this.setState({
            processedData: [...this.state.processedData, appDetails],
            hasRequestedData: true
          });
        });
      }
    };

    request();

    // console.log("logging play apps from App.js")
    // console.log(playApps)
    return playApps;
  };

  componentDidMount() {
    if (!this.state.hasRequestedData) {
      this.getAppInfo();
    }
  }

  render() {
    return (
      <Router basename="">
        <NavBar />
        <ScrollToTop />
        <div className="App container-fullheight">
          <div>
            <Route
              exact
              path="/"
              render={(props) => (
                <HomePage
                  shareRoutesWithApp={this.shareRoutesWithApp}
                  playAppArray={this.state.processedData.sort((a, b) => (a.downloads.substring(0, parseInt(a.downloads.length - 1)) > parseInt(b.downloads.substring(0, b.downloads.length - 1))) ? 1 : -1).filter(appInformation => (appInformation.country === "US")).map(
                    (appInfo, index) => (
                      <PlayApp
                        key={appInfo.id}
                        id={appInfo.id}
                        title={appInfo.title}
                        iconURL={appInfo.icon_url}
                        developer={decodeURIComponent(
                          appInfo.developer_id.replace(/\+/g, " ")
                        )}
                        downloads={appInfo.downloads}
                        updatedDate={appInfo.updated_date}
                        country={appInfo.country}
                      />
                    )
                  )}
                  shareTotalAppsNumber={this.shareTotalAppsNumber}
                  totalNumberOfApps={this.state.totalNumberOfApps}
                />
              )}
            />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/contact" component={ContactPage} />
            {this.state.processedData.map((appInfo) => (
              <Route
                exact
                path={"/app/" + appInfo.id}
                key={appInfo.id}
                render={(props) => (
                  <AppPage
                    {...props}
                    key={`${appInfo.id}`}
                    id={appInfo.id}
                    title={appInfo.title}
                    iconURL={appInfo.icon_url}
                    developer={decodeURIComponent(
                      appInfo.developer_id.replace(/\+/g, " ")
                    )}
                    downloads={appInfo.downloads}
                    updatedDate={appInfo.updated_date}
                    country={appInfo.country}
                    permissions={appInfo.permissions}
                    description={appInfo.description}
                    appStoreURL={appInfo.app_store_url}
                  />
                )}
              />
            ))}
          </div>
        </div>
        <Footer />
      </Router>
    );
  }
}

export default App;
