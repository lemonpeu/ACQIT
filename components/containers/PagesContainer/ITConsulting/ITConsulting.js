import React, { useState, useEffect } from "react";
import Footer from "@/components/sections/footer/footer";
import styles from "./ITConsulting.module.scss";
import IconConsultancy from "@/components/common/iconConsultancy/iconConsultancy";
import Whatsapp from "@/components/common/whatsapp/whatsapp";
import FooterDesktop from "@/components/sections/footer/footerdesktop";
import { useMediaQuery } from "@/components/utils/mediaquery";
import NavMobile from "@/components/sections/nav/navmobile";
import NavDesktop from "@/components/sections/nav/navdesktop";
import ButtonNav from "@/components/common/buttonNav/buttonNav";
import Image from "@/components/common/Image/Image";
import Modal from "@/components/common/Modal/modal";
import { useScrollDown } from "@/components/utils/isScrollDown";

import { inicio } from "@/locales/es/inicio";
import { home } from "@/locales/en/home";

const ITConsultingContainer = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [userName, setUserName] = useState("");
  const scrollY = useScrollDown();
  let isFooterMobile = useMediaQuery("(min-width: 1000px)");
  let isNavDesktop = useMediaQuery("(min-width: 900px)");
  const [isLoading, setIsLoading] = useState(true);
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

  const iconsConsultancy = [
    {
      id: 1,
      icon: "/images/icons/SVG/supporticon.svg",
      text: language.itConsulting.icons.support,
    },
    {
      id: 2,
      icon: "/images/icons/SVG/ejecucionicon.svg",
      text: language.itConsulting.icons.execution,
    },
    {
      id: 3,
      icon: "/images/icons/SVG/controlicon.svg",
      text: language.itConsulting.icons.monitoring,
    },
    {
      id: 4,
      icon: "/images/icons/SVG/trabajoremoto.svg",
      text: language.itConsulting.icons.remote,
    },
    {
      id: 5,
      icon: "/images/icons/SVG/configuracionicon.svg",
      text: language.itConsulting.icons.settings,
    },
    {
      id: 6,
      icon: "/images/icons/SVG/asesoramientoicon.svg",
      text: language.itConsulting.icons.supervision,
    },
    {
      id: 7,
      icon: "/images/icons/SVG/integracionicon.svg",
      text: language.itConsulting.icons.system,
    },
    {
      id: 8,
      icon: "/images/icons/SVG/reducciondetiempos.svg",
      text: language.itConsulting.icons.time,
    },
    {
      id: 9,
      icon: "/images/icons/SVG/riesgosicon.svg",
      text: language.itConsulting.icons.risk,
    },
    {
      id: 10,
      icon: "/images/icons/SVG/innovacionicon.svg",
      text: language.itConsulting.icons.innovation,
    },
    {
      id: 11,
      icon: "/images/icons/SVG/equipamientoicon.svg",
      text: language.itConsulting.icons.hardware,
    },
    {
      id: 12,
      icon: "/images/icons/SVG/lupa.svg",
      text: language.itConsulting.icons.analize,
    },
  ];

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
      <div>
        <div className={styles.background}></div>
        <section className={styles.main}>
          {!isNavDesktop && (
            <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />
          )}
          <div className={styles.contentContainer} id="top">
            <h1 className={styles.title}>{language.itConsulting.title}</h1>
            <p className={styles.description}>
              {language.itConsulting.parraph_1}
            </p>
            <p className={styles.description}>
              {language.itConsulting.parraph_2}
            </p>
            <h4 className={styles.aclaration}>
              {language.itConsulting.aclaration}
            </h4>
            <div
              className={
                styles.iconsContainer + " " + "iconsContainerAnimation"
              }
            >
              {iconsConsultancy.map((item, index) => (
                <IconConsultancy
                  key={index}
                  src={item.icon}
                  alt={item.text}
                  text={item.text}
                />
              ))}
            </div>
            <Whatsapp />
          </div>
        </section>
        {isFooterMobile ? (
          <FooterDesktop
            style={{ zIndex: 5 }}
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
    </div>
  );
};

export default ITConsultingContainer;
