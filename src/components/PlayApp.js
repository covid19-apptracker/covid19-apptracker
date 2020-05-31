import React, { Component } from 'react';
import { HashRouter as Router, Route, Link } from 'react-router-dom';
import AppPage from './pages/AppPage';

class PlayApp extends Component {
    constructor(props) {
      super(props);
      this.state = {
        hidden: false
      }
    }

    hide = () => {
      this.setState({
        hidden:true
      })
    }

    render() {
        return (
          <div className={(this.state.hidden===true) ? "hidden" : ""}>
            <Router>
            <Route exact path={"/app/"+this.props.id.toString()} component={AppPage} />
            <Link to={"app/"+this.props.id.toString()}> 
            <div className="PlayApp flex sm:items-center mx-auto mb-12 p-4 hover:bg-gray-200 rounded-lg">

              <div className="sm:w-2/12 sm:-mr-6 hidden sm:flex" style={{maxHeight:"60px"}}>
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
          </Link>
          </Router>
        </div>
        )
    }
}

export default PlayApp;