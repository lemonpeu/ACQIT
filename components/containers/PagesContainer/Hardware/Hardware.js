import { useState, useEffect } from "react";
import Footer from "@/components/sections/footer/footer";
import Companies from "@/components/common/companies/companies";
import styles from "./Hardware.module.scss";
import Whatsapp from "@/components/common/whatsapp/whatsapp";
import FooterDesktop from "@/components/sections/footer/footerdesktop";
import { useMediaQuery } from "@/components/utils/mediaquery";
import NavMobile from "@/components/sections/nav/navmobile";
import NavDesktop from "@/components/sections/nav/navdesktop";
import ButtonNav from "@/components/common/buttonNav/buttonNav";
import Modal from "@/components/common/Modal/modal";
import Image from "@/components/common/Image/Image";
import { useScrollDown } from "@/components/utils/isScrollDown";

import { inicio } from "@/locales/es/inicio";
import { home } from "@/locales/en/home";

const HardwareContainer = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);

  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");
  let isFooterMobile = useMediaQuery("(min-width: 1000px)");
  let isNavDesktop = useMediaQuery("(min-width: 900px)");
  const scrollY = useScrollDown();
  const [isFocused, setIsFocused] = useState(false);

  const [isEsp, setIsEsp] = useState(true);
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

  const modalConfig = (e) => {
    setIsModalVisible(false);
    if (e) {
      setUserName(e);
      localStorage.setItem("name", e);
    }
    localStorage.setItem("isModal", false);
    localStorage.setItem("name", "");
  };

  useEffect(() => {
    if (localStorage.getItem("isModal")) {
      setIsModalVisible(false);
    } else {
      setIsModalVisible(true);
    }
  }, [isModalVisible]);

  useEffect(() => {
    if (localStorage.getItem("loading")) {
      setIsLoading(false);
    } else {
      setTimeout(setLoadingBoolean, 5000);
    }
  }, [isLoading]);

  const setLoadingBoolean = () => {
    localStorage.setItem("loading", false);
    setIsLoading(false);
  };

  return (
    <div className={styles.wrapper + " " + "main"}>
      {isModalVisible && <Modal onClick={(e) => modalConfig(e)} />}
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
      <div className={styles.main}>
        {!isNavDesktop && (
          <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />
        )}

        <section className={styles.contentContainer} id="top">
          <h1 className={styles.title}>{language.hardware.title}</h1>
          <p>
            {language.hardware.parraph_1}
            <br></br>
            {language.hardware.parraph_2}
          </p>
          <h4 className={styles.aclaration}>{language.hardware.aclaration}</h4>
          <div className={styles.companiesContainer}>
            <h6 className={styles.partnerTitle + " " + "animation-title"}>
              <span
                style={{
                  zIndex: 20,
                  position: "absolute",
                  height: "100%",
                }}
              >
                {language.hardware.companiesTitle}
              </span>
            </h6>
            <Companies />
          </div>

          <Whatsapp />
        </section>
      </div>
      {isFooterMobile ? (
        <FooterDesktop
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

export default HardwareContainer;
