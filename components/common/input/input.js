import React from 'react';
import styles from './input.module.scss';

const Input = ({ placeholder, id, onClick, autofocus }) => {
    console.log('autofocus', autofocus);
    return (
        <div className={styles.inputContainer}>
            <input
                autoComplete="off"
                className={styles.input}
                id={id}
                type="text"
                placeholder={placeholder}
                autoFocus={autofocus}
            />
            <button className={styles.button} onClick={onClick}>
                Enviar
            </button>
        </div>
    );
};

export default Input;
