import React from 'react';

export default function Reloader(props){

    const updateSong = token => {
        let currentlyPlaying;
        fetch(process.env.REACT_APP_NOWPLAYING_ENDPOINT, {
            headers: {'Authorization': `Bearer ${token}`}

        }).then(response => {
            response.status === 200 ? currentlyPlaying = true : currentlyPlaying = false;
            return response.json();

        }).catch(error => alert(error)).then(data => {
            if(currentlyPlaying){
                localStorage.setItem("artist", data.item.artists[0].name);
                localStorage.setItem("album", data.item.album.name);
                localStorage.setItem("song", data.item.name);
                localStorage.setItem("img_url", data.item.album.images[0].url);
            }else{
                localStorage.setItem("artist", null);
                localStorage.setItem("album", null);
                localStorage.setItem("song", null);
                localStorage.setItem("img_url", null);
            }
        }).catch(error => alert(error));
        props.onchange();
    }

    return(
        <div onClick={() => updateSong(localStorage.getItem("accessToken"))}>
            reload
        </div>
    )
}