import React from 'react';
import styles from './Buttons.module.css';

const Buttons = ({ save, clear }) => {
    return (
        <div className={styles.btnsContainer}>
            <button className={styles.buttonSave} onClick={save}>Salvar</button>
            <button className={styles.buttonClear} onClick={clear}>Limpar</button>
        </div>
    );
}

export default Buttons;