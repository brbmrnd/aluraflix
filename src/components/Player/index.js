import styles from './Player.module.css'

function Player({ video }) {
    return (
        <div className={styles.player}>
            <p>{video.description}</p>
            <iframe
                width="1500"
                height="800"
                src={video.url}
                title={video.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            ></iframe>
        </div>
    );
}

export default Player;