import styles from "./NosotrosText.module.scss";
import { useState, useEffect } from "react";

import { inicio } from "@/locales/es/inicio";
import { home } from "@/locales/en/home";

const NosotrosText = ({
  text1,
  text2,
  text3,
  showText1,
  showText2,
  showText3,
  isEsp,
}) => {
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

  const renderText = () => {
    if (text1) {
      return (
        <div
          className={`${styles.textContainer} ${
            showText1 ? "textNosotros first" : ""
          }`}
        >
          <p className={styles.description}>
            {language.us.parraph_1_a}&nbsp;
            <span style={{ color: "#0885e6" }}>{language.us.parraph_1_b}</span>.
          </p>
          <p className={styles.description}>{language.us.parraph_1_c}</p>
        </div>
      );
    } else if (text2) {
      return (
        <div className={`${styles.textContainer} ${showText2 ? "third" : ""}`}>
          <p className={styles.description}>
            <span style={{ color: "#0885e6" }}>
              {language.us.parraph_2_a}&nbsp;
            </span>
            {language.us.parraph_2_b}
          </p>
          <p className={styles.description}>{language.us.parraph_2_c}</p>
        </div>
      );
    } else if (text3) {
      return (
        <div
          className={`${styles.textContainer} ${
            showText3 ? "third first" : ""
          }`}
        >
          <p className={styles.description}>
            {language.us.parraph_3_a}&nbsp;
            <span style={{ color: "#0885e6" }}>
              {language.us.parraph_3_b}&nbsp;
            </span>
            {language.us.parraph_3_c}
          </p>
          <p className={styles.description}>{language.us.parraph_3_d}</p>
        </div>
      );
    }
  };

  return <>{renderText()}</>;
};

export default NosotrosText;
