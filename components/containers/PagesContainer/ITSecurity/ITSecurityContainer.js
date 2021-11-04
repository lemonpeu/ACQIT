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

const ITSecurityContainer = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [userName, setUserName] = useState("");
  const scrollY = useScrollDown();
  const [isFocused, setIsFocused] = useState(false);

  let isFooterMobile = useMediaQuery("(min-width: 1000px)");
  let isNavDesktop = useMediaQuery("(min-width: 900px)");
  const size = useWindowSize();

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
        />
      ) : (
        isNavVisible && <NavMobile onClick={() => setIsNavVisible(false)} />
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
          <h1 className={styles.title}>Seguridad It</h1>
          <p className={styles.description}>
            ACQit velamos por el cuidado de la organización, sus datos y sus
            empleados proveyendo soluciones para proteger la integridad de los
            ambientes digitales. Nos mantenemos a la vanguardia de las mejores
            prácticas redefiniendo y ajustando las políticas de seguridad de la
            empresa.
          </p>
          <h4 className={styles.aclaration}>
            Analizamos y gestionamos los procesos internos y externos
            garantizando resultados y reduciendo potenciales riesgos
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
        />
      ) : (
        <Footer name={localStorage.getItem("name") || userName} />
      )}
    </div>
  );
};

export default ITSecurityContainer;
