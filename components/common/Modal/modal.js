//Modal
import { useState } from "react";
import { useSpring, animated } from "react-spring";

import styles from "./modal.module.scss";

const Modal = ({ onClick, onClose }) => {
  const [userName, setUserName] = useState("");

  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return (
    <animated.div style={props}>
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
          <button
            className={styles.btnConfirm}
            onClick={(e) => onClick(userName)}
          >
            Confirmar
          </button>
          <button className={styles.btnSkip} onClick={() => onClose()}>
            Saltar
          </button>
        </div>
      </section>
    </animated.div>
  );
};

export default Modal;
