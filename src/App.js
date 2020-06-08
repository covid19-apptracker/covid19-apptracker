import React, { Component } from 'react';
import './App.css';

import ScrollToTop from './components/helperComponents/ScrollToTop';

import HomePage from './components/pages/HomePage.js';
import AboutPage from './components/pages/AboutPage.js';
import AppPage from './components/pages/AppPage.js';
import ContactPage from './components/pages/ContactPage.js'
import TeamPage from './components/pages/TeamPage.js'
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage.js'

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
      totalNumberOfApps: 0,
      currentFilter: ''
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

  updateAppFilter = (newFilter) => {
    if (newFilter !== null) {

    this.setState({
      currentFilter: newFilter.value
    });
    console.log(this.state.currentFilter)
    } else {
      this.setState({
        currentFilter: ''
      })
    }
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

  filterDataset = (country, downloads) => {
    let filteredData = this.state.processedData;
    if (country !== '') {
      filteredData = filteredData.filter(
        (appInformation) => appInformation.country === country
      );
    

    // FIX THIS BEFORE PUSHING LIVE - RIGHT NOW IT IS SET TO SORT BY ASCENDING/DESCENDING ONLY IF SORTING BY COUNTRY
    // TEMP FIX TO AVOID FLICKERING ON LOADING FOR MEETING WITH MEGAN AND CARLOS



    if (downloads === 'ascending') {
      filteredData = filteredData.sort((a, b) =>
        parseInt(
          a.downloads.substring(0, a.downloads.length - 1).replace(/,/g, "")
        ) >
        parseInt(
          b.downloads.substring(0, b.downloads.length - 1).replace(/,/g, "")
        )
          ? 1
          : -1
      );
    } else if (downloads === 'descending') {
      filteredData = filteredData.sort((a, b) =>
        parseInt(a.downloads.substring(0, a.downloads.length - 1).replace(/,/g, "")) 
          <
        parseInt(b.downloads.substring(0, b.downloads.length - 1).replace(/,/g, ""))
          ? 1
          : -1
      );
    }
  }
    return filteredData;

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
                  playAppArray={this.filterDataset(this.state.currentFilter, "descending").map(
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
                  currentFilter={this.state.currentFilter}
                  updateAppFilter={this.updateAppFilter}
                />
              )}
            />
            <Route exact path="/about" component={AboutPage} />
            <Route exact path="/team" component={TeamPage} />
            <Route exact path="/contact" component={ContactPage} />
            <Route exact path="/privacy-policy" component={PrivacyPolicyPage} />
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
                    updateAppFilter={this.updateAppFilter}
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
