import React, { useState } from 'react';
import Cards from '../Cards';
import styles from './VideoList.module.css';
import db from '../../db.json';
import ModalEdit from 'components/ModalEdit';

function VideoList({ category }) {
    const [videos, setVideos] = useState(db.videos.filter(video => video.category === category));
    const [openedEditModal, setOpenedEditModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);

    const handleDelete = (id) => {
        const updatedVideos = videos.filter(video => video.id !== id);
        setVideos(updatedVideos);
    };

    const handleEdit = (id) => {
        const video = videos.find(video => video.id === id);
        setSelectedVideo(video);
        setOpenedEditModal(true);
    };

    const handleSave = (updatedVideo) => {
        const updatedVideos = videos.map(video => video.id === updatedVideo.id ? updatedVideo : video);
        setVideos(updatedVideos);
        setOpenedEditModal(false);
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
                        onEdit={handleEdit}
                    />
                ))}
            </div>
            {openedEditModal && (
                <ModalEdit
                    isOpen={openedEditModal}
                    onRequestClose={() => setOpenedEditModal(false)}
                    onSave={handleSave}
                    videoData={selectedVideo}
                />
            )}
        </div>
    );
}


export default VideoList;
