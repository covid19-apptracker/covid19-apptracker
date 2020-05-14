import React, { Component } from 'react'
import PlayApp from '../PlayApp.js';
import AppPage from '../../components/pages/AppPage';

import loadingImg from '../../img/loading.gif';

import { HashRouter as Router, Route, Link } from 'react-router-dom';

class PlayAppGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasRequestedData: false,
            testArray: this.props.playAppArray
        }
    }

    // componentDidUpdate(prevProps) {
    //     console.log("made it into Component Did Update!");
    //     console.log(this.props.playAppArray)
    //     if (prevProps.playAppArray !== this.props.playAppArray) {
    //         this.fetchData(this.props.playAppArray)
    //     }
    // }

    // componentWillReceiveProps(nextProps) {
    //     console.log("made it into will receive props")
    //     this.setState(
    //         {testArray: nextProps.playAppArray}
    //     );
    // }

    componentDidMount() {
        console.log("made it into component did mount")
        this.setState({
            testArray: this.props.playAppArray
        })
    }
    componentWillReceiveProps(nextProps) {
        console.log("made it into will receive props test")
        console.log(nextProps.playAppArray);
        this.setState({
            testArray: nextProps.playAppArray
        });
    }

    // getAppInfo = () => {
    //     let appInfos = [];
    //     let playApps = [];
    //     let appRoutes =[];

    //     let appNames;

    //     async function asyncForEach(array, callback) {
    //         for (let index = 0; index < array.length; index++) {
    //             await callback(array[index], index, array);
    //         }
    //     }
        
    //     const request = async () => {
    //         if (!this.state.hasRequestedData) {
    //             let updatedCounter = this.state.counter + 1;
    //             this.setState({
    //                 hasRequestedData: true,
    //                 counter: updatedCounter
    //             });
    //             const response = await fetch(process.env.PUBLIC_URL + "/apps_data/apps.json")
    //             const json = await response.json();
    //             console.log('logging json... ' + this.state.counter);
    //             console.log(json);
    //             await asyncForEach(json, async (appName) => {
    //                const data= await fetch(process.env.PUBLIC_URL +"/apps_data/apps_details/" +appName.id +".json");
    //                 const appDetails = await data.json();
    //                 playApps.push(appDetails);
                
    //             })

    //             appRoutes = await playApps.map((appInfo) => ( <Route exact path = {
    //                     "/app/" + appInfo.id
    //                 }
    //                 component = {
    //                     AppPage
    //                 }
    //                 key = {
    //                     appInfo.id
    //                 }
    //                 id = {
    //                     appInfo.id
    //                 }
    //                 title = {
    //                     appInfo.title
    //                 }
    //                 iconURL = {
    //                     appInfo.icon_url
    //                 }
    //                 developer = {
    //                     decodeURIComponent(
    //                         appInfo.developer_id.replace(/\+/g, " ")
    //                     )
    //                 }
    //                 downloads = {
    //                     appInfo.downloads
    //                 }
    //                 updatedDate = {
    //                     appInfo.updated_date
    //                 }
    //                 />
    //             ));
                
    //             this.props.shareRoutesWithApp(appRoutes);

    //             playApps = await playApps.map((appInfo) => 
    //                 < PlayApp 
    //                     key = {
    //                         appInfo.id
    //                     }
    //                     id = {
    //                         appInfo.id
    //                     }
    //                     title = {
    //                         appInfo.title
    //                     }
    //                     iconURL = {
    //                         appInfo.icon_url
    //                     }
    //                     developer = {
    //                         decodeURIComponent((appInfo.developer_id).replace(/\+/g, " "))
    //                     }
    //                     downloads = {
    //                         appInfo.downloads
    //                     }
    //                     updatedDate = {
    //                         appInfo.updated_date
    //                     }
    //                 />
    //             );

                
    //             //refactor this to pull apps one by one in the above for each, now that we're setting state
    //             //we can push apps one by one directly into state
    //             await this.setState({
    //             playAppArray: playApps,
    //             hasRequestedData: true
    //             });
    //         }
    //     };

    //     request();

    //     return(playApps);
    // }
    
    
    render() {
        // if (this.state.testArray.length === 0) {
        //     if (!this.state.hasRequestedData) {
        //         let apps = this.getAppInfo();
        //     }
        // }
        
        if (this.state.testArray != 0) {
            console.log("inside check in Play App generator for props")
            console.log(this.state.testArray);
            return (
                <div>
                    {this.state.testArray}
                </div>
            );
        } else {
            return (
                <div>
                    <img src={loadingImg} className="mx-auto" alt="logo" />
                </div>
            );
        }
    }
}

export default PlayAppGenerator;
