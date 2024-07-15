import React, { useState, useEffect } from 'react';
import Banner from '../../components/Banner';
import CategoriesList from '../../components/CategoriesList';
import VideoList from '../../components/VideoList';
import data from '../../db.json';
import ModalEdit from '../../components/ModalEdit';
import styles from './Home.module.css';

function Home() {
    const [openedEditModal, setOpenedEditModal] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        setVideos(data.videos);
    }, []);

    const openEditModal = (video) => {
        setSelectedVideo(video);
        setOpenedEditModal(true);
    };

    const closeEditModal = () => {
        setOpenedEditModal(false);
    };

    const handleSave = (updatedVideo) => {
        const updatedVideos = videos.map(video =>
            video.id === updatedVideo.id ? updatedVideo : video
        );
        setVideos(updatedVideos);
    };


    return (
        <>
            <Banner />
            <div className="videos-por-category">
                {data.categories.map(category => (
                    <div className={styles.container} key={category.id}>
                        <CategoriesList categories={[category]} />
                        <VideoList 
                            category={category.name} 
                            onEdit={(video) => openEditModal(video)}
                        />
                    </div>
                ))}
            </div>
            {openedEditModal && (
                <ModalEdit 
                    isOpen={openedEditModal} 
                    onRequestClose={closeEditModal} 
                    onSave={handleSave} 
                    videoData={selectedVideo} 
                />
            )}
            )}
        </>
    );
}

export default Home;