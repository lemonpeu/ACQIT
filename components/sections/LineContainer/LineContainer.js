//LineContainer.js
import styles from "./LineContainer.module.scss";

const LineContainer = ({ style, ref, isVisible }) => {
  return (
    <div className={styles.listContainer} style={style} ref={ref}>
      <div
        className={
          !isVisible && styles.contentlist + " " + "textContainerAnimation"
        }
      >
        <div className={styles.parraphList}>
          <p className={styles.principalText}>Entendemos</p>
          <p className={styles.secundary}>el problema.</p>
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
          <p className={styles.principalText}>Diseñamos</p>
          <p className={styles.secundary}>una solución.</p>
        </div>
        <div className={styles.parraphList}>
          <p className={styles.principalText}>Potenciamos</p>
          <p className={styles.secundary}>tu compañía.</p>
        </div>
      </div>
    </div>
  );
};

export default LineContainer;
