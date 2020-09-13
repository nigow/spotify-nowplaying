import React from 'react';
import AuthorizationButton from '../authorizationButton/authorizationButton';
import TweetButton from '../tweetButton/tweetButton';
import Reloader from "../reloader/Reloader";
import './headerComponent.css';

const HeaderComponent = props => {

    window.spotifyCallback = () => {
        window.close();
    }

    const click = () => {
        window.open(process.env.REACT_APP_CLIENT_CODE, 'Login with Spotify', 'width=800,height=600');
    }

    return (
        <div className="Header">
            <header>
                <nav>
                    <ul>
                        <li><Reloader reload={props.reload}/></li>
                        <li><AuthorizationButton onclick={click}/></li>
                        <li><TweetButton tweetButtonTitle="tweet" token={localStorage.getItem("accessToken")} /></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent;