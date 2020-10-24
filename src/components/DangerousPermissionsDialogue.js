import React, {Component} from 'react';

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DangerousPermissionsDialogue extends Component {

    render() {
        return (
            <div className="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-6 mb-6" role="alert">
                <p>
                    <FontAwesomeIcon className="mr-1 text-orange-500" icon={faExclamationTriangle} size="md" /> <strong>Dangerous Permissions</strong>
                </p>
                <p>
                    Number of dangerous permissions this application asks for: <strong>{this.props.count}</strong>    
                </p> 
                <a className="underline" href="https://developer.android.com/guide/topics/permissions/overview" target="_blank">
                    What are dangerous permissions?   
                </a>  
            </div>
        );
    }
}

export default DangerousPermissionsDialogue;
