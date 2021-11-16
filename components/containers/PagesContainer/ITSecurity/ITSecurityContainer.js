import React, { useState, useEffect } from "react";
import styles from "./ITSecurity.module.scss";
import Whatsapp from "@/components/common/whatsapp/whatsapp";
import Footer from "@/components/sections/footer/footer";
import FooterDesktop from "@/components/sections/footer/footerdesktop";
import { useMediaQuery } from "@/components/utils/mediaquery";
import NavMobile from "@/components/sections/nav/navmobile";
import NavDesktop from "@/components/sections/nav/navdesktop";
import ButtonNav from "@/components/common/buttonNav/buttonNav";
import Modal from "@/components/common/Modal/modal";
import ResultIcon from "../../../../public/images/icons/seguridadit/SVG/resulticon";
import GestionamosIcon from "../../../../public/images/icons/seguridadit/SVG/gestionamosicon";
import LupaIcon from "../../../../public/images/icons/seguridadit/SVG/lupaicon";
import useWindowSize from "@/components/utils/windowSice";
import { useScrollDown } from "@/components/utils/isScrollDown";

import { inicio } from "@/locales/es/inicio";
import { home } from "@/locales/en/home";

const ITSecurityContainer = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [userName, setUserName] = useState("");
  const scrollY = useScrollDown();
  const [isFocused, setIsFocused] = useState(false);

  const [isEsp, setIsEsp] = useState(true);
  const [language, setLanguage] = useState(inicio);

  let isFooterMobile = useMediaQuery("(min-width: 1000px)");
  let isNavDesktop = useMediaQuery("(min-width: 900px)");
  const size = useWindowSize();

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

  useEffect(() => {
    if (localStorage.getItem("isModal")) {
      setIsModalVisible(false);
    } else {
      setIsModalVisible(true);
    }
  }, [isModalVisible]);

  useEffect(() => {
    if (localStorage.getItem("isModal")) {
      setIsModalVisible(false);
    } else {
      setIsModalVisible(true);
    }
  }, []);

  const modalConfig = (e) => {
    setIsModalVisible(false);
    if (e) {
      setUserName(e);
      localStorage.setItem("name", e);
    }
    localStorage.setItem("isModal", false);
    localStorage.setItem("name", "");
  };

  return (
    <div className={styles.wrapper + " " + "main"}>
      {isModalVisible && (
        <Modal onClick={(e) => modalConfig(e)} onClose={() => modalConfig()} />
      )}

      {isNavDesktop ? (
        <NavDesktop
          showSubNav
          isScrollDown={scrollY}
          isFocused={(e) => setIsFocused(e)}
          setEspLanguage={(e) => setIsEsp(e)}
        />
      ) : (
        isNavVisible && (
          <NavMobile
            onClick={() => setIsNavVisible(false)}
            isFocused={(e) => setIsFocused(e)}
            setEspLanguage={(e) => setIsEsp(e)}
          />
        )
      )}
      <section className={styles.main}>
        {!isNavDesktop && (
          <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />
        )}
        <div
          className={styles.contentContainer}
          style={{ minHeight: size.height + "px" }}
          id="top"
        >
          <h1 className={styles.title}>{language.itSecurity.title}</h1>
          <p className={styles.description}>{language.itSecurity.parraph_1}</p>
          <h4 className={styles.aclaration}>
            {language.itSecurity.aclaration}
          </h4>
          <div className={styles.graphicContainer}>
            <div className={styles.graphic}>
              <div className={styles.iconText + " " + "iconTextAnimation"}>
                <p
                  className={styles.graphicText + " " + "securityTextAnimation"}
                >
                  Analizamos
                </p>
                <LupaIcon />
              </div>
              <div className={styles.iconText + " " + "iconTextAnimation"}>
                <p
                  className={styles.graphicText + " " + "securityTextAnimation"}
                >
                  Gestionamos
                </p>
                <GestionamosIcon />
              </div>
              <div className={styles.iconText + " " + "iconTextAnimation"}>
                <p
                  className={styles.graphicText + " " + "securityTextAnimation"}
                >
                  Optimizamos
                </p>
                <ResultIcon />
              </div>
            </div>
          </div>
          <Whatsapp />
        </div>
      </section>
      {isFooterMobile ? (
        <FooterDesktop
          style={{ zIndex: 0 }}
          name={localStorage.getItem("name") || userName}
          autofocus={isFocused}
          isEsp={isEsp}
        />
      ) : (
        <Footer
          name={localStorage.getItem("name") || userName}
          autofocus={isFocused}
        />
      )}
    </div>
  );
};

export default ITSecurityContainer;
