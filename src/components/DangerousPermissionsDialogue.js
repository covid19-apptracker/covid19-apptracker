import React, {Component} from 'react';

import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class DangerousPermissionsDialogue extends Component {

    render() {
        return (
            <div className="bg-orange-100 border-l-4 border-orange-600 text-orange-600 px-6 py-4 mb-6 flex" role="alert">
                <div className="mr-2">
                    <FontAwesomeIcon className="mr-1 text-orange-600" icon={faExclamationTriangle} size="md" />
                </div>
                <div>
                    <p>
                        <strong>Dangerous Permissions</strong>
                    </p>
                    <p> 
                        Number of dangerous permissions this application asks for: <strong>{this.props.count}</strong>    
                    </p> 
                    <a className="underline" href="https://developer.android.com/guide/topics/permissions/overview" target="_blank">
                        What are dangerous permissions?   
                    </a> 
                </div> 
            </div>
        );
    }
}

export default DangerousPermissionsDialogue;
