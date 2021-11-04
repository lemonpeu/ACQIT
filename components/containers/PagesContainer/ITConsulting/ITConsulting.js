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

const ITConsultingContainer = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [userName, setUserName] = useState("");
  const scrollY = useScrollDown();
  let isFooterMobile = useMediaQuery("(min-width: 1000px)");
  let isNavDesktop = useMediaQuery("(min-width: 900px)");
  const [isLoading, setIsLoading] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  const iconsConsultancy = [
    {
      id: 1,
      icon: "/images/icons/SVG/supporticon.svg",
      text: "Soporte",
    },
    {
      id: 2,
      icon: "/images/icons/SVG/ejecucionicon.svg",
      text: "Ejecución",
    },
    {
      id: 3,
      icon: "/images/icons/SVG/controlicon.svg",
      text: "Controles monitoreo",
    },
    {
      id: 4,
      icon: "/images/icons/SVG/trabajoremoto.svg",
      text: "Trabajo remoto",
    },
    {
      id: 5,
      icon: "/images/icons/SVG/configuracionicon.svg",
      text: "Configuración",
    },
    {
      id: 6,
      icon: "/images/icons/SVG/asesoramientoicon.svg",
      text: "Asesoramiento",
    },
    {
      id: 7,
      icon: "/images/icons/SVG/integracionicon.svg",
      text: "Integración de los sistemas",
    },
    {
      id: 8,
      icon: "/images/icons/SVG/reducciondetiempos.svg",
      text: "Reducción de tiempos",
    },
    {
      id: 9,
      icon: "/images/icons/SVG/riesgosicon.svg",
      text: "Reducción de riesgos",
    },
    {
      id: 10,
      icon: "/images/icons/SVG/innovacionicon.svg",
      text: "Innovación",
    },
    {
      id: 11,
      icon: "/images/icons/SVG/equipamientoicon.svg",
      text: "Equipamiento",
    },
    {
      id: 12,
      icon: "/images/icons/SVG/lupa.svg",
      text: "Análisis",
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
        />
      ) : (
        isNavVisible && (
          <NavMobile
            onClick={() => setIsNavVisible(false)}
            isFocused={(e) => setIsFocused(e)}
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
            <h1 className={styles.title}>Consultoria IT</h1>
            <p className={styles.description}>
              ACQ it cuenta con un equipo especializado enfocado en la
              administración, configuración e integración de tus ambientes.
              Desarrollamos esquemas de trabajo que se ajusten a las necesidades
              de cada compañía
            </p>
            <p className={styles.description}>
              Analizamos, ejecutamos y controlamos el accionar de tus sistemas,
              llevando un registro del equipamiento colocando especial atención
              a la performance, la reducción de riesgos y los tiempos de
              respuesta.
            </p>
            <p className={styles.description}>
              Definimos y gestionamos un plan de actualizaciones en base a
              tecnologías y metodologías ágiles.
            </p>
            <h4 className={styles.aclaration}>
              Nuestra atención en los detalles facilita las decisiones al
              cliente.
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
