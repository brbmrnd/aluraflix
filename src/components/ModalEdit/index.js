import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import styles from './ModalEdit.module.css'
import { IoMdClose } from "react-icons/io";

Modal.setAppElement('#root');

const ModalEdit = ({ isOpen, onRequestClose, onSave, videoData, categories }) => {
    const [formData, setFormData] = useState({});

    useEffect(() => {
        if (videoData) {
            setFormData(videoData);
        }
    }, [videoData]);

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
        <Modal isOpen={isOpen} onRequestClose={onRequestClose} className={styles.container} contentLabel="Edit Video">
            <div className={styles.closeButton} onClick={onRequestClose}>
                <IoMdClose size={24} />
            </div>
            <h2>Editar card </h2>
            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label>
                        Título:
                        <input type="text" id="title" value={formData.title || ''} onChange={handleChange} />
                    </label>
                    <label>
                        Categoria:
                        <select id="category" value={formData.category || ''} onChange={handleChange}>
                            <option value="">Selecione uma categoria</option>
                            {categories && categories.map(category => (
                                <option key={category.id} value={category.name}>{category.name}</option>
                            ))}
                        </select>
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
                        Descrição:
                        <textarea id="description" value={formData.description || ''} onChange={handleChange}></textarea>
                    </label>
                    <div className={styles.buttons}>
                        <button className={styles.button} type="submit">Atualizar</button>
                        <button className={styles.button} type="button" onClick={onRequestClose}>Cancelar</button>
                    </div>
                </div>
            </form>

        </Modal>
    );
};

export default ModalEdit;