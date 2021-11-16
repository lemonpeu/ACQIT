import { useState, useEffect } from "react";
import styles from "./footer.module.scss";
import React from "react";
import Image from "../../common/Image/Image";
import BoxUserName from "../../common/boxusername/boxusername";

import { inicio } from "@/locales/es/inicio";
import { home } from "@/locales/en/home";

const FooterDesktop = ({ style, name, autofocus, isEsp }) => {
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
    <div className={styles.wrapper}>
      <BoxUserName
        boxUserName
        name={name}
        autofocus={autofocus}
        isEsp={isEsp}
      />
      <footer
        className={`${styles.containerDesktop} ${styles.container}`}
        style={style}
        id="footer"
      >
        <section className={styles.logoContainer}>
          <div className={styles.imgContainer}>
            <Image
              width={280}
              height={70}
              src="/images/icons/SVG/logo.svg"
              alt="logo"
            />
          </div>
        </section>
        <div className={styles.footerInfoContainer}>
          <ul className={styles.footerList}>
            <p className={styles.contactTitle}>{language.footer.contact}</p>
            <li className={styles.listItem}>
              <Image
                width={30}
                height={30}
                src="/images/icons/SVG/teliconblack.svg"
                alt="telefono"
              />
              <a href="tel:5491139844968">(11) 3984-4968</a>
            </li>
            <li className={styles.listItem}>
              <Image
                width={30}
                height={30}
                src="/images/icons/SVG/emailblack.svg"
                alt="email"
              />
              <a href="mailto:info@acqit.com.ar">info@acqit.com.ar</a>
            </li>
            <li className={styles.listItem}>
              <Image
                width={30}
                height={30}
                src="/images/icons/SVG/placeicon.svg"
                alt="place"
              />
              <a
                href="https://goo.gl/maps/nUsXBVnkfPPpEKfNA"
                rel="noreferrer"
                target="_blank"
              >
                Arcos 2836
              </a>
            </li>
          </ul>
          <ul className={styles.socialList}>
            <li className={styles.socialitem}>
              <a
                href="https://www.linkedin.com/company/acqit/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={35}
                  height={35}
                  src="/images/icons/SVG/linkedinblack.svg"
                  alt="linkedin"
                />
              </a>
            </li>
            <li className={styles.socialitem}>
              <a
                href=" https://www.instagram.com/acqit/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  width={35}
                  height={35}
                  src="/images/icons/SVG/instagramblack.svg"
                  alt="instagram"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.line}></div>
        <p className={styles.footerText}>{language.footer.text}</p>
        <a href="#top">
          <div className={styles.goToTop}>
            <Image
              layout="fixed"
              width={20}
              height={100}
              src="/images/icons/SVG/flecha.svg"
              alt="go to top"
            />
            <p style={{ textAlign: "center" }}>
              Go to <span style={{ fontWeight: "bold" }}>the top</span>
            </p>
          </div>
        </a>
      </footer>
    </div>
  );
};

export default FooterDesktop;
