import styles from "./boxusername.module.scss";
import Image from "../Image/Image";
import ContactForm from "../../sections/ContactForm/ContactForm";

import { inicio } from "@/locales/es/inicio";
import { home } from "@/locales/en/home";

import { useState, useEffect } from "react";

const BoxUserName = (props) => {
  const { icon, name, img, alt, text, boxUserName, autofocus, isEsp } = props;

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
    <section
      className={`${
        boxUserName ? styles.boxUserNameStyle : styles.boxIconText
      } ${styles.containerBox}`}
    >
      <div className={styles.container}>
        {icon && (
          <Image
            width={110}
            height={110}
            layout="fixed"
            className={styles.iconContainer}
            src={img}
            alt={alt}
          />
        )}
        {boxUserName ? (
          <div className={styles.welcomeContainer} id="contact">
            <p className={styles.text}>
              {language.form.greet}&nbsp;{name}
            </p>
            <div className={styles.desktopVersion}>
              <p className={styles.text}>{language.form.label}</p>
              <label htmlFor="email" className={styles.text}>
                {language.form.labelEmail}
              </label>
              <ContactForm autofocus={autofocus} send={language.form.send} />
            </div>
          </div>
        ) : (
          <p className={styles.text}>{text}</p>
        )}
      </div>
    </section>
  );
};

export default BoxUserName;
