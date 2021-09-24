//LineContainer.js
import styles from "./LineContainer.module.scss";

const LineContainer = ({ style, isModalVisible, ref }) => {
  return (
    <div
      className={
        !isModalVisible && styles.listContainer + " " + "textContainerAnimation"
      }
      style={style}
      ref={ref}
    >
      <div
        className={
          !isModalVisible && styles.contentlist + " " + "lineContainerAnimation"
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
