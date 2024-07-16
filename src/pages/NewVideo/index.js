import React, { useState } from 'react';
import db from '../../db.json';
import styles from './NewVideo.module.css';
import { IoMdArrowBack } from "react-icons/io";


function NewVideo() {
    const [title, setTitle] = useState('');
    const [category, setCategoria] = useState('');
    const [image, setImage] = useState('');
    const [linkVideo, setLinkVideo] = useState('');
    const [description, setDescription] = useState('');
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const newVideo = {
            id: db.videos.length + 1,
            title,
            category,
            url: linkVideo,
            thumbnail: image,
            description,
        };

        db.videos.push(newVideo);
        console.log('Vídeo salvo:', newVideo);

        setTitle('');
        setCategoria('');
        setImage('');
        setLinkVideo('');
        setDescription('');
    };

    const handleReset = () => {
        setTitle('');
        setCategoria('');
        setImage('');
        setLinkVideo('');
        setDescription('');
    };

    return (
        <div className={styles.container}>
            <a href='./' className={styles.backButton}>
                <IoMdArrowBack size={24} />
            </a>
            <h1>Novo Vídeo</h1>
            <p>Complete o formulário para criar um novo card de vídeo.</p>

            <form onSubmit={handleSubmit} className={styles.form}>
                <div className={styles.formGroup}>
                    <label htmlFor="title">Título</label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="category">Categoria</label>
                    <select
                        id="category"
                        value={category}
                        onChange={(e) => setCategoria(e.target.value)}
                        required
                    >
                        <option value="">Selecione uma categoria</option>
                        {db.categories.map(category => (
                            <option key={category.id} value={category.name}>{category.name}</option>
                        ))}
                    </select>
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="image">Link da imagem</label>
                    <input
                        type="text"
                        id="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="linkVideo">Link do Vídeo</label>
                    <input
                        type="text"
                        id="linkVideo"
                        value={linkVideo}
                        onChange={(e) => setLinkVideo(e.target.value)}
                        required
                    />
                </div>
                <div className={styles.formGroup}>
                    <label htmlFor="description">Descrição</label>
                    <textarea
                        id="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    ></textarea>
                </div>
                <div className={styles.buttons}>
                    <button type="submit" className={styles.button}>Salvar</button>
                    <button type="button" onClick={handleReset} className={styles.button}>Limpar</button>
                </div>
            </form>
        </div>
    );
}

export default NewVideo;
