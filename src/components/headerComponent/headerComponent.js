import React, {useEffect, useState} from 'react';
import AuthorizationButton from '../authorizationButton/authorizationButton';
import TweetButton from '../tweetButton/tweetButton';
import Reloader from "../reloader/Reloader";
import './headerComponent.css';

const HeaderComponent = props => {
    const ep = process.env.REACT_APP_CLIENT_CODE

    window.spotifyCallback = popup => {
        window.close();
    }

    useEffect(() => {
        /*
        This is to close the pop-up window while getting the access token in the hashed fragment
         */
        let token = window.location.hash.substr(1).split('&')[0].split("=")[1];

        if (token){
            localStorage.setItem("accessToken", token);
            window.spotifyCallback();
        }
        return () => {
        }
    }, [])

    const click = () => {
        let popup = window.open(ep, 'Login with Spotify', 'width=800,height=600');
    }

    return (
        <div className="Header">
            <header>
                <nav>
                    <ul>
                        <li><Reloader onchange={props.onchange}/></li>
                        <li><AuthorizationButton authButtonTitle="authorize" onclick={click}/></li>
                        <li><TweetButton tweetButtonTitle="tweet" token={localStorage.getItem("accessToken")} /></li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}

export default HeaderComponent;