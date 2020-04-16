import React, { Component } from 'react';

class PlayApp extends Component {
    render() {
        return (
            <div className="PlayApp flex sm:items-center mx-auto pb-12">
          <div className="sm:w-2/12 sm:-mr-6 hidden sm:flex">
            <img src="https://png.pngtree.com/png-clipart/20190614/original/pngtree-blue-simple-square-background-illustration-png-image_3679324.jpg" width="60" height="60" className="rounded-lg shadow-lg"></img>
          </div>
          <div className="w-8/12 sm:w-6/12">
            <div className="title text-base font-medium text-gray-900">Coronavirus Test App Name</div>
            <div className="text-base font-medium text-gray-600">Fake App Developer</div>
          </div>
          <div className="installs hidden sm:flex sm:w-2/12 sm:-ml-6 sm:mr-3">
            <div className="text-base font-medium text-gray-900">2.5MM</div>
          </div>
          <div className="date w-4/12 sm:w-2/12">
            <div className="text-base font-medium text-gray-900">04-11-2020</div>
          </div>
        </div>
        )
    }
}

export default PlayApp;