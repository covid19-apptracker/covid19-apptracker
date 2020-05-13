import React, { Component } from 'react';

class PlayApp extends Component {
    render() {
        return (
            <div className="PlayApp flex sm:items-center mx-auto pb-12">
          <div className="sm:w-2/12 sm:-mr-6 hidden sm:flex">
            <img src={this.props.iconURL} width="60" height="60" className="rounded-lg shadow-lg"></img>
          </div>
          <div className="w-8/12 sm:w-6/12 mr-3">
            <div className="title text-base font-medium text-gray-900">{this.props.title}</div>
            <div className="text-base font-medium text-gray-600">{this.props.developer}</div>
          </div>
          <div className="installs hidden sm:flex sm:w-2/12">
            <div className="text-base font-medium text-gray-900">{this.props.downloads}</div>
          </div>
          <div className="date w-4/12 sm:w-2/12 float-right text-left">
            <div className="text-base font-medium text-gray-900">{this.props.updatedDate}</div>
          </div>
        </div>
        )
    }
}

export default PlayApp;