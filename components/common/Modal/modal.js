//Modal
import { useState } from 'react';
import styles from './modal.module.scss';

const Modal = ({ onClick, onClose }) => {
    const [userName, setUserName] = useState('');

    return (
        <section className={styles.modalContainer}>
            <div className={styles.blurredContainer}></div>
            <div className={styles.modalMessageWrapper}>
                <p className={styles.helloText}>Hola!</p>
                <label htmlFor="name">Cual es tu nombre?</label>
                <input
                    id="name"
                    type="text"
                    value={userName}
                    onChange={(e) => setUserName(e.target.value)}
                    placeholder="Nombre"
                />
                <button className={styles.btnConfirm} onClick={(e) => onClick(userName)}>
                    Confirmar
                </button>
                <button className={styles.btnSkip} onClick={() => onClose()}>
                    Saltar
                </button>
            </div>
        </section>
    );
};

export default Modal;
