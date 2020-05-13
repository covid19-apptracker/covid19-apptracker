import React, { Component } from 'react'
import PlayApp from '../PlayApp.js';

class PlayAppGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playAppArray: new Array(),
            hasRequestedData: false
        }
    }

    getAppInfo = () => {
        let appInfos = [];
        let playApps = [];

        let appNames;

        async function asyncForEach(array, callback) {
            for (let index = 0; index < array.length; index++) {
                await callback(array[index], index, array);
            }
        }
        
        const request = async () => {
            if (!this.state.hasRequestedData) {
                const response = await fetch(process.env.PUBLIC_URL + "/apps_data/apps.json")
                const json = await response.json();
                console.log('logging json...');
                console.log(json);
                await asyncForEach(json, async (appName) => {
                   const data= await fetch(process.env.PUBLIC_URL +"/apps_data/apps_details/" +appName.id +".json");
                    const appDetails = await data.json();
                    playApps.push(appDetails);
                
                })

                playApps = await playApps.map((appInfo) => 
                    < PlayApp 
                        key = {
                            appInfo.id
                        }
                        id = {
                            appInfo.id
                        }
                        title = {
                            appInfo.title
                        }
                        iconURL = {
                            appInfo.icon_url
                        }
                        developer = {
                            decodeURIComponent((appInfo.developer_id).replace(/\+/g, " "))
                        }
                        downloads = {
                            appInfo.downloads
                        }
                        updatedDate = {
                            appInfo.updated_date
                        }
                    />
                );
            
                //refactor this to pull apps one by one in the above for each, now that we're setting state
                //we can push apps one by one directly into state
                await this.setState({
                playAppArray: playApps,
                hasRequestedData: true
                });
            }
        };

        request();

        return(playApps);
    }


    
    
    render() {
        if (!this.state.hasRequestedData) {
            let apps = this.getAppInfo();
        }
        return (
          <div>
            <ol>{this.state.playAppArray}</ol>
          </div>
        );
    }
}

export default PlayAppGenerator;
