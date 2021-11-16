import { useState, useEffect, useRef } from "react";
import Link from "next/link";

//Utils
import IsVisible from "../../utils/isVisible";
import { inicio } from "@/locales/es/inicio";
import { home } from "@/locales/en/home";

//Components
import ServicesGraphic from "../../common/servicesGraphic/servicesGraphic";
import MobileGraphicServices from "../../common/mobileGraphicService/mobileGraphicService";

//Styles
import styles from "./ServicesHome.module.scss";
import PlusIcon from "../../../public/images/icons/home/SVG/plusicon";

const ServicesHome = ({
  isPage1200,
  is2rdSectionVisible,
  isVisible,
  isEsp,
}) => {
  const [setRef, visible] = IsVisible({ threshold: 0.2 });
  const [isAnimation, setIsAnimation] = useState(false);
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

  useEffect(() => {
    if (visible) {
      setIsAnimation(true);
      is2rdSectionVisible(isAnimation);
    }
  }, [is2rdSectionVisible, visible, isAnimation]);

  return (
    <div className={styles.servicesWrapper} ref={setRef} id="servicios">
      <div className={styles.services}>
        <div className={styles.informationWrapper}>
          <div className={styles.titlesContainer}>
            <div
              className={`${styles.categoriesTitleAnimation} ${
                isVisible ? "categories-title-animation" : ""
              }`}
            >
              <h4 className={styles.title}>{language.services.title}</h4>
            </div>
            <h6
              className={`${styles.titleGraphic} ${
                isVisible ? "animation-title" : ""
              }`}
            >
              <span
                style={{ zIndex: 20, position: "absolute", height: "100%" }}
              >
                {language.services.subTitle}
              </span>
            </h6>
          </div>
          {isPage1200 && (
            <button
              className={`${styles.plusIconContainer} ${
                isVisible ? "button-graphic-animation" : ""
              }`}
            >
              <PlusIcon
                line={
                  "M28.77 20.67H21v7.84h-1.6v-7.84h-7.78v-1.58h7.78v-7.73H21v7.73h7.78z"
                }
              />
            </button>
          )}
        </div>

        {isPage1200 ? (
          <ServicesGraphic isVisible={isVisible} isEsp={isEsp} />
        ) : (
          <MobileGraphicServices isModalVisible={isVisible} isEsp={isEsp} />
        )}
      </div>
    </div>
  );
};

export default ServicesHome;
