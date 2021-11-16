//LineContainer.js
import { useState, useEffect } from "react";
import { inicio } from "@/locales/es/inicio";
import { home } from "@/locales/en/home";

import styles from "./LineContainer.module.scss";

const LineContainer = ({ style, isVisible, isEsp }) => {
  const [language, setLanguage] = useState(inicio);

  useEffect(() => {
    let userLang = navigator.language || navigator.userLanguage;
    let firstLetters = userLang.slice(0, 2);
    let localStorageElement = localStorage.getItem("language");
    if (localStorageElement === "true" || firstLetters === "es") {
      setLanguage(inicio);
    } else if (localStorageElement === "false" || firstLetters === "en") {
      setLanguage(home);
    } else {
      setLanguage(home);
    }
  }, [isEsp]);

  return (
    <div className={styles.listContainer} style={style}>
      <div
        className={`${styles.contentlist} ${
          isVisible ? "textContainerAnimation" : ""
        }`}
      >
        <div className={styles.parraphList}>
          <p className={styles.principalText}>
            {language.descriptionProduct.title1}
          </p>
          <p className={styles.secundary}>
            {language.descriptionProduct.description1}
          </p>
        </div>
        <div className={styles.parraphList}>
          <p className={styles.principalText}>
            {language.descriptionProduct.title2}
          </p>
          <p className={styles.secundary}>
            {language.descriptionProduct.description2}
          </p>
        </div>
        <div className={styles.parraphList}>
          <p className={styles.principalText}>
            {language.descriptionProduct.title3}
          </p>
          <p className={styles.secundary}>
            {language.descriptionProduct.description3}
          </p>
        </div>
        <div className={styles.parraphList}>
          <p className={styles.principalText}>
            {language.descriptionProduct.title4}
          </p>
          <p className={styles.secundary}>
            {language.descriptionProduct.description4}
          </p>
        </div>
        <div className={styles.parraphList}>
          <p className={styles.principalText}>
            {language.descriptionProduct.title5}
          </p>
          <p className={styles.secundary}>
            {language.descriptionProduct.description5}
          </p>
        </div>
        <div className={styles.parraphList}>
          <p className={styles.principalText}>
            {language.descriptionProduct.title6}
          </p>
          <p className={styles.secundary}>
            {language.descriptionProduct.description6}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LineContainer;
