import { useState, useEffect, useRef } from "react";
import Link from "next/link";

//Utils
import useWindowSize from "../../utils/windowSice";
import IsVisible from "../../utils/isVisible";

//Components
import ServicesGraphic from "../../common/servicesGraphic/servicesGraphic";
import MobileGraphicServices from "../../common/mobileGraphicService/mobileGraphicService";
import Image from "../../common/Image/Image";

//Styles
import styles from "./ServicesHome.module.scss";

const ServicesHome = ({ isModalVisible, isPage1200, is2rdSectionVisible }) => {
  const [showServices, setShowServices] = useState(false);
  const [setRef, visible] = IsVisible({ threshold: 0.2 });

  useEffect(() => {
    is2rdSectionVisible(visible);
  }, [is2rdSectionVisible, visible]);

  const size = useWindowSize();

  return (
    <div
      className={
        styles.servicesWrapper +
        " " +
        `${showServices && styles["servicesWrapperShow"] + " " + "section"}`
      }
      style={{
        height: isPage1200 ? `${size.height}px` : "100%",
      }}
      ref={setRef}
      id="servicios"
    >
      <div className={styles.services}>
        <div className={styles.informationWrapper}>
          <div className={styles.titlesContainer}>
            <div
              className={
                styles.categoriesTitleAnimation + " " + !isModalVisible &&
                "categories-title-animation"
              }
            >
              <h4 className={styles.title}>Servicios</h4>
            </div>
            <h6
              className={`${styles.titleGraphic} ${
                !isModalVisible && "animation-title"
              }`}
            >
              <span
                style={{ zIndex: 20, position: "absolute", height: "100%" }}
              >
                Conocer los servicios
              </span>
            </h6>
          </div>
          {isPage1200 && (
            <button
              onClick={() => setShowServices(true)}
              className="button-graphic-animation"
            >
              <Image
                layout="fixed"
                width={40}
                height={40}
                src="/images/icons/home/SVG/plusicon.svg"
                alt="Expandir"
              />
            </button>
          )}
        </div>

        {isPage1200 ? (
          <ServicesGraphic
            isModalVisible={isModalVisible}
            showServices={showServices}
          />
        ) : (
          <MobileGraphicServices isModalVisible={isModalVisible} />
        )}
      </div>
    </div>
  );
};

export default ServicesHome;
