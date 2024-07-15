import { useState, useEffect } from 'react';

function useVideoRotation(videos) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (videos.length > 0) {
            const interval = setInterval(() => {
                setCurrentIndex(prevIndex => (prevIndex + 1) % videos.length);
            }, 15000);

            return () => clearInterval(interval);
        }
    }, [videos]);

    const currentVideo = videos[currentIndex];

    return { currentVideo, currentIndex };
}

export default useVideoRotation;
