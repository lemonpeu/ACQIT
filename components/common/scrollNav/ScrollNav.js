import styles from "./ScrollNav.module.scss";

const ScrollNav = ({ isVisible = true }) => {
  return (
    <div className={styles.scrollNav}>
      <div className={styles.line1}></div>
      <div className={styles.dots}>
        <div className={isVisible && styles.dot}></div>
        <div className={isVisible && styles.dot}></div>
        <div className={isVisible && styles.dot}></div>
      </div>
      <div className={styles.line2}></div>
    </div>
  );
};

export default ScrollNav;
