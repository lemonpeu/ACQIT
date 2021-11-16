import React, { useState, useEffect } from "react";
import styles from "./nav.module.scss";
import Image from "../../common/Image/Image";
import Link from "next/link";

import { inicio } from "@/locales/es/inicio";
import { home } from "@/locales/en/home";

const NavMobile = ({ onClick, isFocused, setEspLanguage }) => {
  const [language, setLanguage] = useState(inicio);
  const [isEsp, setIsEsp] = useState(true);

  const setTranslation = (data) => {
    setEspLanguage(data);
    setIsEsp(data);
    localStorage.setItem("language", data);
  };

  useEffect(() => {
    let userLang = navigator.language || navigator.userLanguage;
    let firstLetters = userLang.slice(0, 2);
    if (isEsp || firstLetters === "es") {
      setLanguage(inicio);
    } else if (!isEsp || firstLetters === "en") {
      setLanguage(home);
    } else {
      setLanguage(home);
    }
  }, [isEsp]);

  

  return (
    <div className={styles.containerMobile}>
      <nav className={styles.nav}>
        <div className={styles.imgContainer}>
          <button onClick={onClick}>
            <Image
              width={30}
              height={30}
              layout="fixed"
              className={styles.close}
              src="/images/icons/SVG/close.svg"
              alt=""
            />
          </button>
          <Link href="/" passHref>
            <Image
              width={85}
              height={25}
              layout="fixed"
              className={styles.logoText}
              src="/images/icons/SVG/logotext.svg"
              alt=""
            />
          </Link>
        </div>

        <ul className={styles.list}>
          <Link href="/nosotros" passHref>
            <li className={styles.principalItem}>{language.nav.us}</li>
          </Link>
          <Link href="/#servicios" passHref>
            <li className={styles.principalItem}>{language.nav.services}</li>
          </Link>
          <Link href="/equipamiento" passHref>
            <li className={styles.navItem}>{language.nav.hardware} +</li>
          </Link>
          <Link href="/consultoria" passHref>
            <li className={styles.navItem}>{language.nav.itConsulting} +</li>
          </Link>
          <Link href="/seguridadit" passHref>
            <li className={styles.navItem}>{language.nav.itSecurity} +</li>
          </Link>
          <Link href="/disenio" passHref>
            <li className={styles.navItem}>{language.nav.webDesign} +</li>
          </Link>
          <div
            style={{ color: "white", marginTop: "2rem", marginLeft: "3rem" }}
          >
            <button
              style={{ color: "white" }}
              onClick={() => setTranslation(true)}
            >
              ES
            </button>
            |
            <button
              style={{ color: "white" }}
              onClick={() => setTranslation(false)}
            >
              EN
            </button>
          </div>
        </ul>
        <div className={styles.listContact}>
          <a
            href="#email"
            className={styles.contact}
            onClick={() => isFocused(true)}
          >
            {language.nav.contact}
          </a>
        </div>
      </nav>
    </div>
  );
};

export default NavMobile;
