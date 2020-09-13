import noMusic from '../static/music.png';

export async function updateSong(token) {
    let currentlyPlaying;

    await fetch(process.env.REACT_APP_NOWPLAYING_ENDPOINT, {
            headers: {'Authorization': `Bearer ${token}`}

        }).then(response => {

            response.status === 200 ? currentlyPlaying = true : currentlyPlaying = false;
            return response.json();

        }).catch(error => alert(error)).then(data => {
            const wait = () => {
                if(currentlyPlaying){
                    localStorage.setItem("artist", data.item.artists[0].name);
                    localStorage.setItem("album", data.item.album.name);
                    localStorage.setItem("song", data.item.name);
                    localStorage.setItem("img_url", data.item.album.images[0].url);
                    localStorage.setItem("song_url", data.item.external_urls.spotify);
                }else{
                    noMusicFound();
                }
            }
            setTimeout("wait()", 300);
            wait();

        }).catch(error => alert(error));
}

export function noMusicFound(){
    localStorage.setItem("artist", "artist");
    localStorage.setItem("album", "album");
    localStorage.setItem("song", "song");
    localStorage.setItem("img_url", noMusic);
    localStorage.setItem("song_url", null);
}