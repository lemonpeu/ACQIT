import { useEffect, useState } from "react";
import styles from "./HeaderHome.module.scss";
import Image from "../../common/Image/Image";
import IsVisible from "../../utils/isVisible";
import { inicio } from "@/locales/es/inicio";
import { home } from "@/locales/en/home";

const HeaderHome = ({ is1thSectionVisible, isEsp }) => {
  //setRef works for choosing position on side nav
  const [setRef, visible] = IsVisible({ threshold: 0.2 });
  const [language, setLanguage] = useState({});

  const videos = [
    "videos/home_1.mp4",
    "videos/home_2.mp4",
    "videos/home_3.mp4",
  ];

  useEffect(() => {
    is1thSectionVisible(visible);
  }, [visible, is1thSectionVisible]);

  const getRandomVideo = () => {
    return videos.sort(() => Math.random() - 0.5);
  };

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
    <div ref={setRef} id="firstSection" className="section">
      <header className={styles.header} style={{ height: "100vh" }}>
        <video autoPlay muted loop className={styles.myVideo}>
          <source src={getRandomVideo().slice(0, 1)} type="video/mp4" />
        </video>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>{language.title}</h1>
          <div className={styles.socialIconsContainer}>
            <div className={styles.imgContainer}>
              <a
                href=" https://www.instagram.com/acqit/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  layout="fixed"
                  width={40}
                  height={40}
                  src="/images/icons/SVG/instagramicon.svg"
                  alt="instagram"
                />
              </a>
            </div>
            <div className={styles.imgContainer}>
              <a
                href="https://www.linkedin.com/company/acqit/about/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  layout="fixed"
                  width={40}
                  height={40}
                  src="/images/icons/SVG/linkedinicon.svg"
                  alt="linkedin"
                />
              </a>
            </div>
            <div className={styles.imgContainer}>
              <a
                href="https://twitter.com/acq_it"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  layout="fixed"
                  width={40}
                  height={40}
                  src="/images/icons/home/twitter.png"
                  alt="twitter"
                />
              </a>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeaderHome;
