import React, { useContext } from 'react';
import styles from './Banner.module.css';
import useVideoRotation from 'hooks/useVideoRotation';
import BannerPlayer from '../BannerPlayer';
import { VideosContext } from 'context/VideoContext';

function Banner() {
    const { videos, categories } = useContext(VideosContext);
    const { currentVideo } = useVideoRotation(videos);

    const currentCategory = currentVideo 
        ? categories.find(cat => cat.name === currentVideo.category)
        : {};

    const bannerStyle = currentVideo 
        ? { 
            backgroundImage: `url(${currentVideo.thumbnail})`, 
            borderColor: currentCategory?.cor || '#FFFFFF'
        } 
        : {};

    return (
        <div className={styles.banner} style={bannerStyle}>
            <div className={styles.overlay}>
                {currentVideo && (
                    <div className={styles.content}>
                        <div className={styles.textContainer}>
                            <h1 style={{ borderColor: currentCategory?.cor }}>{currentVideo.title}</h1>
                            <p className={styles.description}>{currentVideo.description}</p>
                        </div>
                        <div className={styles.playerContainer}>
                            <BannerPlayer video={currentVideo} borderColor={currentCategory?.cor} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Banner;