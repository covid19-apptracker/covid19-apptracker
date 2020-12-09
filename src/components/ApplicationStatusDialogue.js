import React, {Component} from 'react';

import { faInfo } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ApplicationStatusDialogue extends Component {

    render() {
        return (
            <div className="bg-orange-600 text-white px-6 py-4 mb-6 flex" role="alert">
                <div className="mr-2">
                    <FontAwesomeIcon className="mr-1 text-white" icon={faInfo} size="md" />
                </div>
                <div> 
                    <p> 
                        This application was removed from the Google Play Store on <strong>{this.props.LastUpdated}</strong>    
                    </p>  
                </div> 
            </div> 
        );
    }
}

export default ApplicationStatusDialogue;
