import styles from "./mobileGraphicService.module.scss";
import React from "react";
import ServiceIcon from "../serviceIcon/serviceIcon";
import Link from "next/link";
import { useState, useEffect } from "react";

import { inicio } from "@/locales/es/inicio";
import { home } from "@/locales/en/home";

const MobileGraphicServices = ({ isModalVisible, isEsp }) => {
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
    <div className={styles.graphContainer}>
      <div style={{ overflow: "hidden" }}>
        <div
          className={`${styles.textContainerAnimation}  ${
            !isModalVisible ? "equipamentoContainerAnimation" : ""
          }`}
        >
          <div className={styles.firstSection}>
            <div className={styles.servicesItemContainer}>
              <ServiceIcon name="equipamiento" width={100} height={80} />
              <div className={styles.descriptionContainer}>
                <Link href="/equipamiento" passHref>
                  <p className={styles.titleDescription}>
                    01 | {language.services.hardware}{" "}
                    <span className={styles.seeMore}>ver +</span>
                  </p>
                </Link>
                <p className={styles.graphDescription}>
                  {language.services.hardwareDescription}
                </p>
              </div>
            </div>
            <div className={styles.servicesItemContainer}>
              <ServiceIcon name="icon2" width={100} height={80} />
              <div className={styles.descriptionContainer}>
                <Link href="/consultoria" passHref>
                  <p className={styles.titleDescription}>
                    02 | {language.services.itConsulting}{" "}
                    <span className={styles.seeMore}>ver +</span>
                  </p>
                </Link>

                <p className={styles.graphDescription}>
                  {language.services.itConsultingDescription}
                </p>
              </div>
            </div>
          </div>
          <div
            className={`${styles.secondSection}  ${
              !isModalVisible ? "equipamentoContainerSecond" : ""
            }`}
          >
            <div className={styles.servicesItemContainer}>
              <ServiceIcon name="icon" width={100} height={80} />
              <div className={styles.descriptionContainer}>
                <Link href="/seguridadit" passHref>
                  <p className={styles.titleDescription}>
                    03 | {language.services.itSecurity}{" "}
                    <span className={styles.seeMore}>ver +</span>
                  </p>
                </Link>

                <p className={styles.graphDescription}>
                  {language.services.itSecurityDescription}
                </p>
              </div>
            </div>
            {/* <div className={styles.servicesItemContainer}>
              <ServiceIcon name="computer" width={100} height={80} />
              <div className={styles.descriptionContainer}>
                <Link href="/disenio" passHref>
                  <p className={styles.titleDescription}>
                    04 | {language.services.webDesign}{" "}
                    <span className={styles.seeMore}>ver +</span>
                  </p>
                </Link>

                <p className={styles.graphDescription}>
                  P{language.services.webDesignDescription}
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileGraphicServices;
