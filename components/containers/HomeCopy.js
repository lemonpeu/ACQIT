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
import ScrollNav from "../common/scrollNav/ScrollNav";
import Whatsapp from "../common/whatsapp/whatsapp";
import Footer from "../sections/footer/footer";
import FooterDesktop from "../sections/footer/footerdesktop";
import { useSpring, animated } from "react-spring";
import { useScrollDown } from "../utils/isScrollDown";
import { FullPage, Slide } from "react-full-page";

export default function Home() {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(true);
  const [userName, setUserName] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [is1thSectionVisible, setIs1thSectionVisible] = useState(false);
  const [is2ndSectionVisible, setIs2ndSectionVisible] = useState(false);
  const [is3rdSectionVisible, setIs3rdSectionVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [sectionActive, setSectionActive] = useState("section1");

  const scrollY = useScrollDown();

  let isPage1200 = useMediaQuery("(min-width: 1200px)");
  let isPage900 = useMediaQuery("(min-width: 900px)");
  let isFooterMobile = useMediaQuery("(min-width: 1000px)");

  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0.3 } });

  // function scrollTo(offset, section) {
  //   const fixedOffset = offset.toFixed();
  //   const onScroll = function () {
  //     if (window.pageYOffset.toFixed() === fixedOffset) {
  //       window.removeEventListener("scroll", onScroll);
  //       console.log("Termino");
  //       setIsScrolling(false);
  //       setSectionActive(section);
  //     }
  //   };

  //   window.addEventListener("scroll", onScroll);
  //   onScroll();
  //   window.scrollTo({
  //     top: offset,
  //     behavior: "smooth",
  //   });
  // }

  // useEffect(() => {
  //   console.log(isScrolling);
  // }, [isScrolling]);

  // useEffect(() => {
  //   const servicios = document.getElementById("servicios");
  //   const topServicios = servicios && servicios.offsetTop;
  //   const topSection = servicios && servicios.parentElement.offsetTop;

  //   console.log("suma", topSection);
  //   console.log(sectionActive);
  //   console.log(scrollY + window.outerHeight);
  //   console.log(isScrolling);
  //   const footer = document.getElementById("footer");
  //   const topFooter = footer && footer.offsetTop;
  //   const topSectionFooter = footer && footer.parentElement.offsetTop;

  //   if (
  //     scrollY + window.outerHeight >= topSection &&
  //     sectionActive === "section1" &&
  //     isScrolling === false
  //   ) {
  //     console.log("entre");
  //     window.scrollTo(0, 1599);
  //     setIsScrolling(true);
  //     // setIsSectionVisible({
  //     //   firstSection: false,
  //     //   secondSection: true,
  //     //   thirdSection: false,
  //     // });
  //   } //else if (
  //   //   is3rdSectionVisible &&
  //   //   sectionActive === is2ndSectionVisible &&
  //   //   isScrolling === false
  //   // ) {
  //   //   scrollTo(topFooter + topSectionFooter, is3rdSectionVisible);
  //   //   setIsScrolling(true);
  //   // }
  // }, [
  //   scrollY,
  //   is1thSectionVisible,
  //   is2ndSectionVisible,
  //   is3rdSectionVisible,
  //   sectionActive,
  //   isScrolling,
  // ]);

  // const showSection = () => {
  //   if (is1thSectionVisible) {
  //     return { isVisible1: true, isVisible2: false, isVisible3: false };
  //   } else if (is2ndSectionVisible) {
  //     return { isVisible1: false, isVisible2: true, isVisible3: false };
  //   } else if (is3rdSectionVisible) {
  //     return { isVisible1: false, isVisible2: false, isVisible3: true };
  //   } else {
  //     return { isVisible1: false, isVisible2: false, isVisible3: false };
  //   }
  // };

  // useEffect(() => {
  //   if (scrollY > 400 && scrollY < 1700 && showSection().isVisible2) {
  //     const link = document.getElementById("link2");
  //     link.click();
  //   } else if (scrollY > 1700 && showSection().isVisible3) {
  //     const link = document.getElementById("link4");
  //     link.click();
  //   }
  //   return () => showSection();
  // }, [scrollY, isScrolling]);

  useEffect(() => {
    if (localStorage.getItem("isModal")) {
      setIsModalVisible(false);
    } else {
      setIsModalVisible(true);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem("loading")) {
      setIsLoading(false);
    } else {
      setTimeout(setLoadingBoolean, 5000);
    }
  }, []);

  const modalConfig = (e) => {
    setIsModalVisible(false);
    if (e) {
      setUserName(e);
      localStorage.setItem("name", e);
    }
    localStorage.setItem("isModal", false);
  };

  const setLoadingBoolean = () => {
    localStorage.setItem("loading", false);
    setIsLoading(false);
  };

  return (
    <>
      {isLoading ? (
        <LoadingLogo />
      ) : (
        <animated.div style={props}>
          <div id="top" className={styles.wrapper + " " + "main home"}>
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
            {isPage900 ? (
              <NavDesktop showSubNav />
            ) : (
              isNavVisible && (
                <NavMobile onClick={() => setIsNavVisible(false)} />
              )
            )}

            <div className={styles.main} id="pageContainer">
              {!isPage900 && (
                <ButtonNav setIsNavVisible={(e) => setIsNavVisible(e)} />
              )}
              <HeaderHome
                is1thSectionVisible={(e) => setIs1thSectionVisible(e)}
              />

              <section className={styles.categories}>
                <div className={`${styles.transition} transition`}></div>
                <ServicesHome
                  isModalVisible={isModalVisible}
                  isPage1200={isPage1200}
                  is2rdSectionVisible={(e) => setIs2ndSectionVisible(e)}
                />
                <LinesHomeSection
                  userName={localStorage.getItem("name") || userName}
                  isModalVisible={isModalVisible}
                  isFooterMobile={isFooterMobile}
                  isPage1200={isPage1200}
                  is3rdSectionVisible={(e) => setIs3rdSectionVisible(e)}
                />
              </section>
            </div>
            <Whatsapp />
          </div>
          {isFooterMobile ? (
            <FooterDesktop name={localStorage.getItem("name") || userName} />
          ) : (
            <Footer name={localStorage.getItem("name") || userName} />
          )}
        </animated.div>
      )}
    </>
  );
}
