import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from './ModalEdit.module.css'

Modal.setAppElement('#root');

const ModalEdit = ({ isOpen, onRequestClose, onSave, videoData }) => {
    const [formData, setFormData] = useState(videoData || {});

    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormData({ ...formData, [id]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(formData);
        onRequestClose();
    };

    return (
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={styles.content} contentLabel="Edit Video">
            <h2>Edit Video</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Título:
                    <input type="text" id="title" value={formData.title || ''} onChange={handleChange} />
                </label>
                <label>
                    Category:
                    <input type="text" id="category" value={formData.category || ''} onChange={handleChange} />
                </label>
                <label>
                    Imagem:
                    <input type="text" id="image" value={formData.image || ''} onChange={handleChange} />
                </label>
                <label>
                    URL:
                    <input type="text" id="video" value={formData.video || ''} onChange={handleChange} />
                </label>
                <label>
                    Description:
                    <textarea id="description" value={formData.description || ''} onChange={handleChange}></textarea>
                </label>
                <button type="submit">Atualizar</button>
                <button type="button" onClick={onRequestClose}>Cancelar</button>
            </form>
        </Modal>
    );
};

export default ModalEdit;
