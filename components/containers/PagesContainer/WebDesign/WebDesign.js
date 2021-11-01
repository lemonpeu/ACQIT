import { useState, useEffect, useCallback } from "react";
import BoxUserName from "@/components/common/boxusername/boxusername";
import Footer from "@/components/sections/footer/footer";
import styles from "./WebDesign.module.scss";
import FooterDesktop from "@/components/sections/footer/footerdesktop";
import NavMobile from "@/components/sections/nav/navmobile";
import NavDesktop from "@/components/sections/nav/navdesktop";
import { useMediaQuery } from "@/components/utils/mediaquery";
import ButtonNav from "@/components/common/buttonNav/buttonNav";
import Modal from "@/components/common/Modal/modal";
import Image from "@/components/common/Image/Image";
import Whatsapp from "@/components/common/whatsapp/whatsapp";
import useWindowSize from "@/components/utils/windowSice";
import { useScrollDown } from "@/components/utils/isScrollDown";

const WebDesignContainer = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [userName, setUserName] = useState("");
  let isFooterMobile = useMediaQuery("(min-width: 1000px)");
  let isNavDesktop = useMediaQuery("(min-width: 900px)");
  const scrollY = useScrollDown();

  const size = useWindowSize();

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
    <>
      {isModalVisible ? (
        <Modal onClick={(e) => modalConfig(e)} onClose={() => modalConfig()} />
      ) : (
        <>
          <div id="top" className={styles.wrapper + " " + "main"}>
            <Whatsapp />
            {isModalVisible && <Modal onClick={(e) => modalConfig(e)} />}
            {isNavDesktop ? (
              <NavDesktop showSubNav isScrollDown={scrollY} />
            ) : (
              isNavVisible && (
                <NavMobile onClick={() => setIsNavVisible(false)} />
              )
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
                <h1 className={styles.title}>Diseño web</h1>
                <p className={styles.description}>
                  ACQit crea sitios web enfatizando el desarrollo y diseño para
                  así obtener un producto acorde a la excelencia que demandan
                  nuestros clientes.
                </p>
                <p className={styles.description}>
                  En nuestro equipo aplicamos nuestra experiencia y
                  conocimientos al momento de construir soluciones sólidas
                  orientadas a cada mercado, creando sitios profesionales que
                  logren proyectar confianza apoyándonos en un diseño atractivo
                  y minimalista.
                </p>
                <div>
                  <h4 className={styles.aclaration}>
                    Desarrollamos sitios innovadores, funcionales y atractivos
                    enfocados en las necesidades del cliente.
                  </h4>
                </div>
                <div className="boxSection">
                  <div
                    className={`${styles.boxUserNameAnimation} boxUserNameAnimation`}
                  >
                    <BoxUserName
                      icon
                      img={"/images/icons/SVG/pcicon.svg"}
                      text={"Diseño web para desktop (para computadoras)"}
                    ></BoxUserName>
                  </div>
                  <div
                    className={`${styles.boxUserNameAnimation} boxUserNameAnimation`}
                  >
                    <BoxUserName
                      icon
                      img={"/images/icons/SVG/celphoneicon.svg"}
                      text={"Diseño web responsive (para celulares y tablets)"}
                    />
                  </div>
                </div>
              </div>
            </section>
            {isFooterMobile ? (
              <FooterDesktop name={localStorage.getItem("name") || userName} />
            ) : (
              <Footer name={localStorage.getItem("name") || userName} />
            )}
          </div>
        </>
      )}
    </>
  );
};

export default WebDesignContainer;
