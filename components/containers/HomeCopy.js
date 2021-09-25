import { useEffect, useState, useRef } from "react";
import styles from "./HomeCopy.module.scss";
import { useMediaQuery } from "../utils/mediaquery";
import NavDesktop from "../sections/nav/navdesktop";
import NavMobile from "../sections/nav/navmobile";
import ButtonNav from "../common/buttonNav/buttonNav";
import Modal from "../common/Modal/modal";
import LoadingLogo from "../common/loadingLogo/loadingLogo";
import HeaderHome from "./HeaderHome/HeaderHome";
import LinesHomeSection from "./LinesHomeSection/LinesHomeSection";
import ServicesHome from "./ServicesHome/ServicesHome";

export default function Home() {
  const messagesRef = useRef(null);
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  let isPage1200 = useMediaQuery("(min-width: 1200px)");
  let isPage900 = useMediaQuery("(min-width: 900px)");
  let isFooterMobile = useMediaQuery("(min-width: 1000px)");

  useEffect(() => {
    if (messagesRef.current) {
      scrollToBottom();
    }
  }, [messagesRef]);

  useEffect(() => {
    if (sessionStorage.getItem("isModal")) {
      setIsModalVisible(false);
    } else {
      setIsModalVisible(true);
    }
  }, [isModalVisible]);

  useEffect(() => {
    if (sessionStorage.getItem("loading")) {
      setIsLoading(false);
    } else {
      setTimeout(setLoadingBoolean, 5000);
    }
  }, [isLoading]);

  const modalConfig = (e) => {
    setIsModalVisible(false);

    if (e) {
      setUserName(e);
    }
    sessionStorage.setItem("isModal", false);
  };

  const setLoadingBoolean = () => {
    sessionStorage.setItem("loading", false);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingLogo />
      ) : (
        <div id="top" className={styles.wrapper + " " + "main"}>
          {isModalVisible && (
            <Modal
              onClose={() => modalConfig()}
              onClick={(e) => modalConfig(e)}
            />
          )}
          {isPage900 ? (
            <NavDesktop />
          ) : (
            isNavVisible && <NavMobile onClick={() => setIsNavVisible(false)} />
          )}
          <div className={styles.main}>
            {!isPage900 && (
              <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />
            )}
            <HeaderHome />
            <section className={styles.categories}>
              <div className={`${styles.transition} transition`}></div>
              <ServicesHome
                isModalVisible={isModalVisible}
                isPage1200={isPage1200}
              />
              <LinesHomeSection
                userName={userName}
                isModalVisible={isModalVisible}
                isFooterMobile={isFooterMobile}
                isPage1200={isPage1200}
              />
            </section>
          </div>
        </div>
      )}
    </>
  );
}
