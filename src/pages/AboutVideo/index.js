import React from 'react';
import db from '../../db.json';
import { useParams } from 'react-router-dom';
import Player from 'components/Player';
import styles from './AboutVideo.module.css'

function AboutVideoPage() {
    const { id } = useParams();
    const videoId = parseInt(id, 10);
    const video = db.videos.find(video => video.id === videoId);

    if (!video) {
        return <div>Vídeo não encontrado</div>;
    }

    return (
        <section className={styles.player}>
            <h1>{video.title}</h1>
            <Player video={video} />
        </section>
    );
}

export default AboutVideoPage;