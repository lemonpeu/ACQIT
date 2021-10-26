//LineContainer.js
import styles from "./LineContainer.module.scss";
import IsVisible from "../../utils/isVisible";

const LineContainer = ({ style }) => {
  return (
    <div className={styles.listContainer} style={style}>
      <div className={styles.contentlist + " " + "textContainerAnimation"}>
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
