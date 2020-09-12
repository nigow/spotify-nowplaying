import React from 'react';
import styles from './tweetButton.css'

const TweetButton = props => {
    const tweet = () => {
        let str = `${localStorage.getItem("song")} - ${localStorage.getItem("artist")} - ${localStorage.getItem("album")} ${localStorage.getItem("song_url")}`
        const link = `https://twitter.com/intent/tweet?hashtags=nowplaying&text=${str}`
        console.log(link);
        window.open(link); //TODO: window opens => somehow the previous sessions appears (why?)
    }

    return(
        <div className={styles.TweetButton} onClick={() => tweet(props)}>
            {props.tweetButtonTitle}
        </div>
    )
}

export default TweetButton;