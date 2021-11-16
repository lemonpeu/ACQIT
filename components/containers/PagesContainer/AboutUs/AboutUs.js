import { useState, useEffect } from "react";
import styles from "./AboutUs.module.scss";
import Footer from "@/components/sections/footer/footer";
import FooterDesktop from "@/components/sections/footer/footerdesktop";
import { useMediaQuery } from "@/components/utils/mediaquery";
import Image from "@/components/common/Image/Image";
import NavMobile from "@/components/sections/nav/navmobile";
import NavDesktop from "@/components/sections/nav/navdesktop";
import ButtonNav from "@/components/common/buttonNav/buttonNav";
import Modal from "@/components/common/Modal/modal";
import NosotrosDescripcion from "@/components/sections/NosotrosDescripcion/NosotrosDescripcion";
import { useScrollDown } from "@/components/utils/isScrollDown";
import useWindowSize from "@/components/utils/windowSice";
import Whatsapp from "@/components/common/whatsapp/whatsapp";

import { inicio } from "@/locales/es/inicio";
import { home } from "@/locales/en/home";

const AboutUsContainer = ({ videoPath }) => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [showText1, setShowText1] = useState(false);
  const [showText2, setShowText2] = useState(false);
  const [showText3, setShowText3] = useState(false);
  const [userName, setUserName] = useState("");
  const scrollY = useScrollDown();
  const size = useWindowSize();
  const [isFocused, setIsFocused] = useState(false);

  const [isEsp, setIsEsp] = useState(true);
  const [language, setLanguage] = useState(inicio);

  let isFooterMobile = useMediaQuery("(min-width: 1000px)");
  let isNavDesktop = useMediaQuery("(min-width: 900px)");
  let is1200 = useMediaQuery("(min-width: 1200px)");

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

  const setLoadingBoolean = () => {
    localStorage.setItem("loading", false);
    setIsLoading(false);
  };

  const setText1 = (e) => {
    if (is1200) {
      setShowText1(e);
    } else {
      setShowText1(e);
      setShowText2(false);
      setShowText3(false);
    }
  };

  const setText2 = (e) => {
    if (is1200) {
      setShowText2(e);
    } else {
      setShowText1(false);
      setShowText2(e);
      setShowText3(false);
    }
  };

  const setText3 = (e) => {
    if (is1200) {
      setShowText3(e);
    } else {
      setShowText1(false);
      setShowText2(false);
      setShowText3(e);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("loading")) {
      setIsLoading(false);
    } else {
      setTimeout(setLoadingBoolean, 5000);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("isModal")) {
      setIsModalVisible(false);
    } else {
      setIsModalVisible(true);
    }
  }, [isModalVisible]);

  return (
    <div className={styles.wrapper + " " + "main"}>
      {isModalVisible && (
        <Modal onClose={() => modalConfig()} onClick={(e) => modalConfig(e)} />
      )}
      {isNavDesktop ? (
        <NavDesktop
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
        <video autoPlay muted loop className={styles.myVideo}>
          <source src={videoPath} type="video/mp4" />
        </video>
        <div className={styles.contentContainer}>
          <div
            style={{
              height: is1200 ? `${size.height}px` : "100%",
            }}
            id="top"
          >
            <div
              className={
                styles.titleContainer + " " + styles.titleContainerPrincipal
              }
            >
              <h1 className={styles.title}> {language.us.title}</h1>
              <div className={styles.lineTitle}></div>
            </div>
            <div className={styles.contentWrapper}>
              <NosotrosDescripcion
                isFooterMobile={isFooterMobile}
                showText1={showText1}
                showText2={showText2}
                showText3={showText3}
                onClick1={(e) => setText1(e)}
                onClick2={(e) => setText2(e)}
                onClick3={(e) => setText3(e)}
                isEsp={isEsp}
              />
            </div>
          </div>
          <div className={styles.textContainerSubContainer}>
            <div className={styles.titleContainer}>
              <h4 className={styles.title}>
                <Image
                  width={25}
                  height={25}
                  src="/images/icons/nosotros/valoresicoon.svg"
                  alt="valores icono"
                />{" "}
                <span style={{ paddingLeft: "1rem" }}>
                  {language.us.values.title}
                </span>
              </h4>
              <div className={styles.lineTitle}></div>
            </div>
            <div className={styles.textContainer}>
              <p
                className={styles.description}
                style={{ marginBottom: "2rem" }}
              >
                {language.us.parraph_1}
                <span style={{ color: "#0885e6" }}>
                  {language.us.values.parraph_2}
                </span>
              </p>
              <p
                className={styles.description}
                style={{ marginBottom: "2rem" }}
              >
                <span className={styles.subTitle}>
                  {language.us.values.innovation}
                </span>
                :
                <span>
                  &nbsp;{language.us.innovation_1}&nbsp;
                  {language.us.values.innovation_2}&nbsp;
                  <span style={{ color: "#0885e6" }}>
                    {language.us.values.innovation_3}
                  </span>
                </span>
              </p>
              <p className={styles.description}>
                <span className={styles.subTitle}>
                  {language.us.values.personalization}
                </span>
                :
                <span>
                  &nbsp;{language.us.values.personalization_1}
                  &nbsp;
                  <span style={{ color: "#0885e6" }}>
                    {language.us.values.personalization_2}
                  </span>
                </span>
              </p>
            </div>
          </div>
          <div className={styles.textContainerSubContainer}>
            <div className={styles.titleContainer}>
              <h4 className={styles.title}>
                <Image
                  width={25}
                  height={25}
                  src="/images/icons/nosotros/misionicon_1.svg"
                  alt="valores icono"
                />

                <span style={{ marginLeft: "1rem" }}>
                  {language.us.mission.title}
                </span>
                <div className={styles.lineTitle}></div>
              </h4>
            </div>
            <div className={styles.textContainer}>
              <p className={styles.description}>
                {language.us.mission.mission_1}
                <span style={{ color: "#0885e6" }}>
                  {language.us.mission.mission_2}
                </span>
              </p>
            </div>
          </div>
          <div className={styles.textContainerSubContainer}>
            <div className={styles.titleContainer}>
              <h4 className={styles.title}>
                <Image
                  width={30}
                  height={30}
                  src="/images/icons/nosotros/visionicon.svg"
                  alt="valores icono"
                />
                <span style={{ paddingLeft: "1rem" }}>
                  {language.us.vision.title}
                </span>
              </h4>
              <div className={styles.lineTitle}></div>
            </div>
            <div className={styles.textContainer}>
              <p className={styles.description}>
                {language.us.vision.vision_1}&nbsp;
                <span style={{ color: "#0885e6" }}>
                  {language.us.vision.vision_2}&nbsp;
                </span>
                {language.us.vision.vision_3}
              </p>
            </div>
          </div>
        </div>
        <Whatsapp />
      </section>
      {isFooterMobile ? (
        <FooterDesktop
          name={localStorage.getItem("name") || userName}
          style={{ zIndex: 0 }}
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

export default AboutUsContainer;
