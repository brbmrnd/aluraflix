import React, { useState } from 'react';
import Cards from '../Cards';
import styles from './VideoList.module.css';
import db from '../../db.json';

function VideoList({ category, onEdit, color}) {
    const [videos, setVideos] = useState(db.videos.filter(video => video.category === category));


    const handleDelete = (id) => {
        const updatedVideos = videos.filter(video => video.id !== id);
        setVideos(updatedVideos);
    };

    return (
        <div className={styles.container}>
            <div className={styles.listaVideos}>
                {videos.map(video => (
                    <Cards
                        key={video.id}
                        id={video.id}
                        title={video.title}
                        capa={video.thumbnail}
                        onDelete={handleDelete}
                        onEdit={onEdit}
                        color={color}
                    />
                ))}
            </div>
        </div>
    );
}


export default VideoList;
