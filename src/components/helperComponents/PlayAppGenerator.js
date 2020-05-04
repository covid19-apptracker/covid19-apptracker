import React, { Component } from 'react'
import PlayApp from '../PlayApp.js';

class PlayAppGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playAppArray: new Array(),
            hasRequested: false
        }
    }


    getAppInfo = () => {
        let appInfos = [];
        let playApps = [];

        console.log('working!');

        let appNames;

        // fetch(process.env.PUBLIC_URL + '/apps_data/apps.json')
        //     .then(results => results.json())
        //     // .then(data => appNames = data)
        //     // .then(() => console.log(appNames))
        //     .then(data => data.forEach(function (appName) {
        //         //console.log(process.env.PUBLIC_URL + '/apps_data/apps_details/' + appName.id + '.json');
        //         fetch(process.env.PUBLIC_URL + '/apps_data/apps_details/' + appName.id + '.json')
        //             .then(results => results.json())
        //             .then(data => appInfos.push(data));
        //             // .then(data => this.setState(prevState => ({
        //             //     playAppArray: [...prevState.playAppArray, < PlayApp id = {
        //             //             data.id
        //             //         }
        //             //         title = {
        //             //             data.title
        //             //         }
        //             //         iconURL = {
        //             //             data.icon_url
        //             //         }
        //             //         developer = {
        //             //             data.developer_id
        //             //         }
        //             //         downloads = {
        //             //             data.downloads
        //             //         }
        //             //         updatedDate = {
        //             //            data.updated_date
        //             //         }
        //             //         / >],
        //             //         hasRequested: true
        //             //     })))
        //             //.then(data => )
        //             //.then(data => playApps.push(map<PlayApp key={data.id} id={data.id}/>));
            
        //     }));

        async function asyncForEach(array, callback) {
            for (let index = 0; index < array.length; index++) {
                await callback(array[index], index, array);
            }
        }
        
        const request = async () => {
            if (!this.state.hasRequested){
            const response = await fetch(process.env.PUBLIC_URL + "/apps_data/apps.json")
            const json = await response.json();
            console.log('logging json...');
            console.log(json);
            await asyncForEach(json, async (appName) => {
                const data= await fetch(process.env.PUBLIC_URL +"/apps_data/apps_details/" +appName.id +".json");
                const appDetails = await data.json();
                playApps.push(appDetails);
                
                //await this.setState(playAppArray: [...this.state.playAppArray, appDetails]);
            })


            // await asyncForEach(appInfos, async (appInfo) => {
            //     //console.log('made it here');
            //     playApps.push(<li key={appInfo.id}>{appInfo.id}</li>);
            // })

            playApps = await playApps.map((appInfo) => < PlayApp 
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
                    appInfo.developer_id
                }
                downloads = {
                    appInfo.downloads
                }
                updatedDate = {
                    appInfo.updated_date
                }/>);
            
            //refactor this to pull apps one by one in the above for each, now that we're setting state
            //we can push apps one by one directly into state

            await this.setState({
              playAppArray: playApps,
              hasRequested: true
            });

            //await this.setState(playAppArray = );
            // .then(data => appNames = data)
            // .then(() => console.log(appNames))
            // .then((data) =>
            //   data.forEach(function (appName) {
            //     //console.log(process.env.PUBLIC_URL + '/apps_data/apps_details/' + appName.id + '.json');
            //     fetch(
            //       process.env.PUBLIC_URL +
            //         "/apps_data/apps_details/" +
            //         appName.id +
            //         ".json"
            //     )
            //       .then((results) => results.json())
            //       .then((data) => appInfos.push(data));
            //     //.then(data => )
            //     //.then(data => playApps.push(map<PlayApp key={data.id} id={data.id}/>));
            //   })
            // );
        }
        };

        request();
            

            console.log('App Info Below!');
            console.log(appInfos)

            // let test = appInfos.map((appInfo) =>
            //     <PlayApp key={appInfo.id} id={appInfo.id}/>
            // );

            console.log('app infos: ' + appInfos.toString());
            appInfos.forEach(function(appInfo) {

            })
        
            console.log(playApps)
        return(playApps);
    }

    createPlayApps = (appInfos) => {
        let playApps = [];

        let num = Object.values(appInfos).length


        // setTimeout(function () {
        //   for (let appInfo in appInfos) {
        //     console.log("grrrr....");
        //   }
        // }, 500);

        appInfos.forEach(function (appInfo) {
          console.log("made it here");
          playApps.push(<PlayApp />);
        });

        return playApps;
    }
    
    
    render() {
        let apps = this.getAppInfo();
        return (
          <div>
            <ol>{this.state.playAppArray}</ol>
          </div>
        );
    }
}

export default PlayAppGenerator;
