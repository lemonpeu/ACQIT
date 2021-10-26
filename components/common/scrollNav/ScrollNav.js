import styles from "./ScrollNav.module.scss";
import a from "next/link";

const ScrollNav = ({ isVisible1, isVisible2, isVisible3 }) => {
  const showNavDot = () => {
    if (isVisible1) {
      return { isVisible1: true, isVisible2: false, isVisible3: false };
    } else if (isVisible2) {
      return { isVisible1: false, isVisible2: true, isVisible3: false };
    } else if (isVisible3) {
      return { isVisible1: false, isVisible2: false, isVisible3: true };
    } else {
      return { isVisible1: false, isVisible2: false, isVisible3: false };
    }
  };

  return (
    <div className={styles.scrollNav}>
      <div className={styles.line1}></div>
      <div className={styles.dots}>
        <a href="#firstSection">
          <div
            id="link1"
            className={showNavDot().isVisible1 && styles.dot}
          ></div>
        </a>
        <a href="#servicios">
          <div
            id="link2"
            className={showNavDot().isVisible2 && styles.dot}
          ></div>
        </a>
        <a href="#thirdSection">
          <div
            id="link3"
            className={showNavDot().isVisible3 && styles.dot}
          ></div>
        </a>
      </div>
      <div className={styles.line2}></div>
    </div>
  );
};

export default ScrollNav;
