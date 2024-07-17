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
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        setVideos(data.videos);
        setCategories(data.categories);
    }, []);

    const openEditModal = (video) => {
        setSelectedVideo(video);
        setOpenedEditModal(true);
    };

    const closeEditModal = () => {
        setOpenedEditModal(false);
    };

    const handleSave = (updatedVideo) => {
        const updatedVideos = videos.map(video => video.id === updatedVideo.id ? updatedVideo : video);
        setVideos(updatedVideos);
        setOpenedEditModal(false);
    };

    const handleEdit = (id) => {
        const video = videos.find(video => video.id === id);
        setSelectedVideo(video);
        setOpenedEditModal(true);
    };

    const handleDelete = (id) => {
        const updatedVideos = videos.filter(video => video.id !== id);
        setVideos(updatedVideos);
    };

    return (
        <>
            <Banner />
            <div className="videos-por-category">
                {categories.map(category => (
                    <div className={styles.container} key={category.id}>
                        <CategoriesList categories={[category]} />
                        <VideoList
                            category={category.name}
                            onEdit={handleEdit}
                            onDelete={handleDelete}
                            color={category.cor}
                        />
                    </div>
                ))}
            </div>

            {openedEditModal && (
                <ModalEdit
                    isOpen={openEditModal}
                    onRequestClose={closeEditModal}
                    onSave={handleSave}
                    videoData={selectedVideo}
                    categories={categories}
                />
            )}
        </>
    );
}

export default Home;