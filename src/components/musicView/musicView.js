import React, {useEffect} from 'react';
import './musicView.css';
import musicLogo from './../../static/music.png'


export default function MusicView(){
    let song = localStorage.getItem("song") ? localStorage.getItem("song") : "song title";
    let artist = localStorage.getItem("artist") ? localStorage.getItem("artist") : "artist";
    let album = localStorage.getItem("album") ? localStorage.getItem("album") : "album";
    let image = localStorage.getItem("img_url") ? localStorage.getItem("img_url") : musicLogo;

    return(
        <div className="MusicView">
            {<img src={image}  alt="No pic given"/>}
            <p>{song}</p>
            <p>{artist}</p>
            <p>{album}</p>
        </div>
    )
}
