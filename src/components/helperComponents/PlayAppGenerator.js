import React, { Component } from 'react'
import PlayApp from '../PlayApp.js';

class PlayAppGenerator extends Component {
    
    createPlayApps = () => {
        const appInfos = [];
        let playApps = [<PlayApp key="1"/>, <PlayApp key="2"/>];

        console.log('working!');

        let appNames;

        fetch(process.env.PUBLIC_URL + '/apps_data/apps.json')
            .then(results => results.json())
            // .then(data => appNames = data)
            // .then(() => console.log(appNames))
            .then(data => data.forEach(function (appName) {
                //console.log(process.env.PUBLIC_URL + '/apps_data/apps_details/' + appName.id + '.json');
                fetch(process.env.PUBLIC_URL + '/apps_data/apps_details/' + appName.id + '.json')
                    .then(results => results.json())
                    .then(data => appInfos.push(data));
                    //.then(data => )
                    //.then(data => playApps.push(map<PlayApp key={data.id} id={data.id}/>));
            
            }));
            appInfos.map((appInfo) => {
                playApps.push(<PlayApp/>);
            });
        
            console.log(appInfos)
        return(playApps);
    }
    
    
    render() {
        return (
            <div>
                {this.createPlayApps()}
            </div>
        )
    }
}

export default PlayAppGenerator;
