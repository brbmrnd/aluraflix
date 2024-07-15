import React from 'react';
import styles from './VideoPlayer.module.css';

function VideoPlayer({ video, borderColor }) {
    return (
        <iframe
            width="560"
            height="315"
            src={video.url}
            title={video.title}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className={styles.player}
            style={{ borderColor: borderColor }}
        ></iframe>
    );
}

export default VideoPlayer;