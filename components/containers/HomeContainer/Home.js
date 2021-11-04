import { useEffect, useState, useCallback, useRef } from "react";
import styles from "./Home.module.scss";
import { useMediaQuery } from "@/components/utils/mediaquery";
import NavDesktop from "@/components/sections/nav/navdesktop";
import NavMobile from "@/components/sections/nav/navmobile";
import ButtonNav from "@/components/common/buttonNav/buttonNav";
import Modal from "@/components/common/Modal/modal";
import HeaderHome from "@/components/containers/HeaderHome/HeaderHome";
import LinesHomeSection from "@/components/containers/LinesHomeSection/LinesHomeSection";
import ServicesHome from "@/components/containers/ServicesHome/ServicesHome";
import ScrollNav from "@/components/common/scrollNav/ScrollNav";
import Whatsapp from "@/components/common/whatsapp/whatsapp";
import Footer from "@/components/sections/footer/footer";
import FooterDesktop from "@/components/sections/footer/footerdesktop";
import useWindowSize from "@/components/utils/windowSice";

const HomeSection = () => {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [userName, setUserName] = useState("");
  const [is1thSectionVisible, setIs1thSectionVisible] = useState(false);
  const [is2ndSectionVisible, setIs2ndSectionVisible] = useState(false);
  const [is3rdSectionVisible, setIs3rdSectionVisible] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const size = useWindowSize();

  let isPage1200 = useMediaQuery("(min-width: 1200px)");
  let isPage900 = useMediaQuery("(min-width: 900px)");
  let isScreen1000 = useMediaQuery("(min-width: 1000px)");
  let isScreen700 = useMediaQuery("(min-width: 700px)");

  useEffect(() => {
    const isModalOnLocalStorage = localStorage.getItem("isModal");
    if (isModalOnLocalStorage) {
      setIsModalVisible(false);
    } else {
      setIsModalVisible(true);
    }
  }, [isModalVisible]);

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
    <>
      <div
        className={styles.wrapper + " " + "main home"}
        style={{ height: "100%" }}
      >
        {isPage900 && (
          <ScrollNav
            isVisible3={is3rdSectionVisible}
            isVisible2={is2ndSectionVisible}
            isVisible1={is1thSectionVisible}
          />
        )}
        {isModalVisible && (
          <Modal
            onClose={() => modalConfig()}
            onClick={(e) => modalConfig(e)}
          />
        )}
        {!isPage900 && isNavVisible && (
          <NavMobile onClick={() => setIsNavVisible(false)} />
        )}

        <div
          className={styles.main}
          id="pageContainer"
          style={{ height: "100%" }}
        >
          {!isPage900 && (
            <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />
          )}

          <section
            className={styles.categories + " " + "container"}
            style={{
              scrollSnapType: "y mandatory",
              overflow: "auto",
              height: "100%",
            }}
          >
            {isPage900 && <NavDesktop isFocused={(e) => setIsFocused(e)} />}
            <div
              style={{
                scrollSnapAlign: isScreen1000 ? "center" : "",
                height: "100vh",
              }}
              id="top"
            >
              <HeaderHome
                is1thSectionVisible={(e) => setIs1thSectionVisible(e)}
              />
            </div>
            <div
              style={{
                scrollSnapAlign: isScreen1000 ? "center" : "",
                height: isPage1200 && `${size.height}px`,
              }}
            >
              <ServicesHome
                isModalVisible={isModalVisible}
                isPage1200={isPage1200}
                is2rdSectionVisible={(e) => setIs2ndSectionVisible(e)}
                isVisible={is2ndSectionVisible}
              />
            </div>
            <div
              style={{
                scrollSnapAlign: isScreen1000 ? "center" : "",
                height: "100vh",
                alignContent: "space-between",
              }}
            >
              <LinesHomeSection
                userName={localStorage.getItem("name") || userName}
                isModalVisible={isModalVisible}
                isScreen1000={isScreen1000}
                isPage1200={isPage1200}
                is3rdSectionVisible={(e) => setIs3rdSectionVisible(e)}
                isVisible={is3rdSectionVisible}
              />
              {isScreen1000 ? (
                <FooterDesktop
                  name={localStorage.getItem("name") || userName}
                  autofocus={isFocused}
                />
              ) : (
                <Footer name={localStorage.getItem("name") || userName} />
              )}
            </div>
          </section>
        </div>
        <Whatsapp />
      </div>
    </>
  );
};

export default HomeSection;
