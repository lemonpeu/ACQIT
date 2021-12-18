import React, { useState, useEffect } from "react";
import styles from "./nav.module.scss";
import Image from "../../common/Image/Image";
import Link from "next/link";
import { useScrollDown } from "@/components/utils/isScrollDown";

import { inicio } from "@/locales/es/inicio";
import { home } from "@/locales/en/home";

const NavDesktop = ({ isFocused, goingUp, setEspLanguage, navHome }) => {
  const scrollY = useScrollDown();
  const [isVisible, setIsVisible] = useState(true);
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
    let localStorageElement = localStorage.getItem("language");
    if (localStorageElement === "true" || firstLetters === "es") {
      setLanguage(inicio);
    } else if (localStorageElement === "false" || firstLetters === "en") {
      setLanguage(home);
    } else {
      setLanguage(home);
    }
  }, [isEsp]);

  const number = !navHome && scrollY < 100;

  useEffect(() => {
    if (goingUp || number) {
      return setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  }, [goingUp, number]);

  return (
    <div className={styles.containerDesktop}>
      <button
        className={styles.navBtnPosition}
        onClick={() => setIsVisible(!isVisible)}
        type="button"
      >
        <Image
          width={60}
          height={60}
          layout="fixed"
          className={styles.logo}
          src="/images/icons/SVG/logonav.svg"
          alt="logo. Click to return to home screen"
        />
      </button>
      <nav className={`${styles.nav} ${isVisible ? "navAnimation" : ""}`}>
        {isVisible && (
          <>
            <Link href="/" passHref>
              <Image
                width={120}
                height={20}
                layout="fixed"
                className={styles.logoText}
                src="/images/icons/SVG/logotext.svg"
                alt="logo ACQIT"
              />
            </Link>
            <ul className={styles.list + " " + "navItemsAnimation"}>
              <Link href="/nosotros" passHref>
                <li>{language.nav.us}</li>
              </Link>
              <li className={styles.usItem}>
                <Link
                  href="/#servicios"
                  passHref
                  className={styles.servicesItem}
                >
                  {language.nav.services}
                </Link>
                <ul className={styles.subList}>
                  <Link href="/equipamiento" passHref>
                    <li className={styles.navItem}>{language.nav.hardware}</li>
                  </Link>
                  <Link href="/consultoria" passHref>
                    <li className={styles.navItem}>
                      {language.nav.itConsulting}
                    </li>
                  </Link>
                  <Link href="/seguridadit" passHref>
                    <li className={styles.navItem}>
                      {language.nav.itSecurity}
                    </li>
                  </Link>
                  <Link href="/disenio" passHref>
                    <li className={styles.navItem}>{language.nav.webDesign}</li>
                  </Link>
                </ul>
              </li>
            </ul>
          </>
        )}

        {isVisible && (
          <>
            <div className={styles.listContact + " " + "navItemsAnimation"}>
              <p>(11) 3984-4968</p>
              <a
                href="#email"
                className={styles.contact}
                onClick={() => isFocused(true)}
              >
                {language.nav.contact}
              </a>
              <div style={{ color: "white", marginLeft: "2rem" }}>
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
            </div>
          </>
        )}
      </nav>
    </div>
  );
};

export default NavDesktop;
