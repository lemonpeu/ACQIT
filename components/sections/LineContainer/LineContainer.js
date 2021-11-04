//LineContainer.js
import { useState, useEffect } from "react";
import styles from "./LineContainer.module.scss";

const LineContainer = ({ style, isVisible }) => {
  return (
    <div className={styles.listContainer} style={style}>
      <div
        className={`${styles.contentlist} ${
          isVisible ? "textContainerAnimation" : ""
        }`}
      >
        <div className={styles.parraphList}>
          <p className={styles.principalText}>Escuchamos</p>
          <p className={styles.secundary}>al cliente.</p>
        </div>
        <div className={styles.parraphList}>
          <p className={styles.principalText}>Entendemos</p>
          <p className={styles.secundary}>el problema.</p>
        </div>
        <div className={styles.parraphList}>
          <p className={styles.principalText}>Diseñamos</p>
          <p className={styles.secundary}>una estrategia.</p>
        </div>
        <div className={styles.parraphList}>
          <p className={styles.principalText}>Ejecutamos</p>
          <p className={styles.secundary}>el plan.</p>
        </div>
        <div className={styles.parraphList}>
          <p className={styles.principalText}>Controlamos</p>
          <p className={styles.secundary}>el resultado.</p>
        </div>
        <div className={styles.parraphList}>
          <p className={styles.principalText}>Optimizamos</p>
          <p className={styles.secundary}>tu compañía.</p>
        </div>
      </div>
    </div>
  );
};

export default LineContainer;
