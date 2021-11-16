import { useState, useEffect } from "react";
import BoxUserName from "@/components/common/boxusername/boxusername";
import Footer from "@/components/sections/footer/footer";
import styles from "./WebDesign.module.scss";
import FooterDesktop from "@/components/sections/footer/footerdesktop";
import NavMobile from "@/components/sections/nav/navmobile";
import NavDesktop from "@/components/sections/nav/navdesktop";
import { useMediaQuery } from "@/components/utils/mediaquery";
import ButtonNav from "@/components/common/buttonNav/buttonNav";
import Modal from "@/components/common/Modal/modal";
import Whatsapp from "@/components/common/whatsapp/whatsapp";
import useWindowSize from "@/components/utils/windowSice";
import { useScrollDown } from "@/components/utils/isScrollDown";

import { inicio } from "@/locales/es/inicio";
import { home } from "@/locales/en/home";

const WebDesignContainer = () => {
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

  const setLoadingBoolean = () => {
    localStorage.setItem("loading", false);
    setIsLoading(false);
  };

  useEffect(() => {
    if (localStorage.getItem("loading")) {
      setIsLoading(false);
    } else {
      setTimeout(setLoadingBoolean, 5000);
    }
  }, [isLoading]);

  return (
    <div id="top" className={styles.wrapper + " " + "main"}>
      <Whatsapp />
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
      {isModalVisible && (
        <Modal onClick={(e) => modalConfig(e)} onClose={() => modalConfig()} />
      )}
      <section className={styles.main}>
        {!isNavDesktop && (
          <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />
        )}
        <div
          className={styles.contentContainer}
          style={{
            height: `${isNavDesktop ? size.height + "px" : "100%"}`,
          }}
        >
          <h1 className={styles.title}>{language.webDesign.title}</h1>
          <p className={styles.description}>{language.webDesign.parraph_1}</p>
          <p className={styles.description}>{language.webDesign.parraph_2}</p>
          <div>
            <h4 className={styles.aclaration}>
              {language.webDesign.aclaration}
            </h4>
          </div>
          <div className="boxSection">
            <div
              className={`${styles.boxUserNameAnimation} boxUserNameAnimation`}
            >
              <BoxUserName
                icon
                img={"/images/icons/SVG/pcicon.svg"}
                text={language.webDesign.box1}
              ></BoxUserName>
            </div>
            <div
              className={`${styles.boxUserNameAnimation} boxUserNameAnimation`}
            >
              <BoxUserName
                icon
                img={"/images/icons/SVG/celphoneicon.svg"}
                text={language.webDesign.box2}
              />
            </div>
          </div>
        </div>
      </section>
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

export default WebDesignContainer;
