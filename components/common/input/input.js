import React from 'react'
import styles from './input.module.scss'

const Input = ({placeholder, id, onClick}) => {
    return (
        <div className={styles.inputContainer}>
            <input className={styles.input} id={id} type="text" placeholder={placeholder}/>
            <button className={styles.button} onClick={onClick}>Enviar</button>
        </div>
    )
};

export default Input;