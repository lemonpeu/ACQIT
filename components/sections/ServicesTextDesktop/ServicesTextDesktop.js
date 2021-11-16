import { useState, useEffect } from "react";
import ServiceText from "../../common/ServiceText/ServiceText";
import styles from "./ServicesTextDesktop.module.scss";
import { inicio } from "@/locales/es/inicio";
import { home } from "@/locales/en/home";

const ServicesTextDesktop = ({ isModalVisible, isEsp }) => {
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

  let textContent = [
    {
      id: 1,
      name: "equipamiento",
      title: language && language.services.hardware,
      text: language && language.services.hardwareDescription,
      link: "/equipamiento",
    },
    {
      id: 2,
      name: "diamond",
      title: language && language.services.itConsulting,
      text: language && language.services.itConsultingDescription,
      link: "/consultoria",
    },
    {
      id: 4,
      name: "computer",
      title: language && language.services.webDesign,
      text: language && language.services.webDesignDescription,
      link: "/disenio",
    },
    {
      id: 3,
      name: "icon",
      title: language && language.services.itSecurity,
      text: language && language.services.itSecurityDescription,
      link: "/seguridadit",
    },
  ];

  return (
    <div
      className={`${styles.textContainerAnimation} ${
        isModalVisible && "equipamentoContainer"
      }`}
    >
      {language &&
        textContent.map((item) => (
          <ServiceText
            key={item.id}
            {...item}
            isModalVisible={isModalVisible}
            seeMore={"Ver"}
          />
        ))}
    </div>
  );
};

export default ServicesTextDesktop;
