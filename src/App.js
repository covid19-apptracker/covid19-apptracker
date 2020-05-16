import React, { Component } from 'react';
import './App.css';

import ScrollToTop from './components/helperComponents/ScrollToTop';

import HomePage from './components/pages/HomePage.js';
import AboutPage from './components/pages/AboutPage.js';
import AppPage from './components/pages/AppPage';

import PlayApp from './components/PlayApp.js';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playAppArray: new Array(),
      hasRequestedData: false,
      playAppRoutes: new Array(),
      totalNumberOfApps: 0
    };
  }

  shareTotalAppsNumber = (newNumberOfApps) => {
    this.setState(
      { totalNumberOfApps: newNumberOfApps }
    )
  }

  shareRoutesWithApp = (data) => {
    // console.log("made it into shareRoutes")
    // console.log(data)
    this.setState({
      playAppRoutes: data
    })
  }

  getAppInfo = () => {
    let appInfos = [];
    let playApps = [];
    let appRoutes = [];

    let appNames;

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
        // console.log("logging json...");
        // console.log(json);
        await asyncForEach(json, async (appName) => {
          const data = await fetch(
            process.env.PUBLIC_URL +
              "/apps_data/apps_details/" +
              appName.id +
              ".json"
          );
          const appDetails = await data.json();
          playApps.push(appDetails);
        });

        appRoutes = await playApps.map((appInfo) => ( 
        <Route exact path = {
              "/app/" + appInfo.id
          }
          render={(props) => <AppPage {...props} 
            key={
              appInfo.id
            }
            id={
              appInfo.id
            }
            title={
              appInfo.title
            }
            iconURL={
              appInfo.icon_url
            }
            developer={
              decodeURIComponent(
                appInfo.developer_id.replace(/\+/g, " ")
              )
            }
            downloads={
              appInfo.downloads
            }
            updatedDate={
              appInfo.updated_date
            }
            country={
              appInfo.country
            }
            permissions={
              appInfo.permissions
            }
            description={
              appInfo.description
            }
            appStoreURL={
              appInfo.app_store_url
            }
          
        />}
        />
        ));
      // console.log("app routes below")
      // console.log(appRoutes)

        playApps = await playApps.map((appInfo) =>
          < PlayApp
            key={
              appInfo.id
            }
            id={
              appInfo.id
            }
            title={
              appInfo.title
            }
            iconURL={
              appInfo.icon_url
            }
            developer={
              decodeURIComponent((appInfo.developer_id).replace(/\+/g, " "))
            }
            downloads={
              appInfo.downloads
            }
            updatedDate={
              appInfo.updated_date
            }
          />
        );

        //refactor this to pull apps one by one in the above for each, now that we're setting state
        //we can push apps one by one directly into state
        await this.setState({
          playAppArray: playApps,
          playAppRoutes: appRoutes,
          hasRequestedData: true
        });
      }
    };

    request();

    // console.log("logging play apps from App.js")
    // console.log(playApps)
    return playApps;
  };



  render() {
    if (!this.state.hasRequestedData) {
      this.getAppInfo();
    }
    return (
      <Router basename="">
        <ScrollToTop />
        <div className="App">
          <div>
            <Route exact path="/" render={props => <HomePage shareRoutesWithApp={this.shareRoutesWithApp} playAppArray={this.state.playAppArray} shareTotalAppsNumber={this.shareTotalAppsNumber} totalNumberOfApps={this.state.totalNumberOfApps}/>} />
            <Route exact path="/about" component={AboutPage} />
            {this.state.playAppRoutes}
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
