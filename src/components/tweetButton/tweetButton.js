import React, {useState} from 'react';
import styles from './tweetButton.css'

let twitterIntent = "https://twitter.com/intent/tweet?text=";


const tweet = props => {
    let str = `${localStorage.getItem("song")} - ${localStorage.getItem("artist")} - ${localStorage.getItem("album")}`
    const link = `https://twitter.com/intent/tweet?hashtags=nowplaying&text=${str}`
    console.log(link);
    window.open(link); //TODO: window opens => somehow the previous sessions appears (why?)
}


const TweetButton = props => {
    return(
        <div className={styles.TweetButton} onClick={() => tweet(props)}>
            {props.tweetButtonTitle}
        </div>
    )
}

export default TweetButton;