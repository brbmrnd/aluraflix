import React from 'react';
import Modal from 'react-modal';
import styles from './ModalPlayer.module.css'

Modal.setAppElement('#root');

const ModalPlayer = ({ isOpen, onRequestClose, videoUrl }) => {
  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={styles.content} contentLabel="Video Modal">
      <h2>Video</h2>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <iframe
          width="560"
          height="315"
          src={videoUrl}
          title="Video Player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default ModalPlayer;
