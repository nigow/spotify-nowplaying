import noMusic from "../static/music.png";
import {CurrentState} from './AuthorizationHelper';

export const openWindow = (async token => {
    let authorizationStatus;
    if(window.location.href.indexOf("access_token=") > -1){
        localStorage.setItem("accessToken", window.location.hash.substr(1).split('&')[0].split("=")[1])
        return CurrentState.LOGIN;
    }
    await fetch(process.env.REACT_APP_NOWPLAYING_ENDPOINT, {
        headers: {'Authorization': `Bearer ${token}`}

    }).then(response => {
        switch (response.status){
            case 200:
                authorizationStatus = CurrentState.AUTHORIZED;
                break;
            case 204:
                authorizationStatus = CurrentState.NOMUSIC;
                break;
            default:
                authorizationStatus = CurrentState.UNAUTHORIZED;
                break;
        }
    })
    return authorizationStatus;
})

export function closeWindow(){
    /*
    Things to do when the extension is hidden / not used
     */
    window.addEventListener("beforeunload", (event) => {
        event.preventDefault();
        localStorage.setItem("artist", "artist");
        localStorage.setItem("album", "album");
        localStorage.setItem("song", "song");
        localStorage.setItem("img_url", noMusic);
        return event.returnValue = "Closing window";

    })
}