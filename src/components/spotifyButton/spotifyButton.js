import React from 'react';
import axios from 'axios';

class SpotifyButton extends React.Component{

    constructor(props) {
        super(props);
        this.endpoint = "https://accounts.spotify.com/authorize?client_id=c269ed1920304f9db60d95e099228553&redirect_uri=http://i5nb.hateblo.jp/&scope=user-read-currently-playing&response_type=token&state=123"
    }

    authorize = () => {
        const closed = window.close(window.open(this.endpoint));
    }

    onclick = () => {
        if(!this.props.authorized){
            this.authorize();
        }
    }

    render(){
        const styles = {
            "width": "100px",
            "height": "100px"
        }
        return(
            <div>
                <button onClick={this.onclick}>Authorize</button>
            </div>
        )
    }
}

export default SpotifyButton;