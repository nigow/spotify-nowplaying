import React from 'react';
import './authorizationButton.css'

const AuthorizationButton = props => {

    return(
        <div className="AuthorizationButton" onClick={props.onclick}>authorize</div>
    )

}

export default AuthorizationButton;